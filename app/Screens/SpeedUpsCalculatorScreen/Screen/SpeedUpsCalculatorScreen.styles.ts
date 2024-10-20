import React from "react";
import { StyleSheet } from "react-native";

const speed_ups_calculator_screen = StyleSheet.create({
    wrapper: {
        height: "100%",
        width: "100%",

        display: "flex",
        flexDirection: "column",
    },

    results_wrapper: {
        height: "20%",
        width: "100%"
    },

    inputs_wrapper: {
        height: "80%",
        width: "100%",

        display: "flex",
        flexWrap: "wrap",

        justifyContent: "space-between",
    },

    input_wrapper: {
        height: "13.5%",
        width: "30%"
    }
})

export default speed_ups_calculator_screen