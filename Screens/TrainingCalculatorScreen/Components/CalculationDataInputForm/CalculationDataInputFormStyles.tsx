import React from "react";
import { StyleSheet } from "react-native";

const calculation_data_input_form = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "column",
        maxHeight: "50%",
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

    check_label_off: {
        flex: 1,
        height: "90%",
        maxWidth: "22%",
        marginBottom: 5,
    
        backgroundColor: "rgb(35, 67, 88)",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "rgb(0,0,0)",
        borderRadius: 5,

        textAlign: "center",
        justifyContent: "center",
    },

    check_label_on: {
        height: "90%",
        width: "22%",
        marginBottom: 5,
    
        backgroundColor: "rgb(40, 73, 92s)",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "rgb(0,0,0)",
        borderRadius: 5,
    }
})

export default calculation_data_input_form