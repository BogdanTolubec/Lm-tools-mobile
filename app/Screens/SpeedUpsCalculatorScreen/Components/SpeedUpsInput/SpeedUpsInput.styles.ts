import React from "react";
import { StyleSheet } from "react-native";

const speed_ups_input = StyleSheet.create({
    wrapper:{
        height: "100%",
        width: "100%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        padding: 2,
        gap: 2,

        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "grey",
    },

    input_styles: {
        height: "30%",
        width: "95%",

        padding: 1,
        paddingLeft: 4,

        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "black",
    },

    icon_styles: {
        height: "70%",
        width: "95%"
    }
})

export default speed_ups_input