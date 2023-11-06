import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { IPost } from "./shared/post.module";
import { PostService } from "./shared/post.service";
import { Observable, Subscription, map} from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'posts',
    template: 
    `
    <div class='posts-grid'>
    <post-thumbnail *ngFor="let post of posts$ | async" [post]='post'></post-thumbnail>
    
    </div>
    `,
    styles:[
       
       `
       h1 { width: 1800px}
        .posts-grid  {
        display:flex;
        flex-wrap: wrap;
        align-items:center;
        justify-content: center;
       
        margin: 100px 150px 100px 150px;
        
        }
       `
    ]
})
export class PostsComponent implements OnInit{
    
    sub! : Subscription;
    errorMessage: string = ''
    newPost!: IPost
    posts$: Observable<IPost[]> = this.postService.posts$
    posts: IPost[] = [];
    //posts$: Observable<IPost[]> = this.postService.posts$.pipe(
       // map((_posts) => {
          //  console.log("Posts: " + _posts)
           // this.posts = _posts;
           // return _posts;
       // })
   // );
    
    constructor(private postService: PostService, private route: ActivatedRoute){}
    
    ngOnInit(): void {
        console.log("Ng on Init")
       this.postService.getPosts()
        //this.posts$.subscribe()
       
}}
