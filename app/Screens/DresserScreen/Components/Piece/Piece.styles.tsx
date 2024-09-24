import React from "react";
import { StyleSheet } from "react-native";

const piece_in_set = StyleSheet.create({
    wrapper: {
        height: 80,
        width: 80,       
    },

    rareness_background_img: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    piece_img_wrapper: {
        height: "90%",
        width: "90%",
    },

    piece_img: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        justifyContent: "flex-end",
    },
})

export default piece_in_set