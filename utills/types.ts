import { pieceTypes, rareness } from "./enums"

export type Piece = {
    piece_id: number,
    name: string,
    rareness: rareness,
    type: pieceTypes,
    imagePath: string,

    jewels: Array<jewel | undefined>,

    stats: stats,
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
    title: string | null,
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
    imagePath: string,
    stats: stats,
}

export type calculationData = {
    infantryRss: number[],
    rangedRss: number[],
    cavalryRss: number[],
    siegeRss: number[],

    secondsTrainingSpeed: number,
}

export type statsShowInfo = {
    text: string,
    stat: number
}