import { Component, EventEmitter, Output } from "@angular/core";
import { IPost } from "../shared/post.module";
import { Input  } from "@angular/core";
import { PostService } from "../shared/post.service";

@Component({
    selector: 'edit-post', 
    template: `
    <form class="mb-3" #postForm ="ngForm" (ngSubmit)="save(postForm.value)" ><textarea class="form-control textarea"  [(ngModel)]="post.title" name='title'  rows=4 >{{post.title}}</textarea> 
    <input  class="button btn btn-secondary" (click)='cancel()' type='button' value="Cancel">
    <input  class="button btn btn-secondary"  type='submit' value="Done">
    
    </form>
    `,
    styles: [`
        .textarea { margin-top: 10px; 
            margin-bottom: 10px;

            font-size: 16px; width: 100%}
            .button {float:right; margin-right: 10px;}
    `]
})
export class EditPostComponent{

    @Output() savePostEmitter: EventEmitter<any> = new EventEmitter
    @Output() cancelEmitter: EventEmitter<any> = new EventEmitter
    @Input() post: IPost  ={ title: '', id: 0, albumId: 0, url: '', thumbnailUrl: ''}
    title!: string

    constructor( private postService: PostService){}

    save(values : any){
        this.post.title = values.title
        this.savePostEmitter.emit(this.post)

    }
    cancel()
    {
        this.cancelEmitter.emit()
    }
}