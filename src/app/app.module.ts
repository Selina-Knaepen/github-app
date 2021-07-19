import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { AppRoutingModule } from './app-routing.module';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { RepoService } from './services/repo/repo.service';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    RepoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    RepoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
