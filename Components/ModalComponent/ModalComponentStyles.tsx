import React from 'react'
import { StyleSheet } from 'react-native'

const modal_component = StyleSheet.create({
    wrapper: {
        position: 'absolute',
    },

    background: {
        height: "100%",
        width: "100%",

        backgroundColor: "rgba(0, 0, 0, 0.6)"
    },

    content: {
        height: "100%",
        width: "100%",
        position: 'absolute',
        left: "10%",
        top: "10%",
    }
})

export default modal_component