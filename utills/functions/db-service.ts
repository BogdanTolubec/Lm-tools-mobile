import { openDatabase, enablePromise, SQLiteDatabase } from "react-native-sqlite-storage";
import { gearSet, Pieces } from "../types";
import { pieceTypes, rareness, tableNames } from "../enums";

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'lm_dresser.db', createFromLocation: "~lm_dresser.db", location: "Library"});
};

export const getAllPieces = async (db: SQLiteDatabase): Promise<Pieces[]> => {
   try{
        const piecesArray: Pieces[] = []
        const sqlQuery: string = `SELECT * FROM ${tableNames.pieces}, ${tableNames.stats} WHERE ${tableNames.stats}.id = ${tableNames.pieces}.id`
        
        const pieces = await db.executeSql(sqlQuery)

        pieces.forEach(piece =>  {
            for (let i = 0; i < piece.rows.length; i++) {
                piecesArray.push(piece.rows.item(i))
            }
        });

        return piecesArray
    }

    catch(e){
        throw Error('Pieces loading failed...');
    } 
}

export const getPieceById = async (db: SQLiteDatabase, piece_id: number): Promise<Pieces> => {
    try{
        const sqlQuery: string = `SELECT * FROM ${tableNames.pieces} WHERE ${piece_id} = ${tableNames.pieces}.id`
        
        const piece = await db.executeSql(sqlQuery)

        return piece[0].rows.item(0)
    }

    catch(e){
        throw Error('Piece loading failed...');
    }
}

