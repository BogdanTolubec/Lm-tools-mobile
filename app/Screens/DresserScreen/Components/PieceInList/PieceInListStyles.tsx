import React from "react"
import { StyleSheet } from "react-native"

const piece_in_list = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",

        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 2,
    },

    first_row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 70,
        width: "100%"
    },

    img_wrapper: {
        height: "90%",
        width: "20%",
    },

    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    }
})

export default piece_in_list