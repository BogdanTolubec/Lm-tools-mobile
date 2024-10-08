import { openDatabase, enablePromise, SQLiteDatabase, ResultSet } from "react-native-sqlite-storage";
import { gearSet, jewel, Piece, stats } from "../types";
import { pieceTypes, rareness, tableNames } from "../enums";
import { gearSetPiecesCount } from "../consts";

enablePromise(true);

//db connection___________________________________________________________________

export const getDBConnection = async () => {
  return openDatabase({name: 'lm_dresser.db', createFromLocation: "~lm_dresser.db", location: "Library"});
};

//Pieces___________________________________________________________________

export const getPieceStatsByIdAndRareness = async (db: SQLiteDatabase, pieceId: number, pieceRareness: rareness): Promise<stats> => {
    try{
        const sqlQueryGetJewelStatsByIdAndRareness: string = `SELECT armyAtk, armyDeff, armyHp, infantryAtk, infantryDeff, infantryHp,
            rangedAtk, rangedDeff, rangedHp, cavalryAtk, cavalryDeff, cavalryHp FROM ${tableNames.stats}
	        WHERE stats_id = 
            (SELECT stats_id FROM ${tableNames.stats}, ${tableNames.piece_rareness_stats} WHERE (stats_id = ${pieceRareness}_stats_id)
	        AND piece_rareness_stats_id = 
            (SELECT piece_rareness_stats_id FROM ${tableNames.pieces} WHERE piece_id = ${pieceId}))`

        const queryData: ResultSet[] = await db.executeSql(sqlQueryGetJewelStatsByIdAndRareness)

        const stats: stats = queryData[0].rows.item(0)

        return stats
    }
    catch(e){
        throw Error("Piece stats loading failed... " + JSON.stringify(e))
    }
}

export const getPieceByIdAndRareness = async (db: SQLiteDatabase, pieceId: number | null, pieceRareness: rareness | null): Promise<Piece | undefined> => {
    try{
        if(!pieceId || ! pieceRareness) {return undefined}

        const sqlQuery: string = `SELECT * FROM ${tableNames.pieces} WHERE ${pieceId} = ${tableNames.pieces}.piece_id`
        
        const queryData: [ResultSet] = await db.executeSql(sqlQuery)

        const piece: Piece = {
            piece_id: queryData[0].rows.item(0).piece_id,
            name: queryData[0].rows.item(0).name,
            rareness: pieceRareness,
            type: queryData[0].rows.item(0).type,
            imagePath: queryData[0].rows.item(0).image_path,

            jewels: [undefined, undefined, undefined],

            stats: await getPieceStatsByIdAndRareness(db, pieceId, pieceRareness),
        }

        return piece
    }

    catch(e){
        throw Error('Piece loading failed...' + JSON.stringify(e));
    }
}

export const getAllPiecesByTypeAndRareness = async (db: SQLiteDatabase, type: pieceTypes, piecesRareness: rareness): Promise<Piece[]> => {
    try{
        if(type === "accessory1" || type === "accessory2" || type === "accessory3"){
            type = pieceTypes.accessory
        }
        const piecesArray: Piece[] = []
        const sqlQuery: string = `SELECT piece_id FROM ${tableNames.pieces} WHERE  (type = "${type}") ORDER BY piece_id`
            
        const pieces: [ResultSet] = await db.executeSql(sqlQuery)
    
        for(const piece of pieces) { //never use arr.foreach(async () => {}) use this because of issues
            for (let i = 0; i < piece.rows.length; i++) {
                const currentPiece: Piece | undefined = await getPieceByIdAndRareness(db, piece.rows.item(i).piece_id, piecesRareness)
                
                if(currentPiece) {piecesArray.push(currentPiece)}
            }
        }

        return piecesArray
     }
 
     catch(e){
        throw Error('Pieces loading failed...' + JSON.stringify(e));
     } 
}

//gear sets___________________________________________________________________

