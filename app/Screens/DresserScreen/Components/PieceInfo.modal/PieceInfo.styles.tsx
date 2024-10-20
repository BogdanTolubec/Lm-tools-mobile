import React from "react";
import { StyleSheet } from "react-native";

const piece_info = StyleSheet.create(
    {
        wrapper: {
            display: "flex",
            flexDirection: "column",
    
            left: "2.5%",
            top: "25%", //just to center component with position absolute :/
            
            height: "50%",
            width: "95%",
    
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
            flexDirection: "row",
        },

        piece_img_wrapper: {
            height: "42%",
            width: "19%",
        },

        jewels_wrapper: {
            height: "42%",
            width: "80%",

            display: "flex",
            flexDirection: "row",


            justifyContent: "space-evenly",
        },

        jewel_wrapper: {
            height: "100%",
            width: "24%",
        },

        stats_wrapper: {
            width: "100%",
            height: "49%",

            justifyContent: "flex-end"
        }
    }
)

export default piece_info