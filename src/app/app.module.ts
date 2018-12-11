import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {TVServiceClient} from './services/TVServices';
import {UserServiceClient} from './services/user.service.client';

import { NewtvComponent } from './newtv/newtv.component';
import { DiscoverComponent } from './discover/discover.component';
import { UsersComponent } from './users/users.component';
import { FeedComponent } from './feed/feed.component';
import { MoviesComponent } from './movies/movies.component';
import { UserCommentsComponent } from './user-comments/user-comments.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NewtvComponent,
    DiscoverComponent,
    UsersComponent,
    FeedComponent,
    MoviesComponent,
    UserCommentsComponent,
    UserProfileComponent,
    ManageUsersComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
  ],
  providers: [TVServiceClient,
    UserServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
