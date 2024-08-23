import React from "react";

export enum ScreensEnum {
    home = "HomeScreen",
    calculator = "TrainingCalculatorScreen",
    dresser = "DresserScreen",
    addNewPiece = "AddNewPieceScreen",
}

export enum tableNames {
    pieces = "Pieces",
    juewels = "Juewels",
    stats = "Stats",
    gear_sets = "Gear_Sets",
}

export enum rareness {
    common = "common",
    uncommon = "uncommon",
    rare = "rare",
    epic = "epic",
    legendary = "legendary",
    mythic = "mythic",
}

export enum armyTypes {
    infantry = "infantry",
    ranged = "ranged",
    cavalry = "cavalry",
    siege = "siege",
}

export enum pieceTypes {
    mainHand = "mainHand",
    helmet = "helmet",
    plate = "plate",
    boots = "boots",
    secondHand = "secondHand",
    accessory = "accessory",
}

//paths consts
export enum ImgPathConsts{
    backgroundImage = "asset:/img/utills/pages_background_img.jpg",
    placeholderImage = "asset:/img/utills/no_image_placeholder.jpg",
    juewelsPlaceHolderImage = "asset:/img/utills/no_juewels_placeholder.jpg",
    piecePlaceholderImage = "asset:/img/utills/no_piece_placeholder.jpg",
}

export enum IconPathConsts{
    homeIcon = "asset:/img/Icons/home.png",
    plusIcon = "asset:/img/Icons/plus.png",
    calculatorIcon = "asset:/img/Icons/calculator.png",
    gearIcon = "asset:/img/Icons/gear.png",

    leftArrowIcon = "asset:/img/Icons/left_arrow.png",
    rightArrowIcon = "asset:/img/Icons/right_arrow.png",
}