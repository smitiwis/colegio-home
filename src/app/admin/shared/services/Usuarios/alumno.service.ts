import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AlumnosInterface } from '../../interface/alumnos.interface';


@Injectable({
    providedIn: "root"
})

export class AlumnoService {
    urlDatosAlumnos: string = ""
    constructor(private htppClient: HttpClient) {
    }

    datosAlumnos(alumnos: any) {
        return this.htppClient.post<AlumnosInterface[]>(this.urlDatosAlumnos, alumnos);
    }


}