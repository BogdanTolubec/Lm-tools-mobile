import React from "react"
import { StyleSheet } from "react-native"

const gear_set_menu = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "column",

        left: "10%",
        top: "10%",
        
        height: "80%",
        width: "80%",

        backgroundColor: "#FFFFFF",
        borderColor: "black",
        borderWidth: 2,
        borderStyle: "solid",
        padding: 2,
    },

    buttons_wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80%",
        width: "100%"
    },

    button_wrapper: {
        height: "15%",
        width: "80%",
    }
})

export default gear_set_menu