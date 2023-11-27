import * as navegationMap from "../data/navegation-map.json";

export const getCurrentPath = (customerPath: string) => {
    console.log('entroGet', customerPath)
    const mapNavegation = JSON.stringify(navegationMap);
    const routes = JSON.parse(mapNavegation).customer;
    let currentRoute;
    for(const route of routes){
        if(route.path === customerPath){
            currentRoute = route;
        }
    }
    setPath(currentRoute);
}

export const savePath = (status) => {
    console.log('entroSave')
    const mapNavegation = JSON.stringify(navegationMap);
    const routes = JSON.parse(mapNavegation).customer;
    const nextPath = localStorage.getItem("next");
    const previousPath = localStorage.getItem("previous");
    if(status){
        for(const route of routes){
            if(route.path === nextPath && route.previous === previousPath ) {
                localStorage.setItem("status", status);
            };
        }
    }
}

const setPath = (currentRoute) => {
    const { next, previous, status, path } = currentRoute;
    localStorage.setItem("next", next);
    localStorage.setItem("previous", previous);
    localStorage.setItem("status", status);
    localStorage.setItem("path", path);
}