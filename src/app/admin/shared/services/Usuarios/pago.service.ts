import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { PagoInterface } from '../../interface/pagos.interface';

@Injectable({
    providedIn: 'root'
})

export class PagoService {
    urlDatosPago: string = ""
    constructor(private _httpClient: HttpClient, private pagoInterface: PagoInterface) {

    }

    datosPago(pago: string) {
        return this._httpClient.post<PagoInterface>(this.urlDatosPago, pago)
    }
}