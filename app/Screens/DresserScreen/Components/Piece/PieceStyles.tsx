import React from "react";
import { StyleSheet } from "react-native";

const piece = StyleSheet.create({
    wrapper: {
        height: "16%",
        width: "32%",

        borderRadius: 10,
        borderStyle: "solid",
        borderColor: "rgb(255, 255, 255)",
        borderWidth: 2,        
    },

    piece_img: {
        height: "100%",
        width: "100%",

        display: "flex",

        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "rgb(94, 92, 92)",
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
        userSelect: "none",

        resizeMode: "stretch",

        justifyContent: "flex-end",
    },

    juewels_wrapper: {
        flexDirection: "row",

        height: "100%",
        width: "100%",
    
        borderRadius: 5,
    },
    
    juewels_img: {        
        maxHeight: "33%",
        width: "33.3%",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "rgb(94, 92, 92)",

        objectFit: "fill",
        resizeMode: "stretch",
    }
})

export default piece