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
    rootAssetsImgPath = "asset:/img",

    backgroundImage = rootAssetsImgPath + "/utills/pages_background_img.jpg",
    placeholderImage = rootAssetsImgPath + "/utills/no_image_placeholder.jpg",
    juewelsPlaceHolderImage = rootAssetsImgPath + "/utills/no_juewels_placeholder.jpg",
    piecePlaceholderImage = rootAssetsImgPath + "/utills/no_piece_placeholder.jpg",
}

export enum IconPathConsts{
    rootAssetsconsPath = "asset:/img/Icons",

    homeIcon = rootAssetsconsPath + "/home.png",
    plusIcon = rootAssetsconsPath + "/plus.png",
    calculatorIcon = rootAssetsconsPath + "/calculator.png",
    gearIcon = rootAssetsconsPath + "/gear.png",

    leftArrowIcon = rootAssetsconsPath + "/left_arrow.png",
    rightArrowIcon = rootAssetsconsPath + "/right_arrow.png",
}