export const createGearSet = async (db: SQLiteDatabase): Promise<boolean> => {
    try{
        const sqlQueryCreateGearSetRarenessArray: string = `INSERT INTO ${tableNames.gear_set_pieces_rareness} (
            mainHand_rareness, helmet_rareness, plate_rareness, boots_rareness, secondHand_rareness, 
            accessory1_rareness, accessory2_rareness, accessory3_rareness)
            VALUES (NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)`

        const sqlQueryCreateJewelsByPiece: string = `INSERT INTO ${tableNames.jewels_by_piece} ( jewel_1, jewel_2, jewel_3 )
            VALUES (null, null, null)`
        
        const jewelsByPieceIdArray: number[] = []
        const rarenessArrayCreationResult: ResultSet[] = await db.executeSql(sqlQueryCreateGearSetRarenessArray)

        for(let i = 0; i < gearSetPiecesCount; i++){
            const jewelsByPieceCreationResult: ResultSet[] = await db.executeSql(sqlQueryCreateJewelsByPiece)

            jewelsByPieceIdArray.push(jewelsByPieceCreationResult[0].insertId)
        }

        const sqlQueryCreateJewelsSet: string = `INSERT INTO ${tableNames.jewels_set} (mainHand_jewels, helmet_jewels,
            plate_jewels, boots_jewels, secondHand_jewels, accessory1_jewels, accessory2_jewels, accessory3_jewels)
            VALUES(${jewelsByPieceIdArray[0]}, ${jewelsByPieceIdArray[1]}, ${jewelsByPieceIdArray[2]},
            ${jewelsByPieceIdArray[3]},  ${jewelsByPieceIdArray[4]}, ${jewelsByPieceIdArray[5]},
            ${jewelsByPieceIdArray[6]}, ${jewelsByPieceIdArray[7]})`

        const jewelSetCreationResult: ResultSet[] = await db.executeSql(sqlQueryCreateJewelsSet)

        const sqlQueryCreateGearSet: string = `INSERT INTO ${tableNames.gear_sets} (gear_set_pieces_rareness_id, jewels_set_id) 
            VALUES (${rarenessArrayCreationResult[0].insertId}, ${jewelSetCreationResult[0].insertId})`

        await db.executeSql(sqlQueryCreateGearSet)

        return true
    }

    catch(e){
        throw Error("Gear set creation went wrong: " + JSON.stringify(e))
    }
}

export const getALLGearSets = async (db: SQLiteDatabase): Promise<gearSet[]> => {
    try{
        let gearSets: gearSet[] = []

        const sqlQueryGetGearSets: string = `SELECT * FROM ${tableNames.gear_sets}, ${tableNames.gear_set_pieces_rareness}
            WHERE gear_set_pieces_rareness_id = ${tableNames.gear_set_pieces_rareness}.gear_set_piece_rareness_id ORDER BY ${tableNames.gear_sets}.gear_sets_id`
        const sqlQueryGetJewelsSets: string = `SELECT mainHand_jewels, helmet_jewels, plate_jewels, boots_jewels, secondHand_jewels, 
                accessory1_jewels, accessory2_jewels, accessory3_jewels FROM ${tableNames.jewels_set}`

        const sql = `SELECT * FROM ${tableNames.jewels_set}`

        const allGearSets: [ResultSet] = await db.executeSql(sqlQueryGetGearSets)
        const allJewelsSets: [ResultSet] = await db.executeSql(sqlQueryGetJewelsSets)
            
            for (let i = 0; i < allGearSets[0].rows.length; i++) {

                const currentGearSet: gearSet = {
                id: allGearSets[0].rows.item(i).gear_sets_id,
                title:  allGearSets[0].rows.item(i).title,

                mainHand: await getPieceByIdAndRareness(db, allGearSets[0].rows.item(i).mainHand, allGearSets[0].rows.item(i).mainHand_rareness),
                helmet: await getPieceByIdAndRareness(db, allGearSets[0].rows.item(i).helmet, allGearSets[0].rows.item(i).helmet_rareness),
                plate:await getPieceByIdAndRareness(db, allGearSets[0].rows.item(i).plate, allGearSets[0].rows.item(i).plate_rareness),
                boots: await getPieceByIdAndRareness(db, allGearSets[0].rows.item(i).boots, allGearSets[0].rows.item(i).boots_rareness),
                secondHand: await getPieceByIdAndRareness(db, allGearSets[0].rows.item(i).secondHand, allGearSets[0].rows.item(i).secondHand_rareness),
                accessory1: await getPieceByIdAndRareness(db, allGearSets[0].rows.item(i).accessory1, allGearSets[0].rows.item(i).accessory1_rareness),
                accessory2: await getPieceByIdAndRareness(db, allGearSets[0].rows.item(i).accessory2, allGearSets[0].rows.item(i).accessory2_rareness),
                accessory3: await getPieceByIdAndRareness(db, allGearSets[0].rows.item(i).accessory3, allGearSets[0].rows.item(i).accessory3_rareness),
            }

                if (currentGearSet.mainHand) currentGearSet.mainHand.jewels = await getJewelsByPiece(db, allJewelsSets[0].rows.item(i).mainHand_jewels)
                if (currentGearSet.helmet) currentGearSet.helmet.jewels = await getJewelsByPiece(db, allJewelsSets[0].rows.item(i).helmet_jewels)
                if (currentGearSet.plate) currentGearSet.plate.jewels = await getJewelsByPiece(db, allJewelsSets[0].rows.item(i).plate_jewels)
                if (currentGearSet.boots) currentGearSet.boots.jewels = await getJewelsByPiece(db, allJewelsSets[0].rows.item(i).boots_jewels)
                if (currentGearSet.secondHand) currentGearSet.secondHand.jewels = await getJewelsByPiece(db, allJewelsSets[0].rows.item(i).secondHand_jewels)
                if (currentGearSet.accessory1) currentGearSet.accessory1.jewels = await getJewelsByPiece(db, allJewelsSets[0].rows.item(i).accessory1_jewels)
                if (currentGearSet.accessory2) currentGearSet.accessory2.jewels = await getJewelsByPiece(db, allJewelsSets[0].rows.item(i).accessory2_jewels)
                if (currentGearSet.accessory3) currentGearSet.accessory3.jewels = await getJewelsByPiece(db, allJewelsSets[0].rows.item(i).accessory3_jewels)

                gearSets.push(currentGearSet)
            }

        return gearSets
    } catch (e){
        throw Error("Gear sets loading failed..." + JSON.stringify(e))
    }
}