export const getAllPiecesByTypeAndRareness = async (db: SQLiteDatabase, type: pieceTypes, rareness: rareness): Promise<Pieces[]> => {
    try{
        const piecesArray: Pieces[] = []
        const sqlQuery: string = `SELECT ${tableNames.pieces}.name, ${tableNames.pieces}.type, ${tableNames.pieces}.image_path,
            ${tableNames.stats}.armyAtk, ${tableNames.stats}.armyDeff, 
            ${tableNames.stats}.infantryAtk, ${tableNames.stats}.infantryDeff,${tableNames.stats}.infantryHp,
            ${tableNames.stats}.rangedAtk, ${tableNames.stats}.rangedDeff, ${tableNames.stats}.rangedHp,
            ${tableNames.stats}.cavalryAtk, ${tableNames.stats}.cavalryDeff, ${tableNames.stats}.cavalryHp
            FROM ${tableNames.pieces}, ${tableNames.rareness_stats}, ${tableNames.stats} WHERE  
            (${tableNames.pieces}.type = "${type}") AND (${tableNames.pieces}.rareness_stats_id = ${tableNames.rareness_stats}.id)
            AND (${tableNames.stats}.id = ${tableNames.rareness_stats}.rare_stats_id) ORDER BY ${tableNames.pieces}.id`
            
        const pieces = await db.executeSql(sqlQuery)
    
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

export const addPiece = async (db: SQLiteDatabase, piece: Pieces): Promise<void> => {
    const sqlQueryStats = `INSERT INTO ${tableNames.stats} (armyAtk, armyHp, armyDeff, infantryAtk, infantryHp, infantryDeff,
    rangedAtk, rangedHp, rangedDeff, cavalryAtk, cavalryHp, cavalryDeff)

    VALUES (${piece.armyAtk || null}, ${piece.armyHp || null}, ${piece.armyDeff || null}, ${piece.infantryAtk || null},
    ${piece.infantryHp || null}, ${piece.infantryDeff || null}, ${piece.rangedAtk || null}, ${piece.rangedHp || null},
    ${piece.rangedDeff || null}, ${piece.cavalryAtk || null}, ${piece.cavalryHp || null}, ${piece.cavalryDeff || null})`

    const sqlQueryGetStatsId = `SELECT id FROM ${tableNames.stats} WHERE id = (SELECT max(id) FROM ${tableNames.stats})`

    const resultStats = await db.executeSql(sqlQueryStats)

    const stats_id = await db.executeSql(sqlQueryGetStatsId)

    const sqlQueryPieces = `INSERT INTO ${tableNames.pieces} (id, name, type, rareness, image_path) 
    VALUES(${stats_id[0].rows.item(0).id ,'${piece.name}', '${piece.type}', '${piece.rareness}', '${piece.image_path}'})`

    const resultPiece = await db.executeSql(sqlQueryPieces)
}

export const getGearSetById = async (db: SQLiteDatabase, gearSetId: number): Promise<gearSet>=> {
    try{
        let gearSet: gearSet = {id: gearSetId, rarenessArray: {
            mainHandRareness: undefined,
            helmetRareness: undefined,
            plateRareness: undefined,
            bootsRareness: undefined,
            secondHandRareness: undefined,
            accessory1Rarenes: undefined,
            accessory2Rareness: undefined,
            accessory3Rareness: undefined,}
        }
        const sqlQueryGetGearSet = `SELECT * FROM ${tableNames.gear_sets} WHERE ${gearSetId} = ${tableNames.gear_sets}.id`
        const sqlQueryGetRareness = `SELECT ${tableNames.gear_set_pieces_rareness}.mainHand_rareness,
        ${tableNames.gear_set_pieces_rareness}.helmet_rareness, ${tableNames.gear_set_pieces_rareness}.plate_rareness,
        ${tableNames.gear_set_pieces_rareness}.boots_rareness, ${tableNames.gear_set_pieces_rareness}.secondHand_rareness,
        ${tableNames.gear_set_pieces_rareness}.accessory1_rareness, ${tableNames.gear_set_pieces_rareness}.accessory2_rareness,
        ${tableNames.gear_set_pieces_rareness}.accessory3_rareness FROM ${tableNames.gear_set_pieces_rareness} WHERE 
        (SELECT ${tableNames.gear_sets}.gear_set_pieces_rareness_id FROM ${tableNames.gear_sets} WHERE ${tableNames.gear_sets}.id = 1)
        = ${tableNames.gear_set_pieces_rareness}.id `

        const currentGearSet = await db.executeSql(sqlQueryGetGearSet)
            
        gearSet.mainHand = await getPieceById(db, currentGearSet[0].rows.item(0)?.mainHand)
        gearSet.helmet = await getPieceById(db, currentGearSet[0].rows.item(0)?.helmet)
        gearSet.plate = await getPieceById(db, currentGearSet[0].rows.item(0)?.plate)
        gearSet.boots = await getPieceById(db, currentGearSet[0].rows.item(0)?.boots)
        gearSet.secondHand = await getPieceById(db, currentGearSet[0].rows.item(0)?.secondHand)
        gearSet.accessory1 = await getPieceById(db, currentGearSet[0].rows.item(0)?.accessory1)
        gearSet.accessory2 = await getPieceById(db, currentGearSet[0].rows.item(0)?.accessory2)
        gearSet.accessory3 = await getPieceById(db, currentGearSet[0].rows.item(0)?.accessory3)
        
        const rarenessArray = await db.executeSql(sqlQueryGetRareness)

        gearSet.rarenessArray.mainHandRareness = rarenessArray[0].rows.item(0).mainHand_rareness
        gearSet.rarenessArray.helmetRareness = rarenessArray[0].rows.item(0).helmet_rareness
        gearSet.rarenessArray.plateRareness = rarenessArray[0].rows.item(0).plate_rareness
        gearSet.rarenessArray.bootsRareness = rarenessArray[0].rows.item(0).boots_rareness
        gearSet.rarenessArray.secondHandRareness = rarenessArray[0].rows.item(0).secondHand_rareness
        gearSet.rarenessArray.accessory1Rarenes = rarenessArray[0].rows.item(0).accessory1_rareness
        gearSet.rarenessArray.accessory2Rareness = rarenessArray[0].rows.item(0).accessory2_rareness
        gearSet.rarenessArray.accessory3Rareness = rarenessArray[0].rows.item(0).accessory3_rareness

        return gearSet
    } catch (e){
        throw Error("Gear set loading failed..." + JSON.stringify(e))
    }
}

export const getAllGearSets = async (db: SQLiteDatabase): Promise<[{id: number, title: string, }]> => {
    try{
        const sqlQuery: string = `SELECT id, title FROM ${tableNames.gear_sets} ORDER BY id`
        let result: any = []

        const gearSets = await db.executeSql(sqlQuery)

        gearSets.forEach(gearSet =>  {
            for (let i = 0; i < gearSet.rows.length; i++) {
                result.push(gearSet.rows.item(i))
            }
        });

        return result

    } catch(e){
        throw Error("All gear sets loading failed...")
    }
}