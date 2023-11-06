import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  MicroInstagramComponent } from './micro-instagram.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { PostService } from './posts/shared/post.service';
import { PostsComponent } from './posts/posts.component';
import { PostThumbnailComponent } from './posts/post-thumbnail.component';
import { PostDetailsComponent } from './posts/post details/post-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { AddPostComponent } from './posts/add post/add-post.component';
import { FormsModule } from '@angular/forms';
import { EditPostComponent } from './posts/post details/edit-post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostResolver } from './posts/post details/posts-resolver.service';



@NgModule({
  declarations: [
    MicroInstagramComponent,
    NavBarComponent,
    PostsComponent,
    PostThumbnailComponent, 
    PostDetailsComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    PostResolver
  ],
  bootstrap: [MicroInstagramComponent]
})
export class AppModule { }

