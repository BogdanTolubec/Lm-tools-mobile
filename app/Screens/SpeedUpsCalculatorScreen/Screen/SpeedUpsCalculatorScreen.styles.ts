import React from "react";
import { StyleSheet } from "react-native";

const speed_ups_calculator_screen = StyleSheet.create({
    wrapper: {
        height: "100%",
        width: "100%",

        display: "flex",
        flexDirection: "column",
    },

    inputs_wrapper: {
        height: "80%",
        width: "100%",

        flex: 1,
        flexWrap: "wrap",

        justifyContent: "space-between",

        padding: 5,
    },

    input_area_wrapper: {
        height: "24%",
        width: "33%",

        alignItems: "center",
    },

    input_wrapper: {
        height: "100%",
        width: "70%",
    },

    results_wrapper: {
        height: "20%",
        width: "100%",

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "black",
        opacity: 0.7
    },

    result_text: {
        color: "white",
        fontWeight: "700",
        fontSize: 25,

        letterSpacing: 2, 
        textAlign: "center"
    },
})

export default speed_ups_calculator_screen