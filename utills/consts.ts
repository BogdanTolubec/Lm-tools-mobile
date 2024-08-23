//Training calculator consts

import { calculationData } from "./types"

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