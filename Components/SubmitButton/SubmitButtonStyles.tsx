import React from "react";
import { StyleSheet } from "react-native";

const submit_button = StyleSheet.create({
    wrapper: {
        minHeight: 42,
        minWidth: "90%",
        borderColor: "rgb(0,0,0)",
        borderWidth: 3,
        borderRadius: 5,
    },

    gradient: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
    },
    
    text: {
        margin: 2,
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "center",
        letterSpacing: 2,
    }
})

export default submit_button