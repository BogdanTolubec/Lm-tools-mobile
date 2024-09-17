import { rareness } from "./enums"

export type Pieces = {
    piece_id?: number,
    name: string,
    rareness: rareness,
    type: string,
    image_path: string,

    jewels?: {
        jewel_1?: jewel,
        jewel_2?: jewel,
        jewel_3?: jewel,
    }

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
    title: string ,
    mainHand: Pieces | undefined,
    helmet: Pieces | undefined,
    plate: Pieces | undefined,
    boots: Pieces | undefined,
    secondHand: Pieces | undefined,
    accessory1: Pieces | undefined,
    accessory2: Pieces | undefined,
    accessory3: Pieces | undefined,
}

export type jewel = {
    jewel_id?: number,
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