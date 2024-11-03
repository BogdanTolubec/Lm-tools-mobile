import { ImgPathConsts } from "./enums"
import { calculationData, gearSet, statsShowInfo } from "./types"

export const gearSetPiecesCount = 8 //it's const 8 don't touch it :)
export const jewelsByPiece = 3
export const maxItemsInBagValue = 65536

//Training calculator consts__________
//t1
export const calculationDataT1: calculationData = {
    infantryRss: [50, 0, 50, 50, 0], // [food, stone, wood, ore, gold]
    rangedRss: [50, 50, 50, 0, 0],
    cavalryRss: [50, 50, 0, 50, 0],
    siegeRss: [50, 50, 50, 50, 0],

    secondsTrainingSpeed: 15,
}

//t2
export const calculationDataT2: calculationData = {
    infantryRss: [100, 0, 100, 100, 5],
    rangedRss: [100, 100, 100, 0, 5],
    cavalryRss: [100, 100, 0, 100, 5],
    siegeRss: [100, 100, 100, 100, 5],

    secondsTrainingSpeed: 30,
}

//t3
export const calculationDataT3: calculationData = {
    infantryRss: [150, 0, 150, 150, 10.4],
    rangedRss: [150, 150, 150, 0, 10.4],
    cavalryRss: [150, 150, 0, 150, 10.4],
    siegeRss: [150, 150, 150, 150, 10.4],

    secondsTrainingSpeed: 60,
}

//t4
export const calculationDataT4: calculationData = {
    infantryRss: [1000, 0, 1000, 1000, 500],
    rangedRss: [1000, 1000, 1000, 0, 500],
    cavalryRss: [1000, 1000, 0, 1000, 500],
    siegeRss: [1000, 1000, 1000, 1000, 500],

    secondsTrainingSpeed: 120,
}

//speed ups calculator const__________
export const speedUpsIconValueArray: Array<{imagePath: string, speedUpValueInMinutes: number}> = [
    {imagePath: ImgPathConsts.speedUpGreenImage, speedUpValueInMinutes: 1}, // 1 min speed ups
    {imagePath: ImgPathConsts.speedUpGreenImage, speedUpValueInMinutes: 3}, // 3 min speed ups
    {imagePath: ImgPathConsts.speedUpGreenImage, speedUpValueInMinutes: 5}, // 5 min speed ups
    {imagePath: ImgPathConsts.speedUpGreenImage, speedUpValueInMinutes: 10}, // 10 min speed ups
    {imagePath: ImgPathConsts.speedUpGreenImage, speedUpValueInMinutes: 15}, // 15 min speed ups
    {imagePath: ImgPathConsts.speedUpGreenImage, speedUpValueInMinutes: 30}, // 30 min speed ups
    {imagePath: ImgPathConsts.speedUpGreenImage, speedUpValueInMinutes: 60}, //1 hour speed ups
    {imagePath: ImgPathConsts.speedUpBlueImage, speedUpValueInMinutes: 180}, //3 hours speed ups
    {imagePath: ImgPathConsts.speedUpBlueImage, speedUpValueInMinutes: 480}, //8 hours speed ups
    {imagePath: ImgPathConsts.speedUpBlueImage, speedUpValueInMinutes: 900}, //15 hours speed ups
    {imagePath: ImgPathConsts.speedUpBlueImage, speedUpValueInMinutes: 1440}, //1 day speed ups
    {imagePath: ImgPathConsts.speedUpRedImage, speedUpValueInMinutes: 4320}, //3 days speed ups
]

//default objects__________
export const gearSetPlaceHolder: gearSet = {
    id: 1,
    title: "MIX",
    mainHand: undefined,
    helmet: undefined,
    plate: undefined,
    boots: undefined,
    secondHand: undefined,
    accessory1: undefined,
    accessory2: undefined,
    accessory3: undefined,
}

export const statsObject: statsShowInfo[] = [
    {text: "Army atk", stat: 0}, {text: "Army hp", stat: 0},
    {text: "Army deff", stat: 0}, {text: "Infantry atk", stat: 0},
    {text: "Infantry hp", stat: 0}, {text: "Infantry deff", stat: 0},
    {text: "Ranged atk", stat: 0}, {text: "Ranged hp", stat: 0},
    {text: "Ranged deff", stat: 0}, {text: "Cavalry atk", stat: 0},
    {text: "Cavalry hp", stat: 0}, {text:"Cavalry deff", stat: 0}
]