import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import * as navegationMap from "../data/navegation-map.json";

@Injectable({
  providedIn: 'root'
})
export class FlowGuard implements CanActivate {
  /* 
  * Implementando el metodo de canActivate para proteger las rutas 
  * a las que se dirigen las pantallas
  */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    /*
    * Obtenemos la ruta actual y previa para establecer el status de la pantalla
    */
    const path = localStorage.getItem('path');
    const previousPath = localStorage.getItem('previous');
    
    const statusPath = this.validatePath( previousPath, path);

    /*
    * Valida el status obtenido e invalida o permite 
    * el acceso a la pantalla
    */
    if(statusPath === 'true') {
      return true;
    }
    return false;
  }
  
  validatePath(previousPath: string, path: string){
    /* 
    * Las siguientes dos lineas serían reemplazadas con el servicio de 
    * session storage con el que cuenta el proyecto
    */
    const mapNavegation = JSON.stringify(navegationMap);
    const routes = JSON.parse(mapNavegation).customer;
    /*
    * Se recorre el arreglo de rutas obtenido de session storage 
    * y se compara con la pantalla actual, obtiene el status
    */
    for(const route of routes){
      if(route.path === path && route.previous === previousPath){
        // console.log(`ruta: ${route.path} status: ${localStorage.getItem('status')}`);
        return localStorage.getItem('status');
        //return route.status;
      } 
    }
  }
}
