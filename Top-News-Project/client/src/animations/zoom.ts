import { CardScale } from "../Types/AnimationTypes";
export const handleZoomIn = (cardId: string,initialZoom:number, setCardScales: React.Dispatch<React.SetStateAction<{ [key: string]: CardScale }>>) => {
    setCardScales((prevScales) => ({
        ...prevScales,
        [cardId]: {...prevScales[cardId], zoom: initialZoom}
    }));
};

export const handleZoomOut = (cardId: string,endingZoom:number, setCardScales: React.Dispatch<React.SetStateAction<{ [key: string]: CardScale }>>) => {
    setCardScales((prevScales) => ({
        ...prevScales,
        [cardId]: {...prevScales[cardId], zoom: endingZoom}
    }));
};