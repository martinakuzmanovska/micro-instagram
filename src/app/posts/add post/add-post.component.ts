import { Component, OnInit } from "@angular/core";
import {IPost} from "../shared/post.module";
import { PostService } from "../shared/post.service";
import { Router } from "@angular/router";

@Component 
({
    selector: 'add-new',
   templateUrl: './add-post.component.html',
   styles:
   [
    `
    form {padding-top: 100px; width: 500px; margin: auto;};
    input {width: 200px;}
    `
   ]
})
export class AddPostComponent 
{
    post!: IPost
    url!: string
    title!: string 
    successMessage = ''

    constructor(private postService: PostService, private router: Router){}

    save()
    {
        
        this.post={ 'albumId': Math.round(Math.random()* 100), 'id':ID++,
         'title': this.title, 'thumbnailUrl': this.url, 'url': this.url }
       // console.log(this.post) 
      //  this.postService.savePost(this.post).subscribe(
       //     (result) => console.log(result),
        //    (data) => this.post =data,
       //     () =>
      //  this.router.navigate(['/posts']))
      console.log(ID)
      this.postService.savePost(this.post)
      this.router.navigate(['/posts'])
      
    }
}
let ID=5001
