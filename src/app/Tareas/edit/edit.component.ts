import { identifierName } from '@angular/compiler';


import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { identity } from 'rxjs';
import { Tarea } from 'src/app/Model/Tarea';
import { ServiceService } from 'src/app/Service/service.service';
import {ListComponent} from 'src/app/Tareas/list/list.component';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  
  public form:FormGroup;


  constructor(private router:Router,private service:ServiceService,private formBuilder: FormBuilder) { }

  ngOnInit(){

    console.log(ListComponent.getIDE());


    
    this.form=this.formBuilder.group({
      id:[],
      name:[''],
      flag:[]
    })


    }
  public updateTarea(){
    
      this.service.put('http://localhost:9191/update',
      {
        id: ListComponent.getIDE(),
        name:this.form.value.name,
        flag:false
      })
      .subscribe(respuesta=>{
        alert('tarea modificada');
        window.location.reload();


      })
}
public cancelar(){
  window.location.reload();

}


}
