import React from "react";
import { StyleSheet } from "react-native";

const check_label = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: "70%",
        maxWidth: "22%",
        marginBottom: 5,
    
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "rgb(0,0,0)",
        borderRadius: 5,
        backgroundColor: "rgb(35, 67, 88)",
    },

    text: {
        height: "100%",
        width: "100%",

        textAlign: "center",
        textAlignVertical: "center",

        fontWeight: "bold",
    }
})

export default check_label