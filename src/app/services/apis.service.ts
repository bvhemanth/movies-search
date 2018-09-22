import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApisService {
	
	Host_API = environment.Host_API;
	Base_API = environment.Base_API;
  	
  	constructor(private HttpClient: HttpClient) { }


  	get(value)
  	{
  		
  		
  		return this.HttpClient.get<any>(this.Host_API+this.Base_API+"search/movie?api_key=a23a5f801234f82e77ce80db8e3ca2ca&language=en-US&query="+value+"&include_adult=false");
  		
	   
  	}
  	getMovieByid(id)
  	{
		return this.HttpClient.get<any>(this.Host_API+this.Base_API+"movie/"+id+"?api_key=a23a5f801234f82e77ce80db8e3ca2ca&language=en-US");
  	}
}
