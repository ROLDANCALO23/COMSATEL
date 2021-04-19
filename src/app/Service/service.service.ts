import { EventEmitter,Injectable,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea }  from '../Model/Tarea'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {}

  @Output() disparador:EventEmitter<number>=new EventEmitter();

  Url='http://localhost:9191';

  getTareas(){
    return this.http.get<Tarea[]>(this.Url+'/tareas')
  }

  public post(url:string,tarea){
    return this.http.post<Tarea>(url,tarea)
  }

  public put(url:string,tarea){
    return this.http.put<Tarea>(url,tarea)
  }
  public deleteTarea(url:string,tarea){
    return this.http.delete<Tarea>(url+"/"+tarea.id,tarea)
  }



  
}
