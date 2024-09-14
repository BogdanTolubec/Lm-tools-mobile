import React, { useCallback, useEffect, useState } from "react";
import { ImageBackground, SafeAreaView, View } from "react-native";
import dresser_screen from "./DresserScreenStyles";
import { ImgPathConsts, pieceTypes } from "../../../../utills/enums";
import SetOfPieces from "../Components/SetOfPieces/SetOfPieces";
import { getALLGearSets, getDBConnection} from "../../../../utills/functions/db-service";
import Swapper from "../../../../Components/Swapper/Swapper";
import { gearSet} from "../../../../utills/types";
import ModalComponent from "../../../../Components/ModalComponent/ModalComponent";
import PieceSelector from "../Components/PieceSelector/PieceSelector";
import GearSetMenu from "../Components/GearSetMenu/GearSetMenu";
import { gearSetPlaceHolder } from "../../../../utills/consts";
import GearSetTitleChangeComponent from "../Components/GearSetTitleChangeComponent/GearSetTitleChangeComponent";

function DresserScreen(): React.JSX.Element{

    const [currentGearSet, setCurrentGearSet] = useState<gearSet>(gearSetPlaceHolder)
    const [allGearSets, setAllGearsSets] = useState<gearSet[]>([])

    const [isPieceSelectorModalActive, setIsPieceSelectorModalActive] = useState<boolean>(false)
    const [isMenuModalActive, setIsMenuModalActive] = useState<boolean>(false)
    const [isChangeTitleModalVisible, setIsChangeTitleModalVisible] = useState<boolean>(false)

    const [currentTypeOfGearSelected, setCurrentGearTypeSelected] = useState<pieceTypes>(pieceTypes.mainHand)

    const onGearSetSwap = (id: number): void => {
        setCurrentGearSet(allGearSets[id])
    }

    function onPieceSelected(type: pieceTypes): void {
        setIsPieceSelectorModalActive(!isPieceSelectorModalActive)
        setCurrentGearTypeSelected(type)
    }

    function onMenuClicked(): void {
        setIsMenuModalActive(!isMenuModalActive)
    }

    function onTitleCklicked(): void {
        setIsChangeTitleModalVisible(!isChangeTitleModalVisible)
    }

    const loadGearSetsCallback = useCallback(async () => {
        try{
            const db = await getDBConnection()
            await getALLGearSets(db).then((data: gearSet[]) =>{
                setAllGearsSets(data)
                setCurrentGearSet(data[0])
            })
        }
        catch(e){
            console.error(e)
        }
    }, [])

    useEffect(() => {
        loadGearSetsCallback()
    }, [loadGearSetsCallback])
    
    return(
        <SafeAreaView>
            <View style = {dresser_screen.wrapper}>
                <ImageBackground style = {dresser_screen.backgroundImg} source = {{uri: ImgPathConsts.backgroundImage}} resizeMode = "cover">

                    <ModalComponent visible = {isPieceSelectorModalActive} setVisible = {setIsPieceSelectorModalActive} children = {
                        <PieceSelector pieceType = {currentTypeOfGearSelected} gearSet = {currentGearSet}/>
                    }/>

                    <ModalComponent visible = {isMenuModalActive} setVisible = {setIsMenuModalActive} children={
                        <GearSetMenu gearSet = {currentGearSet} title = {currentGearSet?.title}/>
                    }/>

                    <ModalComponent visible = {isChangeTitleModalVisible} setVisible = {setIsChangeTitleModalVisible} children = {
                        <GearSetTitleChangeComponent gearSet = {currentGearSet}/>
                    }/>
                    
                    <Swapper centerComponent = {
                        <SetOfPieces gearSet = {currentGearSet} title =  {currentGearSet?.title} onPieceSelected = {onPieceSelected}
                        onMenuClicked = {onMenuClicked} onTitleCklicked = {onTitleCklicked}/>
                    } componentsCount = {allGearSets.length} childToParent = {onGearSetSwap}/>
                            
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

export default DresserScreen