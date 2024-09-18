import { rareness } from "./enums"

export type Piece = {
    piece_id: number,
    name: string,
    rareness: rareness,
    type: string,
    image_path: string,

    jewels?: PieceJewels,

    stats: stats,
}

export type PieceJewels = {
    jewel_1: jewel | undefined,
    jewel_2: jewel | undefined,
    jewel_3: jewel | undefined,
}

export type stats = {
    armyAtk?: number,
    armyHp?: number,
    armyDeff?: number,

    infantryAtk?: number,
    infantryHp?: number,
    infantryDeff?: number,
    
    rangedAtk?: number,
    rangedHp?: number,
    rangedDeff?: number,

    cavalryAtk?: number,
    cavalryHp?: number,
    cavalryDeff?: number,
}

export type gearSet = {
    id: number,
    title: string ,
    mainHand: Piece | undefined,
    helmet: Piece | undefined,
    plate: Piece | undefined,
    boots: Piece | undefined,
    secondHand: Piece | undefined,
    accessory1: Piece | undefined,
    accessory2: Piece | undefined,
    accessory3: Piece | undefined,
}

export type jewel = {
    jewel_id: number,
    name: string,
    rareness: rareness,
    image_path: string,
    stats: stats,
}

export type calculationData = {
    infantryRss: number[],
    rangedRss: number[],
    cavalryRss: number[],
    siegeRss: number[],

    secondsTrainingSpeed: number,
}