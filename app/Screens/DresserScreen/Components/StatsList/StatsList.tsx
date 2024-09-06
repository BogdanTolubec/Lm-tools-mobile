import React, { useEffect, useState } from "react"
import { Pieces} from "../../../../../utills/types"
import { FlatList, Text, View } from "react-native";
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
        setListData([{text: "Army atk:", stat: piece?.armyAtk}, {text: "Army hp:", stat: piece?.armyHp},
            {text: "Army deff:", stat: piece?.armyDeff}, {text: "Infantry atk: ", stat: piece?.infantryAtk},
            {text: "Infantry hp: ", stat: piece?.infantryHp}, {text: "Infantry deff: ", stat: piece?.infantryDeff},
            {text: "Ranged atk: ", stat: piece?.rangedAtk}, {text: "Ranged hp: ", stat: piece?.rangedHp},
            {text: "Ranged deff: ", stat: piece?.rangedDeff}, {text: "Cavalry atk: ", stat: piece?.cavalryAtk},
            {text: "Cavalry hp: ", stat: piece?.cavalryHp}, {text:"Cavalry deff: ", stat: piece?.cavalryDeff}])
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
                    return(<></>)
                }
            })
            }
        </View>
    );
}

export default StatsList