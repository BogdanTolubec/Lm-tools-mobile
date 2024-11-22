import React from "react";
import { StyleSheet } from "react-native";

const speed_ups_input = StyleSheet.create({
    wrapper:{
        height: "100%",
        width: "100%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        padding: 2,
        gap: 2,

        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "grey",
    },

    input: {
        height: "25%",
        width: "95%",

        padding: 1,
        paddingLeft: 4,

        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "black",
    },

    icon_wrapper: {
        height: "75%",
        width: "100%"
    },

    speed_up_icon: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',

        justifyContent: "flex-end"
    },

    text: {
        color: "white",
        fontWeight: "700",
        alignSelf: "flex-end",
    },
})

export default speed_ups_input