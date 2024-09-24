import React from "react";
import { StyleSheet } from "react-native";

const stats_list = StyleSheet.create({
    wraper: {
        display: "flex",
        flexDirection: "column"
    },

    stat_wrapper: {
        borderColor: "black",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderStyle: "solid",
    },

    text: {
        gap: 2,
    }
})

export default stats_list