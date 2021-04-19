import { identifierName } from '@angular/compiler';
import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea }from 'src/app/Model/Tarea';

import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  @Input() dataentrante:number;


  tareas:Tarea[];
  public static ide:number;

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(){
    this.startApp();

  }

  public startApp(){

    this.service.getTareas()
    .subscribe(data=>{
      this.tareas=data;
    })
  }

  static getIDE(){

    return this.ide;
  }
  Editar(id: number){

    ListComponent.ide=id;
    this.router.navigate(['edit',identifierName]);

  }
  Delete(tarea:Tarea){
    this.service.deleteTarea('http://localhost:9191/delete',
      tarea)
      .subscribe(data=>{
        this.tareas=this.tareas.filter(p=>p!==tarea);
        alert('Tarea eliminada');


      })
  }
  Hecho(values:any,ider:number){
    console.log(values.currentTarget.cheked)


 
  }
  fieldsChange(values:any,ider:number):void {
    console.log(values.currentTarget.checked);

    this.service.put('http://localhost:9191/update',
    {
      id: ider,
      name:"percy",
      flag:values.currentTarget.checked
    })
    .subscribe(respuesta=>{

    })




  }



}
