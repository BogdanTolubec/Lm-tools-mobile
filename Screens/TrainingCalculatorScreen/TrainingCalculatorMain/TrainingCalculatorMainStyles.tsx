import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create(
    {
        training_calculator_main_wrapper: {
            height: "100%",
            width: "100%",

            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
        },

        scrollViewStyles:{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            width:"100%",
        },
        
        img: {
            flex: 1,
            width: "100%" ,
            height: "100%",
        },

        textBasic: {
            textAlign: "center",
            width: "100%",
            height: "10%",
            fontSize: 22,
            color: "#5f9ea4",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
        }
    }
);

export default styles