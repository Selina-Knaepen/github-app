import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { CommitListComponent } from './components/commit-list/commit-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-search', pathMatch: 'full' },
  { path: 'user-search', component: UserSearchComponent },
  { path: 'repo-list', component: RepoListComponent },
  { path: 'commit-list', component: CommitListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
