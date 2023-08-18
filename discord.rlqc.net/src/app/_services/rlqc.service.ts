import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class RLQCService {
    constructor(private http: HttpClient) { }
    getAll(theService:string){
        return this.http.get<any[]>(`${environment.apiUrl}` + '/' + theService) 
    }
    get(theService : string, theId : number) {
        return this.http.get<any>(`${environment.apiUrl}` + '/' + theService + '/' + theId);
    }
    isPrimitive(test:any) {
        return (test !== Object(test));
    };
    create(theService : string, theTemplate : any) {
        let formData = new FormData();
        for(let i in theTemplate) {
            formData.append(i, theTemplate[i]);
        }
        console.dir(formData);
        return this.http.post<any>(`${environment.apiUrl}` + '/' + theService, formData);
    }
    update(theService : string, theId : number, theTemplate : any) {
        let formData = new FormData();
        for(let i in theTemplate) {
            formData.append(i, theTemplate[i]);
        }
        console.dir(formData);
        return this.http.put<any>(`${environment.apiUrl}` + '/' + theService + '/' + theId, formData);
    }
    delete(theService : string, theId : number) {
        return this.http.delete<any>(`${environment.apiUrl}` + '/' + theService + '/' + theId);
    }
}