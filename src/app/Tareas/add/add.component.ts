import { NAMED_ENTITIES } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ServiceService } from 'src/app/Service/service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {



  public form:FormGroup;
  
  constructor(private router:Router,private service:ServiceService,private formBuilder: FormBuilder) {

  }

    
  



  ngOnInit(){
    this.form=this.formBuilder.group({
      name:[''],
    })
    }
  public enviarData(){
      if(this.form.value.name!="")
      {
        this.service.post('http://localhost:9191/addtarea',
        {
  
          name:this.form.value.name,
  
        })
        .subscribe(respuesta=>{
          alert('tarea agregada');
  
          window.location.reload();
  
  
        })
      }
      else{
        alert('debe llenar el campo')
      }



    }
    



  }


