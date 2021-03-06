import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})


export class ListadoComponent{

  heroes : string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroesB : string[] = [];
  vengadorB :  string = '';

  borrarHeroe()
  {
   // console.log("Borrando héroe");
    const heroeBorrado= this.heroes.pop();
    //console.log(heroeBorrado);
    this.vengadorB = heroeBorrado || '';

    this.heroesB.push(heroeBorrado || '');
  
  }

}
