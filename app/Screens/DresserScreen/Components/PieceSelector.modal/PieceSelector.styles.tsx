import React from "react";
import { StyleSheet } from "react-native";

const piece_selector = StyleSheet.create({
    selector: {
        flex: 1,
        maxHeight: "92%",
        width: "100%",
    },

    filter_wrapper: {
        display: "flex",
        flexDirection: "row",
        top: "95%",
        position: "absolute",

        justifyContent: "space-between",

        height: "7%",
        width: "100%"
    }
})

export default piece_selector