import { openDatabase, enablePromise, SQLiteDatabase, ResultSet } from "react-native-sqlite-storage";
import { gearSet, Pieces } from "../types";
import { pieceTypes, rareness, tableNames } from "../enums";

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'lm_dresser.db', createFromLocation: "~lm_dresser.db", location: "Library"});
};

export const getPieceById = async (db: SQLiteDatabase, piece_id: number): Promise<Pieces> => {
    try{
        const sqlQuery: string = `SELECT * FROM ${tableNames.pieces} WHERE ${piece_id} = ${tableNames.pieces}.piece_id`
        
        const piece: [ResultSet] = await db.executeSql(sqlQuery)

        return piece[0].rows.item(0)
    }

    catch(e){
        throw Error('Piece loading failed...');
    }
}

export const getAllPiecesByTypeAndRareness = async (db: SQLiteDatabase, type: pieceTypes, rareness: rareness): Promise<Pieces[]> => {
    try{
        if(type === "accessory1" || type === "accessory2" || type === "accessory3"){
            type = pieceTypes.accessory
        }
        const piecesArray: Pieces[] = []
        const sqlQuery: string = `SELECT ${tableNames.pieces}.piece_id, ${tableNames.pieces}.name, ${tableNames.pieces}.type,
            ${tableNames.pieces}.image_path, ${tableNames.stats}.armyAtk, ${tableNames.stats}.armyDeff, ${tableNames.stats}.armyHp,
            ${tableNames.stats}.infantryAtk, ${tableNames.stats}.infantryDeff,${tableNames.stats}.infantryHp,
            ${tableNames.stats}.rangedAtk, ${tableNames.stats}.rangedDeff, ${tableNames.stats}.rangedHp,
            ${tableNames.stats}.cavalryAtk, ${tableNames.stats}.cavalryDeff, ${tableNames.stats}.cavalryHp
            FROM ${tableNames.pieces}, ${tableNames.rareness_stats}, ${tableNames.stats} WHERE  
            (${tableNames.pieces}.type = "${type}") AND (${tableNames.pieces}.rareness_stats_id = ${tableNames.rareness_stats}.rareness_stats_id)
            AND (${tableNames.stats}.stats_id = ${tableNames.rareness_stats}.${rareness}_stats_id) ORDER BY ${tableNames.pieces}.piece_id`
            
        const pieces: [ResultSet] = await db.executeSql(sqlQuery)
    
        pieces.forEach(piece =>  {
            for (let i = 0; i < piece.rows.length; i++) {
                piecesArray.push(piece.rows.item(i))
            }
        });
    
            return piecesArray
     }
 
     catch(e){
        throw Error('Pieces loading failed...' + JSON.stringify(e));
     } 
}

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

        const allGearSets: [ResultSet] = await db.executeSql(sqlQueryGetGearSets)

        console.log((allGearSets[0].rows.raw()))
            
            for (let i = 0; i < allGearSets[0].rows.length; i++) {
                gearSets.push(
                    {
                        id: allGearSets[0].rows.item(i).gear_sets_id,
                        title:  allGearSets[0].rows.item(i).title,
                        mainHand: await getPieceById(db, allGearSets[0].rows.item(i).mainHand),
                        helmet: await getPieceById(db, allGearSets[0].rows.item(i).helmet),
                        plate:await getPieceById(db, allGearSets[0].rows.item(i).plate),
                        boots: await getPieceById(db, allGearSets[0].rows.item(i).boots),
                        secondHand: await getPieceById(db, allGearSets[0].rows.item(i).secondHand),
                        accessory1: await getPieceById(db, allGearSets[0].rows.item(i).accessory1),
                        accessory2: await getPieceById(db, allGearSets[0].rows.item(i).accessory2),
                        accessory3: await getPieceById(db, allGearSets[0].rows.item(i).accessory3),
                        rarenessArray: {
                            mainHandRareness: allGearSets[0].rows.item(i).mainHand_rareness,
                            helmetRareness: allGearSets[0].rows.item(i).helmet_rareness,
                            plateRareness: allGearSets[0].rows.item(i).plate_rareness,
                            bootsRareness: allGearSets[0].rows.item(i).boots_rareness,
                            secondHandRareness: allGearSets[0].rows.item(i).secondHand_rareness,
                            accessory1Rareness: allGearSets[0].rows.item(i).accessory1_rareness,
                            accessory2Rareness: allGearSets[0].rows.item(i).accessory2_rareness,
                            accessory3Rareness: allGearSets[0].rows.item(i).accessory3_rareness,
                        }
                    }
                )
            }

        return gearSets
    } catch (e){
        throw Error("Gear sets loading failed..." + JSON.stringify(e))
    }
}

export const updateGearSet = async (db: SQLiteDatabase, gearSet: gearSet, title: string | null): Promise<boolean> => {
    try{

        console.log("GearSet to update: " + JSON.stringify(gearSet))
    const sqlQueryUpdateGearSetRareness: string = `UPDATE ${tableNames.gear_set_pieces_rareness}
            SET mainHand_rareness = ${gearSet.rarenessArray.mainHandRareness ? `'${gearSet.rarenessArray.mainHandRareness}'` : null},
            helmet_rareness = ${gearSet.rarenessArray.helmetRareness ? `'${gearSet.rarenessArray.helmetRareness}'` : null},
            plate_rareness = ${gearSet.rarenessArray.plateRareness ? `'${gearSet.rarenessArray.plateRareness}'` : null},
            boots_rareness = ${gearSet.rarenessArray.bootsRareness ? `'${gearSet.rarenessArray.bootsRareness}'` : null},
            secondHand_rareness = ${gearSet.rarenessArray.secondHandRareness? `'${gearSet.rarenessArray.secondHandRareness}'` : null},
            accessory1_rareness = ${gearSet.rarenessArray.accessory1Rareness ? `'${gearSet.rarenessArray.accessory1Rareness}'` : null},
            accessory2_rareness = ${gearSet.rarenessArray.accessory2Rareness ? `'${gearSet.rarenessArray.accessory2Rareness}'` : null},
            accessory3_rareness = ${gearSet.rarenessArray.accessory3Rareness ? `'${gearSet.rarenessArray.accessory3Rareness}'` : null}
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

        console.log("Rareness: " + sqlQueryUpdateGearSetRareness + "\n GearSet: " + sqlQueryUpdateGearSet)

        console.log("SELECT: " + JSON.stringify((await db.executeSql(`SELECT * FROM ${tableNames.gear_sets}`))[0].rows.raw()))
        

    return true
}

    catch(e){
        throw Error("All gear sets loading failed..." + JSON.stringify(e))
}
}