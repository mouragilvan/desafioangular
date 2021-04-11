import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";

  
  @Injectable()
  export class MoviesStore extends ComponentStore<any> {
    
    constructor() {
      super({
         user:{}
      });
    }
  }