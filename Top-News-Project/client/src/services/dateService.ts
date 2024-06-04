export function isoToDateYMD(isoDate: number): string {
    const YMD = isoDate.toString().substring(0, 10);
    return YMD;
}

export function calculateDaysBeforeDate(isoDate: number): string {
    const parsedDate = new Date(Date.parse(isoDate.toString()));
    const currentDate = new Date();
    const millisecondsDiff = currentDate.getTime() - parsedDate.getTime();
    const daysDiff = millisecondsDiff / (1000 * 60 * 60 * 24);
    if(currentDate.getDay() == parsedDate.getDay()){
        return `Posted at ${parsedDate.getHours()}:${parsedDate.getMinutes()}`
    }
    else if(daysDiff < 1){
        return `Posted yesterday at ${parsedDate.getHours()}:${parsedDate.getMinutes()}`;
    }
    return  `${Math.floor(daysDiff)} days ago`
}