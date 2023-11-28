import * as navegationMap from "../data/navegation-map.json";


export const getCurrentPath = (customerPath: string) => {
    console.log('Ruta Actual', customerPath)
    const mapNavegation = JSON.stringify(navegationMap);
    const routes = JSON.parse(mapNavegation).customer;
    for(const route of routes){
        if(route.path === customerPath){
            setPath(route);
            return route;
        }
    }

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
    console.log(`Status pantalla actual: ${status} (session storage), path: ${path}`)
    localStorage.setItem("status", status);
    localStorage.setItem("path", path);
    localStorage.setItem("previous", previous);
}
export const validateRoute = (currentRoute) => {
    let goToPath = false;
    if(currentRoute.status === 'true') {
        goToPath = true;
        console.log('Pasa pantalla', goToPath);
    } else {
        console.log('Inválido: Retornando a Landing');
    }
    return goToPath;
}