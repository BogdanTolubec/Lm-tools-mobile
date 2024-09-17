import React, { useEffect, useState } from "react"
import { Pieces} from "../../../../../utills/types"
import { Text, View } from "react-native";
import stats_list from "./StatsListStyles";

type Props = {
    piece: Pieces,
}

type statsShowInfo = {
    text: string,
    stat: number | undefined
}

function StatsList({piece}: Props): React.JSX.Element {

    const [listData, setListData] = useState<statsShowInfo[]>([])

    useEffect(() => {  
        setListData([{text: "Army atk:", stat: piece.stats?.armyAtk}, {text: "Army hp:", stat: piece.stats?.armyHp},
            {text: "Army deff:", stat: piece.stats?.armyDeff}, {text: "Infantry atk: ", stat: piece.stats?.infantryAtk},
            {text: "Infantry hp: ", stat: piece.stats?.infantryHp}, {text: "Infantry deff: ", stat: piece.stats?.infantryDeff},
            {text: "Ranged atk: ", stat: piece.stats?.rangedAtk}, {text: "Ranged hp: ", stat: piece.stats?.rangedHp},
            {text: "Ranged deff: ", stat: piece.stats?.rangedDeff}, {text: "Cavalry atk: ", stat: piece.stats?.cavalryAtk},
            {text: "Cavalry hp: ", stat: piece.stats?.cavalryHp}, {text:"Cavalry deff: ", stat: piece.stats?.cavalryDeff}])
    }, [piece])

    return(
        <View>
            {
            listData.map((item, index) => {
                if(item.stat != undefined)
                {
                return(
                    <View key = {index} style = {stats_list.stat_wrapper}>
                        <Text> {item.text}: {item.stat}</Text>
                    </View>
                )
                }

                else{
                    return(<View key = {index}></View>)
                }
            })
            }
        </View>
    );
}

export default StatsList