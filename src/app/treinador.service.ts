import { Injectable } from "@angular/cli/bin/angular-pk-pj/node_modules/@angular/core";
import { HttpClient } from "@angular/cli/bin/angular-pk-pj/node_modules/@angular/common/http";
import { Observable } from "@angular/cli/bin/angular-pk-pj/node_modules/rxjs";


export interface treinador{

    nome: string;
    id: number;
}

@Injectable()
export class treinadorService{

    constructor(private http:HttpClient){}

    getAllTreinador():Observable<treinador[]>{
        return this.http.get<treinador[]>('http://localhost:8080/train/')

    }
    
    PostTreinador(treinador: treinador): Observable<treinador> {
        return this.http.post<treinador>('http://localhost:8080/train/', treinador)
    }
    
}