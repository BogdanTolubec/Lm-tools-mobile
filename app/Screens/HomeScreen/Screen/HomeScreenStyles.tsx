import React from "react"
import { StyleSheet } from "react-native"

const homeScreenStyles = StyleSheet.create(
    {
        wrapper :{
            height: "100%",
            width: "100%",

            flex: 1,
            flexDirection: "column",
            
            justifyContent: "space-between",
        },

        backgroundImg: {
            flex: 1,
            width: "100%" ,
            height: "100%",

            alignItems: "center",
        }
})

export default homeScreenStyles