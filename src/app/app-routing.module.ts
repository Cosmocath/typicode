import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { OnePostCardComponent } from './post-list/post-card/one-post-card/one-post-card.component';

const routes: Routes = [
  // redirection
  //{path: "", redirectTo: "users", pathMatch: "full"},
  // Routes pour la section utilisateur
  { path: "users", component: UserListComponent, pathMatch: "full" },
  {
    path: "posts",
    children: [
      { path: ":id", component: OnePostCardComponent },
      { path: "", component: PostListComponent }
    ]
  },
  //{path: "posts/:id", component: OnePostCardComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
