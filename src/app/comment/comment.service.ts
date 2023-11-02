import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comments } from './comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getComments() : Observable<Comments[]>{
    return this.httpClient.get<Comments[]>('https://jsonplaceholder.typicode.com/comments errorhandling');
  }
}
