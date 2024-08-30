import React from "react";
import { StyleSheet } from "react-native";

const piece_selector = StyleSheet.create({
    wrapper: {
        height: "80%",
        width: "80%",

        backgroundColor: "#FFFFFF",
        borderColor: "black",
        borderWidth: 2,
        borderStyle: "solid",
        padding: 2,
    },

    filter_wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        height: "7%",
        width: "100%"
    }
})

export default piece_selector