export const normalizeString=(text:string)=>{
    return text.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}