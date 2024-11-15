import React from "react";
import { Dimensions } from "react-native";

export enum ScreensEnum {
    home = "HomeScreen",
    trainingCalculator = "TrainingCalculatorScreen",
    dresser = "DresserScreen",
    speedUpsCalculator = "SpeedUpsCalculatorScreen",

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
    gear_set_pieces_rareness = "Gear_set_pieces_rareness",

    temperness_levels_set = "Temperness_levels_set"
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

export enum armyTypes {
    infantry = "infantry",
    ranged = "ranged",
    cavalry = "cavalry",
    siege = "siege",
}

export enum armyTiers {
    tier1 = "t1",
    tier2 = "t2",
    tier3 = "t3",
    tier4 = "t4",
    tier5 = "t5",
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

    emptyImage = rootAssetsImgPath + "/utills/gears/empty_image.png",

    speedUpGreenImage = rootAssetsImgPath + "/utills/speed_up_green.jpg",
    speedUpBlueImage = rootAssetsImgPath + "/utills/speed_up_blue.jpg",
    speedUpRedImage = rootAssetsImgPath + "/utills/speed_up_red.jpg",

    backgroundImage = rootAssetsImgPath + "/utills/pages_background_img.jpg",
    commonPieceBackgroundImage = rootAssetsImgPath + "/utills/gears/common_piece_background.jpg",
    uncommonPieceBackgroundImage = rootAssetsImgPath + "/utills/gears/uncommon_piece_background.jpg",
    rarePieceBackgroundImage = rootAssetsImgPath + "/utills/gears/rare_piece_background.jpg",
    epicPieceBackgroundImage = rootAssetsImgPath + "/utills/gears/epic_piece_background.jpg",
    legendaryPieceBackgroundImage = rootAssetsImgPath + "/utills/gears/legendary_piece_background.jpg",
    mythicPieceBackgroundImage = rootAssetsImgPath + "/utills/gears/mythic_piece_background.jpg",
    temperedPieceBackgroundImage = rootAssetsImgPath + "/utills/gears/tempered_piece_background.jpg",
    
    placeholderImage = rootAssetsImgPath + "/utills/no_image_placeholder.jpg",
    jewelsPlaceHolderImage = rootAssetsImgPath + "/utills/no_juewels_placeholder.jpg",
    piecePlaceholderImage = rootAssetsImgPath + "/utills/no_piece_placeholder.jpg",
}

export enum IconPathConsts{
    rootAssetsconsPath = "asset:/img/Icons",

    menuIcon = rootAssetsconsPath + "/menu.png",
    questionMarkIcon = rootAssetsconsPath + "/question_mark.png",
    closeIcon = rootAssetsconsPath + "/close.png",

    homeIcon = rootAssetsconsPath + "/home.png",
    speedUpIcon = rootAssetsconsPath + "/speed_up.png",
    calculatorIcon = rootAssetsconsPath + "/calculator.png",
    gearIcon = rootAssetsconsPath + "/gear.png",

    leftArrowIcon = rootAssetsconsPath + "/left_arrow.png",
    rightArrowIcon = rootAssetsconsPath + "/right_arrow.png",

    
    commonChooseLableIcon = rootAssetsconsPath + "/common_icon.png",
    uncommonChooseLableIcon = rootAssetsconsPath + "/uncommon_icon.png",
    rareChooseLableIcon = rootAssetsconsPath + "/rare_icon.png",
    epicChooseLableIcon = rootAssetsconsPath + "/epic_icon.png",
    legendaryChooseLableIcon = rootAssetsconsPath + "/legendary_icon.png",
    mythicChooseLableIcon = rootAssetsconsPath + "/mythic_icon.png",
    temperedIcon = rootAssetsconsPath + "/tempered_icon.png"
}