export const updateGearSet = async (db: SQLiteDatabase, gearSet: gearSet, title: string | null): Promise<boolean> => {
    try{

    // jewels update
    const jewelsByGearSet: Array<Array<jewel | undefined> | undefined> = [gearSet.mainHand?.jewels, gearSet.helmet?.jewels,
        gearSet.plate?.jewels, gearSet.boots?.jewels, gearSet.secondHand?.jewels, 
        gearSet.accessory1?.jewels, gearSet.accessory2?.jewels, gearSet.accessory3?.jewels
    ]

    const sqlQuerySelectJewelsByPieceIds: string = `SELECT mainHand_jewels, helmet_jewels,
    plate_jewels, boots_jewels, secondHand_jewels, accessory1_jewels, accessory2_jewels, accessory3_jewels 
    FROM ${tableNames.gear_sets}, ${tableNames.jewels_set} WHERE (gear_sets_id = ${gearSet.id}) 
    AND (${tableNames.gear_sets}.jewels_set_id = ${tableNames.jewels_set}.jewels_set_id)`

    const queryData: ResultSet[] = await db.executeSql(sqlQuerySelectJewelsByPieceIds)

    const jewelsByPieceByGearSetIdsArray: number[] = [queryData[0].rows.item(0).mainHand_jewels, 
    queryData[0].rows.item(0).helmet_jewels, queryData[0].rows.item(0).plate_jewels, queryData[0].rows.item(0).boots_jewels,
    queryData[0].rows.item(0).secondHand_jewels, queryData[0].rows.item(0).accessory1_jewels,
    queryData[0].rows.item(0).accessory2_jewels, queryData[0].rows.item(0).accessory3_jewels]

    for(let i = 0; i < gearSetPiecesCount; i++){

    let sqlQueryUpdateJewelsByPiece: string = `UPDATE ${tableNames.jewels_by_piece}
        SET jewel_1 = ${jewelsByGearSet[i]?.[0]?.jewel_id || null},
        jewel_1_rareness = '${jewelsByGearSet[i]?.[0]?.rareness || null}',
        jewel_2 = ${jewelsByGearSet[i]?.[1]?.jewel_id || null},
        jewel_2_rareness = '${jewelsByGearSet[i]?.[1]?.rareness || null}',
        jewel_3 = ${jewelsByGearSet[i]?.[2]?.jewel_id || null},
        jewel_3_rareness = '${jewelsByGearSet[i]?.[2]?.rareness || null}'
        WHERE jewels_by_piece_id = ${jewelsByPieceByGearSetIdsArray[i]}`
    
        await db.executeSql(sqlQueryUpdateJewelsByPiece)
    }

    //pieces update
    const sqlQueryUpdateGearSetRareness: string = `UPDATE ${tableNames.gear_set_pieces_rareness}
            SET mainHand_rareness = ${gearSet.mainHand?.rareness ? `'${gearSet.mainHand?.rareness}'` : null},
            helmet_rareness = ${gearSet.helmet?.rareness ? `'${gearSet.helmet?.rareness}'` : null},
            plate_rareness = ${gearSet.plate?.rareness ? `'${gearSet.plate?.rareness}'` : null},
            boots_rareness = ${gearSet.boots?.rareness ? `'${gearSet.boots?.rareness}'` : null},
            secondHand_rareness = ${gearSet.secondHand?.rareness? `'${gearSet.secondHand?.rareness}'` : null},
            accessory1_rareness = ${gearSet.accessory1?.rareness ? `'${gearSet.accessory1?.rareness}'` : null},
            accessory2_rareness = ${gearSet.accessory2?.rareness ? `'${gearSet.accessory2?.rareness}'` : null},
            accessory3_rareness = ${gearSet.accessory3?.rareness ? `'${gearSet.accessory3?.rareness}'` : null}
            WHERE ${tableNames.gear_set_pieces_rareness}.gear_set_piece_rareness_id = (SELECT gear_set_pieces_rareness_id
            FROM ${tableNames.gear_sets} WHERE ${tableNames.gear_sets}.gear_sets_id = ${gearSet.id})`
    
    const sqlQueryUpdateGearSet: string = `UPDATE ${tableNames.gear_sets}
            SET mainHand = ${gearSet.mainHand?.piece_id || null},
                helmet = ${gearSet.helmet?.piece_id || null},
                plate = ${gearSet.plate?.piece_id || null},
                boots = ${gearSet.boots?.piece_id || null},
                secondHand = ${gearSet.secondHand?.piece_id || null},
                accessory1 = ${gearSet.accessory1?.piece_id || null},
                accessory2 = ${gearSet.accessory2?.piece_id || null},
                accessory3 = ${gearSet.accessory3?.piece_id || null},
                title = '${title}'
            WHERE ${tableNames.gear_sets}.gear_sets_id = ${gearSet.id}`


        await db.executeSql(sqlQueryUpdateGearSetRareness)
        await db.executeSql(sqlQueryUpdateGearSet)        

    return true
}

    catch(e){
        throw Error("Updating gear sets failed..." + JSON.stringify(e))
}
}

