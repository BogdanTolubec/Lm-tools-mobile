import React from "react";
import { StyleSheet } from "react-native";

const jewels_in_piece = StyleSheet.create({
    wrapper: {
        flexDirection: "row",

        height: "25%",
        width: "100%",

        justifyContent: "space-between",
        alignItems: "center",
    
        borderRadius: 10,

        opacity: 0.9,
    },

    jewel_wrapper: {
        height: "100%",
        width: "31%",
    },

    jewel_img_wrapper: {
        height: "90%",
        width: "90%",
    },
})

export default jewels_in_piece