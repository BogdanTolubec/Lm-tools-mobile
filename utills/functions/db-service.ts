import { openDatabase, enablePromise, SQLiteDatabase, ResultSet } from "react-native-sqlite-storage";
import { gearSet, jewel, Piece, stats, PieceJewels } from "../types";
import { pieceTypes, rareness, tableNames } from "../enums";

enablePromise(true);

//db connection___________________________________________________________________

export const getDBConnection = async () => {
  return openDatabase({name: 'lm_dresser.db', createFromLocation: "~lm_dresser.db", location: "Library"});
};

//Pieces___________________________________________________________________

export const getPieceStatsByIdAndRareness = async (db: SQLiteDatabase, pieceId: number, piece_rareness: rareness): Promise<stats> => {
    try{
        const sqlQueryGetJewelStatsByIdAndRareness: string = `SELECT armyAtk, armyDeff, armyHp, infantryAtk, infantryDeff, infantryHp,
            rangedAtk, rangedDeff, rangedHp, cavalryAtk, cavalryDeff, cavalryHp FROM ${tableNames.stats}
	        WHERE stats_id = 
            (SELECT stats_id FROM ${tableNames.stats}, ${tableNames.piece_rareness_stats} WHERE (stats_id = ${piece_rareness}_stats_id)
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

export const getPieceByIdAndRareness = async (db: SQLiteDatabase, pieceId: number, pieceRareness: rareness): Promise<Piece> => {
    try{
        const sqlQuery: string = `SELECT * FROM ${tableNames.pieces} WHERE ${pieceId} = ${tableNames.pieces}.piece_id`
        
        const queryData: [ResultSet] = await db.executeSql(sqlQuery)

        const piece: Piece = {
            piece_id: queryData[0].rows.item(0).piece_id,
            name: queryData[0].rows.item(0).name,
            rareness: pieceRareness,
            type: queryData[0].rows.item(0).type,
            image_path: queryData[0].rows.item(0).image_path,

            jewels: {
                jewel_1: undefined,
                jewel_2: undefined,
                jewel_3: undefined,
            },

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
                const currentPiece: Piece = await getPieceByIdAndRareness(db, piece.rows.item(i).piece_id, piecesRareness)
                piecesArray.push(currentPiece)
            }
        }

        console.log("ARR:" + JSON.stringify(piecesArray))

        return piecesArray
     }
 
     catch(e){
        throw Error('Pieces loading failed...' + JSON.stringify(e));
     } 
}

//gear sets___________________________________________________________________

export const createGearSet = async (db: SQLiteDatabase): Promise<boolean> => {
    try{
        const sqlQueryCreateGearSetRarenessArray: string = `INSERT INTO ${tableNames.gear_set_pieces_rareness} (mainHand_rareness,
            helmet_rareness, plate_rareness, boots_rareness, secondHand_rareness, accessory1_rareness, accessory2_rareness, accessory3_rareness)
            VALUES (NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)`

        const rarenessArrayCreationResult: ResultSet[] = await db.executeSql(sqlQueryCreateGearSetRarenessArray)

        const sqlQueryCreateGearSet: string = `INSERT INTO ${tableNames.gear_sets} (gear_set_pieces_rareness_id) 
            VALUES (${rarenessArrayCreationResult[0].insertId})`

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
        throw Error("All gear sets loading failed..." + JSON.stringify(e))
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

export const getJewelByIdAndRareness = async (db: SQLiteDatabase, jewelId: number, jewelRareness: rareness): Promise<jewel> => {
    try{
        const sqlQueryGetJewelById: string = `SELECT * FROM ${tableNames.jewels} WHERE jewel_id = ${jewelId}`

        const queryData: ResultSet[] = await db.executeSql(sqlQueryGetJewelById)

        const jewel = {
            jewel_id: queryData[0].rows.item(0).jewel_id,
            name: queryData[0].rows.item(0).name,
            rareness: jewelRareness,
            image_path: queryData[0].rows.item(0).imgPath,
            stats: await getJewelStatsByIdAndRareness(db, jewelId, jewelRareness),
        }

        return jewel
    }
    catch(e){
        throw Error("Jewel by id loading failed... " + JSON.stringify(e))
    }
}

export const getJewelsByPiece = async (db: SQLiteDatabase, jewelByPieceId: number): Promise<PieceJewels> => {
    try{
        const sqlQueryGetJewelById: string = `SELECT * FROM ${tableNames.jewels_by_piece} WHERE jewels_by_piece_id = ${jewelByPieceId}`

        const queryData: ResultSet[] = await db.executeSql(sqlQueryGetJewelById)

        const jewels: Array<jewel | undefined> = [
            await getJewelByIdAndRareness(db, queryData[0].rows.item(0).jewel_1, queryData[0].rows.item(0).jewel_1_rareness),
            await getJewelByIdAndRareness(db, queryData[0].rows.item(0).jewel_2, queryData[0].rows.item(0).jewel_2_rareness),
            await getJewelByIdAndRareness(db, queryData[0].rows.item(0).jewel_3, queryData[0].rows.item(0).jewel_3_rareness)
        ]

        return {jewel_1: jewels[0], jewel_2: jewels[1] , jewel_3: jewels[2]}
    }
    catch(e){
        throw Error("Jewel by id loading failed... " + JSON.stringify(e))
    }
}