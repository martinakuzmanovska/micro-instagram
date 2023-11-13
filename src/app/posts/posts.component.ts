import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { IPost } from "./shared/post.module";
import { PostService } from "./shared/post.service";
import { Subscription, map} from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'posts',
    template: 
    `
    <div class='posts-grid'>
    <post-thumbnail *ngFor="let post of posts" [post]='post'></post-thumbnail>
    
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
    posts!: IPost[]
    current = 1
   
    
    constructor(private postService: PostService, private route: ActivatedRoute){}
    
    ngOnInit(): void {
       this.loadInitialPosts()
    }

    loadInitialPosts()
    {
        this.postService.getPosts(this.current).subscribe(
            (data) => {this.posts = data
                this.current++
            this.loadNext()
        }
           )
        
    }
    loadNext()
    {
        const loadInterval = 300; // Load new posts every 3 seconds (adjust as needed)

        setInterval(() => {
          this.postService.getPosts(this.current).subscribe((data: any[]) => {
            this.posts = this.posts.concat(data);
            this.current++;
          });
        }, loadInterval);
    }
}
