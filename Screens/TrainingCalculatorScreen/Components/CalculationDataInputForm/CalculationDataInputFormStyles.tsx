import React from "react";
import { StyleSheet } from "react-native";

const calculation_data_input_form = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "column",
        maxHeight: "60%",
        minWidth: "100%",

        justifyContent: "space-between",
        padding: 4,

        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },

    text_input: {
        maxHeight: "13%",
        marginBottom: "1%",
        borderColor: "rgb(100, 100, 100)",
        borderWidth: 2,
        borderStyle: "solid",
    },

    text_input_labels: {
        alignSelf: "center",
    },

    select_section: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 0,
    },
})

export default calculation_data_input_form