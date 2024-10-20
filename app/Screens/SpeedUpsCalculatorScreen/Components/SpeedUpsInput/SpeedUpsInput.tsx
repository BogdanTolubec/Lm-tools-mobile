import React, { useState } from "react";
import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper";
import speed_ups_input from "./SpeedUpsInput.styles";
import { View } from "react-native";
import NumericInput from "../../../../../Components/NumericInput/NumericInput";
import { maxItemsInBagValue } from "../../../../../utills/consts";

type Props = {
    imagePath: string,
}

function SpeedUpsInput({imagePath}: Props): React.JSX.Element {
    const [inputValue, setInputValue] = useState<number>(0)

    return(
        <View style = {speed_ups_input.wrapper}>
            <ImageInWrapper imageSource = {imagePath} wrapperStyles = {speed_ups_input.icon_styles}/>
            <NumericInput minValue = {0} maxValue = {maxItemsInBagValue} 
                setParentElementState = {setInputValue} styles = {speed_ups_input.input_styles}/>
        </View>
    );
}

export default SpeedUpsInput