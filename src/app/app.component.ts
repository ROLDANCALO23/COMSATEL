import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'toDoBasic';
  

  constructor(private router:Router){}

  ngOnInit(){

    this.List();
  }

  List(){
      this.router.navigate(["list"]);
    }
  Guardar(){
      this.router.navigate(["add"]);
    }
  Edit(id: number){
      this.router.navigate(["edit"]);
    }
  Delete(id: number){
      this.router.navigate(["delete"]);
    }
  }
