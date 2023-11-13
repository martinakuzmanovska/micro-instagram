import { Injectable } from "@angular/core";
import { IPost} from "./post.module";
import { BehaviorSubject, Observable, catchError, map, of, switchMap, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";



@Injectable()
export class PostService {
  private postsUrl = "https://jsonplaceholder.typicode.com/photos"
  limit = 10
 
   constructor(private http: HttpClient) {
   
  }
  getPosts(index: number){
    
    let startIndex = (index -1) * this.limit
    return this.http.get<IPost[]>(`${this.postsUrl}?_start=${startIndex}&_limit=${this.limit}`).pipe(
        catchError(this.handleError("getPosts", []))
  )
      
    }
  
 
  
  getPost(id: number) {
    return this.http.get<IPost>(`${this.postsUrl}/${id}`);
  }
 

  savePost(postData: IPost) {
    return this.http.post<IPost>(this.postsUrl,postData)
   
  }

  updatePost(postData: IPost ) {

    return this.http.put<IPost>(`${this.postsUrl}/${postData.id}`,postData)
   }

  deletePost(postData: IPost) {
    return this.http.delete<boolean>(`${this.postsUrl}/${postData.id}`)
  }

  private handleError<T> (operation= 'operation',result?: T)
    {
      return (error: any): Observable<T> => {
        console.error(error);
        return throwError(error);
      }
    }
}

