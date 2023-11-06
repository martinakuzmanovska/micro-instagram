import { Injectable } from "@angular/core";
import { IPost} from "./post.module";
import { BehaviorSubject, Observable, catchError, map, of, switchMap, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment.development";


@Injectable()
export class PostService {
  private postsUrl = "https://jsonplaceholder.typicode.com/photos"
 
  private readonly _posts = new BehaviorSubject<IPost[]>([]);
  readonly posts$ = this._posts.asObservable();
  flag:boolean = true
  
  set posts(posts: IPost[]) {
    console.log("Set")
		this._posts.next(posts);
	}
  get posts() {
		return this._posts.getValue();
	}

  constructor(private http: HttpClient) {
   
  }

  getPosts(){
    console.log("get Posts")
    if(this.flag)
    { this.http.get<IPost[]>(this.postsUrl).subscribe(
        (data) =>{ console.log("data")
           this.posts = data
           console.log(this.posts)
        },
        catchError(this.handleError("getPosts", []))
      )
      this.flag= false
    }
  }
 
  
  getPost(id: number): IPost {
    console.log("Finding post with num: " +id + " getting post " + JSON.stringify( this.posts.find(el => el.id === id)))
    
    return this.posts.find(el => el.id === id) as IPost
  }
 

  savePost(postData: IPost) {
    console.log(postData)
    
   this.http.post<IPost>(this.postsUrl,postData).subscribe(data  => { 
    this.posts = [ postData,...this.posts]
   })
  }

  updatePost(post: IPost ) {

    const currentPosts = this.posts
    const index = currentPosts.findIndex((p) => p.id === post.id);

    if(index!== -1)
    {currentPosts[index]= post
    this.posts = currentPosts
    }
    else
    console.log("Post not found")

    
  }

  deletePost(post: IPost) {
    let currentPosts = this.posts
    currentPosts=currentPosts.filter(item => item!=post)

    this.posts=currentPosts
    console.log("You successfully deleted a post")
  }

  private handleError<T> (operation= 'operation',result?: T)
    {
      return (error: any): Observable<T> => {
        console.error(error);
        return throwError(error);
      }
    }
}

