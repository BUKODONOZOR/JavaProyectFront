
import { Router } from './Router';

export function app(){
    const $root= document.getElementById("root");
    if (!$root){
        throw new Error("No se encontró el elemento root");
    }

    Router()

}