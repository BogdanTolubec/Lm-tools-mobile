import React from "react";
import { StyleSheet } from "react-native";

const piece = StyleSheet.create({
    wrapper: {
        height: 85,
        width: 85,

        borderRadius: 10,
        borderStyle: "solid",
        borderColor: "rgb(255, 255, 255)",
        borderWidth: 2,        
    },

    rareness_background_img_wrapper: {
        height: "100%",
        width: "100%"
    },

    rareness_background_img: {
        height: "100%",
        width: "100%"
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

    juewels_wrapper: {
        flexDirection: "row",

        height: "25%",
        width: "100%",
    
        borderRadius: 10,

        opacity: 0.7,
    },

    juewels_img: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    }
})

export default piece