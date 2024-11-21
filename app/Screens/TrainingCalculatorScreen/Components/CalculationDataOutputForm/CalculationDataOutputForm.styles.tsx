import React from "react";
import { StyleSheet } from "react-native";

const calculation_data_output_form = StyleSheet.create(
    {
        wrapper: {
            display: "flex",
            height: "40%",
            width: "100%",

            flexWrap: "wrap",

            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "rgb(0, 0, 0)",

            backgroundColor: "rgba(0, 0, 0, 0.6)",
        },

        rss_output : {
            display: "flex",
            height: "33.31%",
            width: "50%",

            borderStyle: "solid",
            borderWidth: 1,

            justifyContent: "center",
            padding: 2,
        },

        text :{
            fontWeight: "700",
        },

        img: {
            maxWidth: 50,
            maxHeight: 50,
            marginBottom: 10,
        }
    }
)

export default calculation_data_output_form