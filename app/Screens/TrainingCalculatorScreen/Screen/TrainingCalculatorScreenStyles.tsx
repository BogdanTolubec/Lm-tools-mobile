import React from 'react';
import {StyleSheet} from 'react-native';

const training_calculator_styles = StyleSheet.create(
    {
        wrapper: {
            height: "100%",
            width: "100%",

            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",

            position: "absolute",
            
            backgroundColor: "rgba(0, 0, 0, 0.6)",
        },

        scrollViewStyles:{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            width:"100%",
        },
    }
);

export default training_calculator_styles