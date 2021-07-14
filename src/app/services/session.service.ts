import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  user: string = "user"
  password: string = "user"
  api_rute = "http://localhost:8081"  

  mock_cards = 
  [
    {
      ruta: "assets/img/pagos.png",
      titulo: "PAGOS"
    },
    {
     ruta: "assets/img/Autorizaciones.png",
     titulo: "AUTORIZACIONES"
    },
    {
     ruta: "assets/img/cuentas.png",
     titulo: "CUENTAS"
   },
   {
     ruta: "assets/img/transferencias.png",
     titulo: "TRANSFERENCIAS"
   },     
  ]

  constructor(private http: HttpClient) { }

  getItems():any{
    return new Promise((resolve,reject) => {
      setTimeout(() => resolve(this.mock_cards), 2000);
    });
  }

  getItems2():any{
   let rute = this.api_rute + "/api/getItems"
   let headers:HttpHeaders = this.appendAuthHeaders(new HttpHeaders())
   return this.http.get(rute,{headers:headers}).toPromise()
  }

  appendAuthHeaders(headers: HttpHeaders): HttpHeaders{
    headers = headers.append('Authorization', "Basic "+btoa(this.user+':'+this.password))
    headers = headers.append('Content-Type','application/json')
    return headers
  }
}
