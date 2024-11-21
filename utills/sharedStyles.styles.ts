import React from "react";
import { StyleSheet } from "react-native";

const shared_styles = StyleSheet.create({
    img_in_view: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',

        justifyContent: "center",
        alignItems: "center",
    },

    modal_box_default_wrapper: {
        display: "flex",
        flexDirection: "column",

        left: "10%",
        top: "10%", //just to center component with position absolute :/
        
        height: "80%",
        width: "80%",

        backgroundColor: "#FFFFFF",
        borderColor: "black",
        borderWidth: 2,
        borderStyle: "solid",
        padding: 2,

        overflow: "scroll"
    },

    stats_text: {
        letterSpacing: 1.5,
        fontWeight: "700",
    },

    background_img: {
        flex: 1,
        width: "100%" ,
        height: "100%",

        justifyContent: "center",
        alignItems: "center",
    }
})

export default shared_styles