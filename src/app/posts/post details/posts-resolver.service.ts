import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

import {map} from 'rxjs/operators'
import { PostService } from "../shared/post.service";
import { IPost } from "../shared/post.module";

@Injectable()
export class PostResolver implements Resolve<any>{
    constructor(private postService: PostService){}

    resolve(route: ActivatedRouteSnapshot) :IPost{
        return this.postService.getPost(route.params['id'])
    }
}