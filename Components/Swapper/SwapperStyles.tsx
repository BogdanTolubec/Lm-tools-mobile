import React from "react";
import { StyleSheet } from "react-native";

const swapper = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        width: "100%" ,
        height: "100%",

        alignItems: "center",
        justifyContent: "center",
        padding: 3,
    },

    centerComponent: {
        height: "100%",
        width: "90%",
    },

    icon_wrapper: {
        height: "10%",
        width: "100%",

        backgroundColor: "black"
    },

    icon: {
        height: "100%",
        width: "100%",
        resizeMode: "stretch",
    }
})

export default swapper