import React from "react";
import { StyleSheet } from "react-native";

const piece_selector = StyleSheet.create({
    wrapper:{
        display: "flex",
        flexDirection: "column",
        
        height: "90%",
        width: "90%",

        top: "5%",
        left: "5%",

        backgroundColor: "#FFFFFF",
        borderColor: "black",
        borderWidth: 2,
        borderStyle: "solid",
        padding: 2,

        overflow: "scroll"
    },

    selector: {
        flex: 1,
        maxHeight: "92%",
        width: "100%",
    },

    filter_wrapper: {
        display: "flex",
        flexDirection: "row",

        top: "93%",
        position: "absolute",

        justifyContent: "space-between",

        height: "7%",
        width: "100%"
    },

    choose_label_rareness_wrapper: {
        height: "100%",
        width: "15%",
        justifyContent: "space-between",
    },
})

export default piece_selector