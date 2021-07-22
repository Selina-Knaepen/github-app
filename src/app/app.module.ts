import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { AppRoutingModule } from './app-routing.module';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { RepoService } from './services/repo/repo.service';
import { CommitListComponent } from './components/commit-list/commit-list.component';
import { CommitService } from './services/commit/commit.service';
import { CommitSearchComponent } from './components/commit-search/commit-search.component';
import { RepoFilterComponent } from './components/repo-filter/repo-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    RepoListComponent,
    CommitListComponent,
    CommitSearchComponent,
    RepoFilterComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService,
    RepoService,
    CommitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
