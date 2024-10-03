import React from "react";
import { StyleSheet } from "react-native";

const piece_info = StyleSheet.create(
    {
        wrapper: {
            display: "flex",
            flexDirection: "column",
    
            left: "5%",
            top: "15%", //just to center component with position absolute :/
            
            height: "75%",
            width: "90%",
    
            backgroundColor: "#FFFFFF",
            borderColor: "black",
            borderWidth: 2,
            borderStyle: "solid",
            padding: 2,
    
            overflow: "scroll"
        },

        gear_and_jewels_row: {
            height: "50%",
            width: "100%",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        },

        piece_img_wrapper: {
            height: "28%",
            width: "20%",
        },

        jewels_wrapper: {
            height: "28%",
            width: "100%",

            display: "flex",
            flexDirection: "row",

            justifyContent: "space-between",
        },

        jewel_wrapper: {
            height: "100%",
            width: "20%",
        },

        stats_wrapper: {
            width: "100%",
            height: "49%",

            justifyContent: "flex-end"
        }
    }
)

export default piece_info