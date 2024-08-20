export type Pieces = {
    id: number,
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

export type gearStats = {
    id?: number,

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
    mainHand?: Pieces,
    helmet?: Pieces,
    plate?: Pieces,
    boots?: Pieces,
    secondHand?: Pieces,
    accessory1?: Pieces,
    accessory2?: Pieces,
    accessory3?: Pieces,
}