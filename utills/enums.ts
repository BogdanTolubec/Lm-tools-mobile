import React from "react";

export enum ScreensEnum {
    home = "HomeScreen",
    calculator = "TrainingCalculatorScreen",
    dresser = "DresserScreen",
    addNewPiece = "AddNewPieceScreen",
}

export enum ImgPathConsts{
    backgroundImage = require("../public/img/utills/pagesBackgroundImg.jpg"),
    placeholderImage = require("../public/img/utills/No-Image-Placeholder.jpg"),
}

export enum IconPathConsts{
    homeIcon = require("../public/img/Icons/home.png"),
    plusIcon = require("../public/img/Icons/plus.png"),
    calculatorIcon = require("../public/img/Icons/calculator.png"),
    gearIcon = require("../public/img/Icons/gear.png")
}