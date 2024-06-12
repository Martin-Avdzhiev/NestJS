import { CardScale } from "../Types/AnimationTypes";

export const handleOpacityIn = (cardId: string,initialOpacity:number, setCardScales: React.Dispatch<React.SetStateAction<{ [key: string]: CardScale }>>) => {
    setCardScales((prevScales) => ({
        ...prevScales,
        [cardId]: {...prevScales[cardId], opacity: initialOpacity}
    }));
};

export const handleOpacityOut = (cardId: string,endingOpacity:number, setCardScales: React.Dispatch<React.SetStateAction<{ [key: string]: CardScale }>>) => {
    setCardScales((prevScales) => ({
        ...prevScales,
        [cardId]: {...prevScales[cardId], opacity: endingOpacity}
    }));
};