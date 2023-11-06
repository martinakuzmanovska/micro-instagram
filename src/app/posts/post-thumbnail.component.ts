import { Component, Input } from "@angular/core";
import { IPost } from "./shared/post.module";
import { PostService } from "./shared/post.service";
import { Router } from "@angular/router";

@Component({
    selector: 'post-thumbnail',
    templateUrl:'post-thumbnail.component.html',
styleUrls:[ 'post-thumbnail.component.css']
})
export class PostThumbnailComponent{
    @Input() post!: IPost

    constructor(private postService: PostService, private router: Router){}
    delete()
    {
        if(confirm('Are you sure you want to delete this post?'))
        {
            this.postService.deletePost(this.post)
            this.router.navigate(['/posts'])
        }
        
    }

}
