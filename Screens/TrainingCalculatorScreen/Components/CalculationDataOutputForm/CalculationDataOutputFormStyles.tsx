import React from "react";
import { StyleSheet } from "react-native";

const calculation_data_output_form_styles = StyleSheet.create(
    {
        wrapper: {
            flex: 1,
            maxHeight: "40%",
            minHeight: "30%",
            minWidth: "40%",

            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "rgb(0, 0, 0)",

            flexDirection: "row",
            justifyContent: "space-between",

            backgroundColor: "rgba(0, 0, 0, 0.6)",
        },

        rss_output_segment: {
            width: "50%",
        },

        rss_output : {
            flex: 1,
            borderStyle: "solid",
            borderWidth: 1,

            justifyContent: "center",
            padding: 2,
        },

        text :{
            fontWeight: "bold",
            fontFamily: "Snell Roundhand, cursive",
            fontSize: 20,
            color: "rgb(0, 0, 0)",
        },

        img: {
            maxWidth: 50,
            maxHeight: 50,
            marginBottom: 10,
        }
    }
)

export default calculation_data_output_form_styles