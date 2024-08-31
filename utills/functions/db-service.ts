import { openDatabase, enablePromise, SQLiteDatabase } from "react-native-sqlite-storage";
import { gearSet, Pieces } from "../types";
import { pieceTypes, tableNames } from "../enums";

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'lm_dresser.db', createFromLocation: "~lm_dresser.db", location: "Library"});
};

export const getAllPieces = async (db: SQLiteDatabase): Promise<Pieces[]> => {
   try{
        const piecesArray: Pieces[] = []
        const sqlQuery: string = `SELECT * FROM ${tableNames.pieces}, ${tableNames.stats} WHERE ${tableNames.stats}.id = ${tableNames.pieces}.stats_id`
        
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

export const getAllPiecesByType = async (db: SQLiteDatabase, type: string): Promise<Pieces[]> => {
    try{
        if(type in pieceTypes){
            const piecesArray: Pieces[] = []
            const sqlQuery: string = `SELECT * FROM ${tableNames.pieces}, ${tableNames.stats} WHERE 
            (${tableNames.stats}.id = ${tableNames.pieces}.stats_id) AND (${tableNames.pieces}.type = "${type}")`
            
            const pieces = await db.executeSql(sqlQuery)
    
            pieces.forEach(piece =>  {
                for (let i = 0; i < piece.rows.length; i++) {
                    piecesArray.push(piece.rows.item(i))
                }
            });
    
            return piecesArray
        }
        else{
            throw Error("Got 'type' prop that isn't matching 'pieces types'");
        }
     }
 
     catch(e){
        throw Error('Pieces loading failed...');
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

    const sqlQueryPieces = `INSERT INTO ${tableNames.pieces} (name, type, rareness, image_path, stats_id) 
    VALUES('${piece.name}', '${piece.type}', '${piece.rareness}', '${piece.image_path}', ${stats_id[0].rows.item(0).id})`

    const resultPiece = await db.executeSql(sqlQueryPieces)
}

export const getGearSetById = async (db: SQLiteDatabase, gearSetId: number): Promise<gearSet>=> {
    try{
        let gearSet: gearSet = {id: gearSetId}
        const sqlQuery = `SELECT * FROM ${tableNames.gear_sets} WHERE ${gearSetId} = Gear_sets.id`

        const currentGearSet = await db.executeSql(sqlQuery)
            
        gearSet.mainHand = await getPieceById(db, currentGearSet[0].rows.item(0)?.mainHand)
        gearSet.helmet = await getPieceById(db, currentGearSet[0].rows.item(0)?.helmet)
        gearSet.plate = await getPieceById(db, currentGearSet[0].rows.item(0)?.plate)
        gearSet.boots = await getPieceById(db, currentGearSet[0].rows.item(0)?.boots)
        gearSet.secondHand = await getPieceById(db, currentGearSet[0].rows.item(0)?.secondHand)
        gearSet.accessory1 = await getPieceById(db, currentGearSet[0].rows.item(0)?.accessory1)
        gearSet.accessory2 = await getPieceById(db, currentGearSet[0].rows.item(0)?.accessory2)
        gearSet.accessory3 = await getPieceById(db, currentGearSet[0].rows.item(0)?.accessory3)

        return gearSet
    } catch (e){
        throw Error("Gear set loading failed...")
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