export const deleteGearSetById = async (db: SQLiteDatabase, gearSetId: number | undefined): Promise<boolean> => {
    try{
        if(!gearSetId){return false}

        const sqlQueryDeleteJewelsByPiece: string = `DELETE FROM ${tableNames.jewels_by_piece} WHERE SELECT()`
        const sqlQueryDeleteGearSetById: string = `DELETE FROM ${tableNames.gear_sets} WHERE gear_sets_id = ${gearSetId}`

        await db.executeSql(sqlQueryDeleteGearSetById)

        return true
    } catch (e){
        throw Error("Gear set delete error: " + JSON.stringify(e))
    }
}

//jewels___________________________________________________________________
export const getJewelStatsByIdAndRareness = async (db: SQLiteDatabase, jewelId: number, jewel_rareness: rareness): Promise<stats> => {
    try{
        const sqlQueryGetJewelStatsByIdAndRareness: string = `SELECT armyAtk, armyDeff, armyHp, infantryAtk, infantryDeff, infantryHp,
            rangedAtk, rangedDeff, rangedHp, cavalryAtk, cavalryDeff, cavalryHp FROM ${tableNames.stats}
	        WHERE stats_id = 
            (SELECT stats_id FROM ${tableNames.stats}, ${tableNames.jewels_rareness_stats} WHERE (stats_id = ${jewel_rareness}_stats_id)
	        AND jewels_rareness_stats_id = 
            (SELECT rareness_stats_id FROM ${tableNames.jewels} WHERE jewel_id = ${jewelId}))`

        const queryData: ResultSet[] = await db.executeSql(sqlQueryGetJewelStatsByIdAndRareness)

        const stats: stats = queryData[0].rows.item(0)

        return stats
    }
    catch(e){
        throw Error("Jewel stats loading failed... " + JSON.stringify(e))
    }
}

