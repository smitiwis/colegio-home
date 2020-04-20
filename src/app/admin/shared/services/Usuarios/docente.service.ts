import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { DocentesInterface } from '../../interface/docentes.interface';

@Injectable({
    providedIn: "root"
})

export class DocenteService {

    urlDatosDocentes: string = "";
    constructor(private httpClient: HttpClient) { }

    datosDocentes(docentes: any) {
        return this.httpClient.post<DocentesInterface>(this.urlDatosDocentes, docentes);
    }

}