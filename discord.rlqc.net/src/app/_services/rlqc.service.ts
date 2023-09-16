import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
interface Response {
    success: boolean,
    message: string
}

@Injectable({ providedIn: 'root' })
export class RLQCService {
    constructor(private http: HttpClient) { }
    getAll(theService:string, theHeader: HttpHeaders){
        return this.http.get<any[]>(`${environment.apiUrl}` + '/' + theService, {headers:theHeader}) 
    }
    get(theService : string, theId : number, theHeader: HttpHeaders) {
        return this.http.get<any>(`${environment.apiUrl}` + '/' + theService + '/' + theId, {headers:theHeader});
    }
    isPrimitive(test:any) {
        return (test !== Object(test));
    };
    create(theService : string, theTemplate : any) {
        return this.http.post<any>(`${environment.apiUrl}` + '/' + theService, theTemplate);
    }
    update(theService : string, theId : number, theTemplate : any) {
        return this.http.put<any>(`${environment.apiUrl}` + '/' + theService + '/' + theId, theTemplate);
    }
    delete(theService : string, theId : number, theHeader: HttpHeaders) {
        return this.http.delete<any>(`${environment.apiUrl}` + '/' + theService + '/' + theId, {headers:theHeader});
    }
    validate(theService:string, theHeader: HttpHeaders){
        return this.http.get<Response>(`${environment.apiUrl}` + '/' + theService, {headers:theHeader}) 
    }
}