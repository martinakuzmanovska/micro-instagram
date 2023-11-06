import {Routes} from "@angular/router"
import { PostsComponent } from "./posts/posts.component"
import { PostDetailsComponent } from "./posts/post details/post-details.component"
import { AddPostComponent } from "./posts/add post/add-post.component"
import { PostResolver} from "./posts/post details/posts-resolver.service"


export const appRoutes: Routes=[
    {path:'posts/new', component: AddPostComponent},
    {path: 'posts', component: PostsComponent},
    
    {path: 'posts/:id', component: PostDetailsComponent, resolve: {post: PostResolver}},
    {path:'', redirectTo: '/posts', pathMatch: 'full'}
   
]