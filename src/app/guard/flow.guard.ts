import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import * as navegationMap from "../data/navegation-map.json";

/*
* Obtener path actual
* Lee archivo de navegacion con key en session storage
* Validar path actual con archivo de navegacion
* Consulta el path actual y verifica el status
** Como consultar el path actual?? para verificar el status
* Si el status es TRUE, retorna un true para permitir el paso a la siguiente pantalla
* Contrario si status es FALSE, devuelve a la principal (landing)
*/

@Injectable({
  providedIn: 'root'
})
export class FlowGuard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    const path = localStorage.getItem('path');
    const nextPath = localStorage.getItem('next');
    const previousPath = localStorage.getItem('previous');
    const statusPath = this.validatePath(nextPath, previousPath, path);

    if(statusPath === 'true') {
      return true;
    }
    return false;
  }
  
  validatePath(nextPath: string, previousPath: string, path: string){
    const mapNavegation = JSON.stringify(navegationMap);
    const routes = JSON.parse(mapNavegation).customer;
    for(const route of routes){
      if(route.path === path && route.next === nextPath) return route.status;
    }
  }
}
