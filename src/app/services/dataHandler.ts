import { OnInit, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptions, BaseRequestOptions } from '@angular/http';


// Import RxJs methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

/*
    -->     Service Information    <--
    
    * This service handle all http requests

*/

export class dataHandler {   
    constructor(@Inject(Http) public http: Http) {  }
    url =  "http://207.154.211.98:8000/post/";

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
        }

    postData(data){

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let Postdataurl = this.url + "/post/";

        return this.http.post(this.url, data)
            .map((res)=> res.json())
            .catch(this.handleError);
    }

    /*getData(){
        return this.http.get('http://207.154.211.98:8000/get/col=placeholder')
            .map(resp =>  resp.json());
    }*/
    getData(){
        return this.http.get('assets/questions.json')
            .map(resp =>  resp.json());
    }

    getOne(data){
        return this.http.get('http://207.154.211.98:8000/get/col=placeholder&parent='+data)
            .map(resp =>  resp.json());
    }
}