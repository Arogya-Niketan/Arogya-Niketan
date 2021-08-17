import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { IHospital } from "./hospital";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, tap  } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})

export class HospitalService{

    private hospitalUrl="api/hospitals";

    constructor(private http: HttpClient) {}

    getHospitals(): Observable<IHospital[]> {
        return this.http.get<IHospital[]>(this.hospitalUrl).pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getHospital(id: number): Observable<IHospital> {
      if(id === 0){
        return of(this.initializeHospital());
      }
      const url = `${this.hospitalUrl}/${id}`;
      return this.http.get<IHospital>(url)
          .pipe(
            tap(data => console.log('getHospital: ' + JSON.stringify(data))),
            catchError(this.handleError)
          );
      }


      createHospital(hospital: IHospital): Observable<IHospital> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        hospital.id = null;
        return this.http.post<IHospital>(this.hospitalUrl, hospital, { headers })
          .pipe(
            tap(data => console.log('createHospital: ' + JSON.stringify(data))),
            catchError(this.handleError)
          );
      }
    
      deleteHospital(id: number): Observable<IHospital> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const url = `${this.hospitalUrl}/${id}`;
        return this.http.delete<IHospital>(url, { headers })
          .pipe(
            tap(data => console.log('deleteHospital: ' + id)),
            catchError(this.handleError)
          );
      }
    
      updateHospital(hospital: IHospital): Observable<IHospital> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const url = `${this.hospitalUrl}/${hospital.id}`;
        return this.http.put<IHospital>(url, hospital, { headers })
          .pipe(
            tap(() => console.log('updateHospital: ' + hospital.id)),
            
            map(() => hospital),
            catchError(this.handleError)
          );
      }


    private handleError(err: HttpErrorResponse): Observable<never> {
        
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
         
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      } 

      private initializeHospital(): IHospital {
        
        return {
          id: 0,
          hospitalName: null,
          phone: null,
          email: null,
          location: null,
          address: null,
          bedsAvailable: null,
          ventilation: null,
          criticalCareUnit: null,
          isolationWard: null
        };
      }
    
}