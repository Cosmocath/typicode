import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.typicode_url}/posts`);
  }

  getOnePost(id:number): Observable<Post> {
    return this.http.get<Post>(`${environment.typicode_url}/posts/${id}`);}
}
