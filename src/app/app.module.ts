import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';

import { HttpClientModule } from "@angular/common/http";
import { PostListComponent } from './post-list/post-list.component';
import { PostCardComponent } from './post-list/post-card/post-card.component';
import { OnePostCardComponent } from './post-list/post-card/one-post-card/one-post-card.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    PostListComponent,
    PostCardComponent,
    OnePostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
