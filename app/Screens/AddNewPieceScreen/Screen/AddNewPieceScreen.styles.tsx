import React from "react";
import { StyleSheet } from "react-native";

const add_new_piece = StyleSheet.create({
    wrapper: {
        height: "100%",
        width: "100%",
    },

    backgroundImg: {
        flex: 1,
        width: "100%" ,
        height: "100%",

        
        display: "flex",
        flexDirection: "row",

        justifyContent: "center",
        alignItems: "center"
    },

    form: {
        display: "flex",
        flexDirection: "column",
        height: "80%",
        width: "70%",

        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: 15,
        padding: 10,
        alignItems: "center",

        userSelect: "none",
        fontFamily: "Helvetica , sans-serif",

        backgroundColor: "rgba(0, 0, 0, 0.6)",

        overflow: "scroll",
    },

    question: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
    },

    input: {
        width: "80%",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: 10,
        fontSize: 16,
        padding: 5,
    
        opacity: 0.6,
    },

    label: {
        fontSize: 18,
        fontWeight: "200",
        color: "black",
    },
})

export default add_new_piece