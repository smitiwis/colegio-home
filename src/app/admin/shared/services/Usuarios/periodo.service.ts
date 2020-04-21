import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { PeriodoInterface } from '../../interface/periodo.interface';

@Injectable({
    providedIn: "root"
})

export class PeriodoService {
    urlDatosPeriodo:string;
    constructor(private httpClient: HttpClient) { }
    
    datosPeriodos(periodo: any) {
        return this.httpClient.post<PeriodoInterface>(this.urlDatosPeriodo, periodo)
    }

}