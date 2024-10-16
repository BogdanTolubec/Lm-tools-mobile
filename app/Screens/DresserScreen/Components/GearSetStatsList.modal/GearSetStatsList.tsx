import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { gearSet, statsShowInfo } from "../../../../../utills/types";
import { statsObject } from "../../../../../utills/consts";
import { calculateGearSetStats, convertStatsIntoStatsShowInfo } from "../../../../../utills/functions/statsCalculation.functions";
import gear_set_stats_list from "./GearSetStatsList.styles";
import shared_styles from "../../../../../utills/sharedStyles.styles";

type Props = {
    gearSet: gearSet | undefined
}

function GearSetStatsList({gearSet}: Props): React.JSX.Element {

    const [statsList, setStatsList] = useState<statsShowInfo[]>(statsObject)

    useEffect(() => {
        setStatsList(convertStatsIntoStatsShowInfo(calculateGearSetStats(gearSet)))
    }, [gearSet])

    return(
        <View style = {shared_styles.modal_box_default_wrapper}>
            {
                statsList.map((item, index) =>
                    <View key = {index} style = {gear_set_stats_list.stat_wrapper}>
                        <Text> {item.text} : {item.stat}</Text>
                    </View>
                )
            }
        </View>
    );
}

export default GearSetStatsList