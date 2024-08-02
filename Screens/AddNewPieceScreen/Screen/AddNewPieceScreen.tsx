import React from "react";
import { View } from "react-native";
import add_new_piece_styles from "./AddNewPieceScreenStyles";
import { useAppNavigation } from "../../../utills/useAppNavigation";

function AddNewPieceScreen(): React.JSX.Element {

    const navigation = useAppNavigation()
    
    return(
        <View style = {add_new_piece_styles.wrapper}>

        </View>
    );
}

export default AddNewPieceScreen