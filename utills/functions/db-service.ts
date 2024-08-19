import { openDatabase, enablePromise, SQLiteDatabase } from "react-native-sqlite-storage";
import { gearStats, Pieces } from "../types";
import { tableNames } from "../enums";

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'lm_dresser.db', createFromLocation: "~lm_dresser.db", location: "Library"});
};

export const getPieces = async (db: SQLiteDatabase): Promise<[Pieces[]]> => {
    try{
        const piecesArray: Pieces[] = []
        const sqlQuery: string = `SELECT * FROM ${tableNames.pieces} WHERE id = 2`//, ${tableNames.stats} WHERE ${tableNames.stats}.id = ${tableNames.pieces}.stats_id`
        
        const pieces = await db.executeSql(sqlQuery)

        pieces.forEach(piece =>  {
            for (let i = 0; i < piece.rows.length; i++) {
                piecesArray.push(piece.rows.item(i))
            }
        });
                
        console.log("Pieces: " + pieces.length)

        return [piecesArray]
    }

    catch(e){
        throw Error('Pieces loading failed...');
    }
}

export const getStatsById = async (db: SQLiteDatabase, stats_id: number): Promise<gearStats> => {
    try{
    let stats: gearStats = {}

    const pieceStats = await db.executeSql(`SELECT * FROM ${tableNames.stats} WHERE id = ${stats_id}`)
    stats = pieceStats[0].rows.item(0)

    return stats
    } catch(e){
        throw Error("Stats loading failed!")
    }
}