export const handleOpacityIn = (cardId: string,initialOpacity:number, setCardScales: React.Dispatch<React.SetStateAction<{ [key: string]: {zoom:number, opacity :number} }>>) => {
    setCardScales((prevScales) => ({
        ...prevScales,
        [cardId]: {...prevScales[cardId], opacity: initialOpacity}
    }));
};

export const handleOpacityOut = (cardId: string,endingOpacity:number, setCardScales: React.Dispatch<React.SetStateAction<{ [key: string]: {zoom:number, opacity :number} }>>) => {
    setCardScales((prevScales) => ({
        ...prevScales,
        [cardId]: {...prevScales[cardId], opacity: endingOpacity}
    }));
};