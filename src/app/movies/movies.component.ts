import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormGroup, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

	users=[];
	Search;
	MoviewDetails=[];

	SearchResults=[];

  	constructor(private http: HttpClient,private api:ApisService) {
 	
 	 }

  	ngOnInit() {
  
  		
  	}

  	search()
  	{
  		this.api.get(this.Search)
  		.subscribe(data=>{
  			console.log(data);
  			this.SearchResults=data.results;
  			console.log(this.SearchResults)
  		});         		
  	}

  	getMovieDetails(id)
  	{
  		this.MoviewDetails=[];
  		this.api.getMovieByid(id)
  		.subscribe(data=>{
  			console.log(data);
  			this.MoviewDetails.push(data);
  			console.log(this.MoviewDetails)	
  		}); 

  	}
  	
}
