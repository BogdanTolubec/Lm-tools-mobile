import React from "react";
import { StyleSheet } from "react-native";

const piece_info = StyleSheet.create(
    {
        wrapper: {
            display: "flex",
            flexDirection: "column",
    
            left: "10%",
            top: "25%", //just to center component with position absolute :/
            
            height: "50%",
            width: "80%",

            justifyContent: "space-between",
    
            backgroundColor: "#FFFFFF",
            borderColor: "black",
            borderWidth: 2,
            borderStyle: "solid",
            padding: 2,
    
            overflow: "scroll"
        },

        gear_and_jewels_row: {
            width: "100%",
            display: "flex",
            flexDirection: "row",

            justifyContent: "space-between",
        },

        piece_img_wrapper: {
            height: 60,
            width: 60,
        },

        jewels_wrapper: { 
            display: "flex",
            flexDirection: "row",

            justifyContent: "space-between",

            paddingRight: "4%",
        },

        jewel_wrapper: {
            height: "100%",
            width: "27%",
        }
    }
)

export default piece_info