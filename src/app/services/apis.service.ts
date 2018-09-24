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
  	Key = environment.Key;
  	
  	constructor(private HttpClient: HttpClient) { }


  	get(value)
  	{
  		return this.HttpClient.get<any>(this.Host_API+this.Base_API+"search/movie?api_key="+this.Key+"&language=en-US&query="+value+"&include_adult=false");
  	}
  	getMovieByid(id)
  	{
		return this.HttpClient.get<any>(this.Host_API+this.Base_API+"movie/"+id+"?api_key="+this.Key+"&language=en-US");
  	}
}
