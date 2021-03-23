export const normalizeString=(text:string)=>{
    return text.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}
export const formatTime=(time:number)=>{
    const pre = time>0?"":"-"
    if(time<0) time*=-1;
    const minutes = (time/60).toFixed(0);
    if(parseInt(minutes)>0){
        let seconds = (time%60);
        return `${pre}${(checkTime(minutes))}m ${checkTime(seconds)}s`
    }
    return `${pre}00m ${checkTime(time)}s`;
}

function checkTime(i:number|string) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}