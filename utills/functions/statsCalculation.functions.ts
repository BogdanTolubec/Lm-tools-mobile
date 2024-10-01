import { statsObject } from "../consts";
import { gearSet, Piece, stats, statsShowInfo } from "../types";

export function calculateGearSetStats(gearSet: gearSet | undefined): statsShowInfo[]{

    let statsList: statsShowInfo[] = [
        {text: "Army atk", stat: 0}, {text: "Army hp", stat: 0},
        {text: "Army deff", stat: 0}, {text: "Infantry atk", stat: 0},
        {text: "Infantry hp", stat: 0}, {text: "Infantry deff", stat: 0},
        {text: "Ranged atk", stat: 0}, {text: "Ranged hp", stat: 0},
        {text: "Ranged deff", stat: 0}, {text: "Cavalry atk", stat: 0},
        {text: "Cavalry hp", stat: 0}, {text:"Cavalry deff", stat: 0}
    ]

    if(gearSet){

        const allPieces: Array<Piece | undefined> = [gearSet.mainHand, gearSet.helmet, gearSet.plate, gearSet.boots,
            gearSet.secondHand, gearSet.accessory1, gearSet.accessory2, gearSet.accessory3]
        
        for(const piece of allPieces){
            if(piece){
                let pieceAndJewelsStatsList: statsShowInfo[] = [
                    {text: "Army atk", stat: 0}, {text: "Army hp", stat: 0},
                    {text: "Army deff", stat: 0}, {text: "Infantry atk", stat: 0},
                    {text: "Infantry hp", stat: 0}, {text: "Infantry deff", stat: 0},
                    {text: "Ranged atk", stat: 0}, {text: "Ranged hp", stat: 0},
                    {text: "Ranged deff", stat: 0}, {text: "Cavalry atk", stat: 0},
                    {text: "Cavalry hp", stat: 0}, {text:"Cavalry deff", stat: 0}
                ]
                
                pieceAndJewelsStatsList = addStatsToList(convertStatsIntoStatsShowInfo(piece.stats), 
                    pieceAndJewelsStatsList) // piece stats calculation

                for(let i: number = 0; i < piece.jewels.length; i++){
                    pieceAndJewelsStatsList = addStatsToList(convertStatsIntoStatsShowInfo(piece.jewels[i]?.stats),
                        pieceAndJewelsStatsList)
                }

                statsList = addStatsToList(pieceAndJewelsStatsList, statsList)
            }
        }
    }

    return statsList
}

function addStatsToList(firstStatsList: statsShowInfo[], secondStatsList: statsShowInfo[]): statsShowInfo[]{

    const resultList: statsShowInfo[] = []

    for(let i: number = 0; i < firstStatsList.length; i++){

       resultList.push({stat: firstStatsList[i].stat + secondStatsList[i].stat, text: firstStatsList[i].text})

    }

    return resultList
}

function convertStatsIntoStatsShowInfo(stat: stats | undefined): statsShowInfo[]{
    if(!stat) return statsObject

    const statsAsArray: [string, number][] = Object.entries(stat) // statsAsArray[number of stat][0 is text, 1 is stat]

    statsAsArray.sort((a, b) => {

        if(a[0] > b[0]) return 1

        if(a[0] < b[0]) return -1

        else return 0
    })

    const statsShowInfoResult: statsShowInfo[] = statsObject.sort((a, b) => {

            if(a.text > b.text) return 1

            if(a.text < b.text) return -1

            else return 0
    })

    for(let i = 0; i < statsShowInfoResult.length; i++){
        statsShowInfoResult[i].stat = statsAsArray[i][1]
    }

    return statsShowInfoResult
}