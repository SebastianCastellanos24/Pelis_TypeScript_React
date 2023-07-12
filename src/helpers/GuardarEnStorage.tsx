export const GuardarEnStorage = (key:any, iteam:any) => {
    let elementos:any = (localStorage.getItem(key) || "") 
    
    if(Array.isArray(elementos)) {
        elementos.push(iteam)
    } else {
        elementos = [iteam]
    }

    localStorage.setItem(key, JSON.stringify(elementos));

    return iteam;
}