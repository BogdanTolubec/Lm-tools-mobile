import React, { useCallback, useEffect, useState } from "react";
import { ImageBackground, SafeAreaView, View } from "react-native";
import dresser_screen from "./DresserScreen.styles";
import { ImgPathConsts, pieceTypes } from "../../../../utills/enums";
import SetOfPieces from "../Components/SetOfPieces/SetOfPieces";
import { getALLGearSets, getDBConnection} from "../../../../utills/functions/db-service";
import Swapper from "../../../../Components/Swapper/Swapper";
import { gearSet, Piece} from "../../../../utills/types";
import ModalComponent from "../../../../Components/ModalComponent/ModalComponent";
import GearSetMenu from "../Components/GearSetMenu.modal/GearSetMenu";
import { gearSetPlaceHolder } from "../../../../utills/consts";
import GearSetTitleChangeComponent from "../Components/GearSetTitleChange.modal/GearSetTitleChangeComponent";
import PieceInfo from "../Components/PieceInfo.modal/PieceInfo";

function DresserScreen(): React.JSX.Element{

    const [currentGearSet, setCurrentGearSet] = useState<gearSet>(gearSetPlaceHolder)
    const [allGearSets, setAllGearsSets] = useState<gearSet[]>([])
    const [gearSetCount, setGearSetCount] = useState<number>(allGearSets.length)

    const [isPieceInfoModalActive, setIsPieceInfoModalActive] = useState<boolean>(false)

    const [isMenuModalActive, setIsMenuModalActive] = useState<boolean>(false)
    const [isChangeTitleModalVisible, setIsChangeTitleModalVisible] = useState<boolean>(false)

    const [currentGearSelected, setCurrentGearSelected] = useState<Piece | undefined>()
    const [currentGearTypeSelected, setCurrentGearTypeSelected] = useState<pieceTypes>(pieceTypes.mainHand)

    const onGearSetSwap = (id: number): void => {
        setCurrentGearSet(allGearSets[id])
    }

    function onPieceSelected(piece: Piece | undefined, pieceType: pieceTypes): void {
        setIsPieceInfoModalActive(!isPieceInfoModalActive)
        setCurrentGearSelected(piece)
        setCurrentGearTypeSelected(pieceType)
    }

    function onMenuClicked(): void {
        setIsMenuModalActive(!isMenuModalActive)
    }

    function onTitleCklicked(): void {
        setIsChangeTitleModalVisible(!isChangeTitleModalVisible)
    }

    function onGearSetCreate(): void{
        setGearSetCount(gearSetCount + 1)
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
    }, [loadGearSetsCallback, gearSetCount])
    
    return(
        <SafeAreaView>
            <View style = {dresser_screen.wrapper}>
                <ImageBackground style = {dresser_screen.backgroundImg} source = {{uri: ImgPathConsts.backgroundImage}} resizeMode = "cover">

                    <ModalComponent visible = {isPieceInfoModalActive} setVisible = {setIsPieceInfoModalActive} children = {
                        <PieceInfo pieceSelected = {currentGearSelected} 
                        pieceTypeSelected = {currentGearTypeSelected} gearSetSelected = {currentGearSet}/>
                    }/>

                    <ModalComponent visible = {isMenuModalActive} setVisible = {setIsMenuModalActive} children={
                        <GearSetMenu gearSet = {currentGearSet} title = {currentGearSet?.title} 
                        changeGearSetsCount = {onGearSetCreate}/>
                    }/>

                    <ModalComponent visible = {isChangeTitleModalVisible} setVisible = {setIsChangeTitleModalVisible} 
                    children = {
                        <GearSetTitleChangeComponent gearSet = {currentGearSet}/>
                    }/>
                    
                    <Swapper centerComponent = {
                        <SetOfPieces gearSet = {currentGearSet} title =  {currentGearSet?.title} 
                        onPieceSelected = {onPieceSelected} onMenuClicked = {onMenuClicked} onTitleCklicked = {onTitleCklicked}/>
                    } componentsCount = {allGearSets.length} childToParent = {onGearSetSwap}/>
                            
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

export default DresserScreen