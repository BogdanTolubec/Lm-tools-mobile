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
    homeIcon = require("../public/Icons/home.png"),
    plusIcon = require("../public/Icons/plus.png"),
    calculatorIcon = require("../public/Icons/calculator.png"),
    gearIcon = require("../public/Icons/gear.png")
}

export enum tableNames {
    pieces = "Pieces",
    juewels = "Juewels",
    stats = "Stats",
    gear_sets = "Gear_Sets",
}