import React from "react";
import { Dimensions } from "react-native";

export enum ScreensEnum {
    home = "HomeScreen",
    calculator = "TrainingCalculatorScreen",
    dresser = "DresserScreen",
    addNewPiece = "AddNewPieceScreen",
}

export enum tableNames {
    pieces = "Pieces",
    piece_rareness_stats = "Piece_rareness_stats",

    jewels = "Jewels",
    jewels_rareness_stats = "Jewels_rareness_stats",
    jewels_by_piece = "Jewels_by_piece",
    jewels_set =  "Jewels_set",

    stats = "Stats",

    gear_sets = "Gear_Sets",
    gear_set_pieces_rareness = "Gear_set_pieces_rareness"
}

export enum rareness {
    common = "common",
    uncommon = "uncommon",
    rare = "rare",
    epic = "epic",
    legendary = "legendary",
    mythic = "mythic",
    tempered = "tempered"
}

export enum rarenessColors {
    common = "grey",
    uncommon = "#228b22",
    rare = "dodgerblue",
    epic = "blueviolet",
    legendary = "#FFA001",
    mythic = "#e7760d",
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
    accessory1 = "accessory1",
    accessory2 = "accessory2",
    accessory3 = "accessory3",
}

//paths consts
export enum ImgPathConsts{
    rootAssetsImgPath = "asset:/img",

    backgroundImage = rootAssetsImgPath + "/utills/pages_background_img.jpg",
    commonPieceBackgroundImage = rootAssetsImgPath + "/utills/gears/common_piece_background.jpg",
    uncommonPieceBackgroundImage = rootAssetsImgPath + "/utills/gears/uncommon_piece_background.jpg",
    rarePieceBackgroundImage = rootAssetsImgPath + "/utills/gears/rare_piece_background.jpg",
    epicPieceBackgroundImage = rootAssetsImgPath + "/utills/gears/epic_piece_background.jpg",
    legendaryPieceBackgroundImage = rootAssetsImgPath + "/utills/gears/legendary_piece_background.jpg",
    mythicPieceBackgroundImage = rootAssetsImgPath + "/utills/gears/mythic_piece_background.jpg",
    temperedPieceBackgroundImage = rootAssetsImgPath + "/utills/gears/tempered_piece_background.jpg",
    
    placeholderImage = rootAssetsImgPath + "/utills/no_image_placeholder.jpg",
    juewelsPlaceHolderImage = rootAssetsImgPath + "/utills/no_juewels_placeholder.jpg",
    piecePlaceholderImage = rootAssetsImgPath + "/utills/no_piece_placeholder.jpg",
}

export enum IconPathConsts{
    rootAssetsconsPath = "asset:/img/Icons",

    menuIcon = rootAssetsconsPath + "/menu.png",

    homeIcon = rootAssetsconsPath + "/home.png",
    plusIcon = rootAssetsconsPath + "/plus.png",
    calculatorIcon = rootAssetsconsPath + "/calculator.png",
    gearIcon = rootAssetsconsPath + "/gear.png",

    leftArrowIcon = rootAssetsconsPath + "/left_arrow.png",
    rightArrowIcon = rootAssetsconsPath + "/right_arrow.png",
}

export enum ScreenParams{
    height = Dimensions.get("screen").height - 155, // -155 is because of tabs bar height
    width = Dimensions.get("screen").width
}