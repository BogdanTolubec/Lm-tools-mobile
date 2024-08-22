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

    piece_img: {
        height: "100%",
        width: "100%",
        display: "flex",
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
        maxHeight: "100%",
        width: "33.3%",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "rgb(94, 92, 92)",
        borderRadius: 5,

        resizeMode: "stretch",
    }
})

export default piece