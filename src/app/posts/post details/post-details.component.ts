import { Component, OnInit } from "@angular/core";
import {  IPost} from "../shared/post.module";
import { PostService } from "../shared/post.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

@Component ({
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.css']
    })
export class PostDetailsComponent implements OnInit
{
    post!: IPost
    showPost: boolean = true
    posts!: IPost[]


    constructor(private postService: PostService, private route: ActivatedRoute, private router: Router){}
    ngOnInit(): void {
        this.route.data.forEach((data)=> 
        {
            this.post = data['post'];

            })
            
        }
      
    
    showEdit()
    {
        this.showPost = false
    }
    save(post: IPost){
       
        this.postService.updatePost(post).subscribe(
            (response) => console.log(response),
            (error: any) => console.log(error),
            () => console.log('Done updating Post')
        )
        this.showPost = true
    }
    cancel()
    {
        this.showPost = true
    }
    delete()
    {
        if(confirm('Are you sure you want to delete this post?'))
        {
            this.postService.deletePost(this.post).subscribe(
            (response) => console.log("deleting...."),
            (error: any) => console.log(error),
            () => console.log("Done deleting Post"))
            this.router.navigate(['/posts'])
        }
        
    }
    goBack(){
        this.router.navigate([".."])
    }
}