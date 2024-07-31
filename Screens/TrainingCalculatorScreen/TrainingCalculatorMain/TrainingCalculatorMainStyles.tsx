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
            flexWrap: "wrap",
        },

        scrollViewStyles:{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            width:"100%",
        },
        
        background_img: {
            flex: 1,
            width: "100%" ,
            height: "100%",
        },
    }
);

export default training_calculator_styles