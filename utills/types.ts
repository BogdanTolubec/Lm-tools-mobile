import { rareness } from "./enums"

export type Pieces = {
    id?: number,
    name: string,
    rareness: string,
    type: string,
    image_path: string,

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
    title?: string,
    mainHand?: Pieces,
    helmet?: Pieces,
    plate?: Pieces,
    boots?: Pieces,
    secondHand?: Pieces,
    accessory1?: Pieces,
    accessory2?: Pieces,
    accessory3?: Pieces,
    rarenessArray: {
        mainHandRareness: rareness | undefined,
        helmetRareness: rareness | undefined,
        plateRareness: rareness | undefined,
        bootsRareness: rareness | undefined,
        secondHandRareness: rareness | undefined,
        accessory1Rarenes: rareness | undefined,
        accessory2Rareness: rareness | undefined,
        accessory3Rareness: rareness | undefined,
    },
}

export type gearSetData = {
    id: number, 
    title: string,
}

export type calculationData = {
    infantryRss: number[],
    rangedRss: number[],
    cavalryRss: number[],
    siegeRss: number[],

    secondsTrainingSpeed: number,
}