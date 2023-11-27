import * as navegationMap from "../data/navegation-map.json";

export const getCurrentPath = (customerPath: string) => {
    console.log('Ruta Actual', customerPath)
    const mapNavegation = JSON.stringify(navegationMap);
    const routes = JSON.parse(mapNavegation).customer;
    let currentRoute;
    for(const route of routes){
        if(route.path === customerPath){
            currentRoute = route;
        }
    }
    const storageStatus = localStorage.getItem("status");
    // console.log('+++++++' + storageStatus, localStorage.getItem("path") +'==='+ currentRoute.path)
    storageStatus ?
        console.log(`Status: ${storageStatus} Inválido: Retornando a Landing`):
        currentRoute.status ?
            setPath(currentRoute) :
            console.log(`Status: ${storageStatus} Inválido: Retornando a Landing`);
}

export const savePathStatus = (status) => {
    const path = localStorage.getItem("path");
    console.log(`Guardando status: ${status}, pantalla:${path}`)
    if(status){
        localStorage.setItem("status", status);
    }
}

const setPath = (currentRoute) => {
    const { status, path, previous } = currentRoute;
    console.log(`Status pantalla actual: ${status} (session storage)`)
    localStorage.setItem("status", status);
    localStorage.setItem("path", path);
    localStorage.setItem("previous", previous);
}