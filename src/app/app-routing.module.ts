import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';

const routes: Routes = [
  { path: 'user-search', component: UserSearchComponent },
  { path: 'repo-list', component: RepoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
