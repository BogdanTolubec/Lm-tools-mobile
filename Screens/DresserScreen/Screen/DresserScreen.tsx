import React from "react";
import { ImageBackground, View } from "react-native";
import { useAppNavigation } from "../../../utills/useAppNavigation";
import { ImgPathConsts } from "../../../utills/enums";

function DresserScreen(): React.JSX.Element{

    const backgroundImageUri = require("../../../public/img/utills/pagesBackgroundImg.jpg")
    
    return(
        <View>
            <ImageBackground source = {ImgPathConsts.backgroundImage}>

            </ImageBackground>
        </View>
    );
}

export default DresserScreen