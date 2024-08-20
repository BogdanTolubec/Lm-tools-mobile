import { openDatabase, enablePromise, SQLiteDatabase } from "react-native-sqlite-storage";
import { gearSet, gearStats, Pieces } from "../types";
import { tableNames } from "../enums";

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'lm_dresser.db', createFromLocation: "~lm_dresser.db", location: "Library"});
};

export const getPieces = async (db: SQLiteDatabase): Promise<[Pieces[]]> => {
    try{
        const piecesArray: Pieces[] = []
        const sqlQuery: string = `SELECT * FROM ${tableNames.pieces}, ${tableNames.stats} WHERE ${tableNames.stats}.id = ${tableNames.pieces}.stats_id`
        
        const pieces = await db.executeSql(sqlQuery)

        pieces.forEach(piece =>  {
            for (let i = 0; i < piece.rows.length; i++) {
                piecesArray.push(piece.rows.item(i))
            }
        });

        return [piecesArray]
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

export const getStatsById = async (db: SQLiteDatabase, stats_id: number): Promise<gearStats> => {
    try{
    let stats: gearStats

    const pieceStats = await db.executeSql(`SELECT * FROM ${tableNames.stats} WHERE id = ${stats_id}`)
    stats = pieceStats[0].rows.item(0)

    return stats
    } catch(e){
        throw Error("Stats loading failed...")
    }
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