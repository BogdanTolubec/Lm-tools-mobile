import React from "react"
import { StyleSheet } from "react-native"

const piece_in_list = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        width: "auto",
        height: "auto",

        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 2,

        alignItems: "flex-end"
    },

    img: {
        height: 50,
        width: 50,
    }
})

export default piece_in_list