export const getJewelByIdAndRareness = async (db: SQLiteDatabase, jewelId: number | null, jewelRareness: rareness | null): Promise<jewel | undefined> => {
    try{
        if(!jewelId || ! jewelRareness) {return undefined}
        const sqlQueryGetJewelById: string = `SELECT * FROM ${tableNames.jewels} WHERE jewel_id = ${jewelId}`

        const queryData: ResultSet[] = await db.executeSql(sqlQueryGetJewelById)

        const jewel = {
            jewel_id: queryData[0].rows.item(0).jewel_id,
            name: queryData[0].rows.item(0).name,
            rareness: jewelRareness,
            imagePath: queryData[0].rows.item(0).imgPath,
            stats: await getJewelStatsByIdAndRareness(db, jewelId, jewelRareness),
        }

        return jewel
    }
    catch(e){
        throw Error("Jewel by id loading failed... " + JSON.stringify(e))
    }
}

export const getJewelsByPiece = async (db: SQLiteDatabase, jewelsByPieceId: number | null): Promise<Array<jewel | undefined>> => {
    try{
        if(!jewelsByPieceId) return [undefined, undefined, undefined]

        const sqlQueryGetJewelById: string = `SELECT * FROM ${tableNames.jewels_by_piece} WHERE jewels_by_piece_id = ${jewelsByPieceId}`

        const queryData: ResultSet[] = await db.executeSql(sqlQueryGetJewelById)

        const jewels: Array<jewel | undefined> = [
            await getJewelByIdAndRareness(db, queryData[0].rows.item(0).jewel_1, queryData[0].rows.item(0).jewel_1_rareness),
            await getJewelByIdAndRareness(db, queryData[0].rows.item(0).jewel_2, queryData[0].rows.item(0).jewel_2_rareness),
            await getJewelByIdAndRareness(db, queryData[0].rows.item(0).jewel_3, queryData[0].rows.item(0).jewel_3_rareness)
        ]

        return [jewels[0], jewels[1] , jewels[2]]
    }
    catch(e){
        throw Error("Jewel by id loading failed... " + JSON.stringify(e))
    }
}

export const getAllJewelsByRareness = async (db: SQLiteDatabase, jewelsRareness: rareness): Promise<jewel[]> => {
    try{
        const sqlQueryGetJewelsByRareness: string = `SELECT jewel_id as id, ${tableNames.jewels}.imgPath, 
            ${tableNames.jewels}.name, armyAtk, armyDeff, armyHp, infantryAtk, infantryDeff, infantryHp,
            rangedAtk, rangedDeff, rangedHp, cavalryAtk, cavalryDeff, cavalryHp FROM ${tableNames.stats}, ${tableNames.jewels}
	        WHERE stats_id = 
            (SELECT stats_id FROM ${tableNames.stats}, ${tableNames.jewels_rareness_stats} 
            WHERE (stats_id = ${jewelsRareness}_stats_id)
	        AND jewels_rareness_stats_id = 
            (SELECT rareness_stats_id FROM jewels WHERE ${tableNames.jewels}.jewel_id = id))`

        const jewelsArray: jewel[] = []

        const queryResult: ResultSet[] = await db.executeSql(sqlQueryGetJewelsByRareness)

        for(let i = 0; i < queryResult[0].rows.length; i++){
            jewelsArray.push({
                jewel_id: queryResult[0].rows.item(i).id,
                name: queryResult[0].rows.item(i).name,
                rareness: jewelsRareness,
                imagePath: queryResult[0].rows.item(i).imgPath,
                stats: {
                    armyAtk: queryResult[0].rows.item(i).armyAtk,
                    armyHp: queryResult[0].rows.item(i).armyHp,
                    armyDeff: queryResult[0].rows.item(i).armyDeff,
                
                    infantryAtk: queryResult[0].rows.item(i).infantryAtk,
                    infantryHp: queryResult[0].rows.item(i).infantryHp,
                    infantryDeff: queryResult[0].rows.item(i).infantryDeff,
                    
                    rangedAtk: queryResult[0].rows.item(i).rangedAtk,
                    rangedHp: queryResult[0].rows.item(i).rangedHp,
                    rangedDeff: queryResult[0].rows.item(i).rangedDeff,
                
                    cavalryAtk: queryResult[0].rows.item(i).cavalryAtk,
                    cavalryHp: queryResult[0].rows.item(i).cavalryHp,
                    cavalryDeff: queryResult[0].rows.item(i).cavalryDeff,
                }
            })
        }

        return jewelsArray

    } catch(e){
        throw Error("Jewels by rareness loading failed... " + JSON.stringify(e))
    }
}