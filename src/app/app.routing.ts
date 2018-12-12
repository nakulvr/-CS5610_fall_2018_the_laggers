import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {NewtvComponent} from './newtv/newtv.component';
import {DiscoverComponent} from './discover/discover.component';
import {UsersComponent} from './users/users.component';
import {FeedComponent} from './feed/feed.component';
import {MoviesComponent} from './movies/movies.component';
import { UserCommentsComponent } from './user-comments/user-comments.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {AdminComponent} from './admin/admin.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/:uid', component: UserProfileComponent},
  {path: 'profile/follower/:uid', component: UserProfileComponent},
  {path: 'profile/following/:uid', component: UserProfileComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'newShows', component: NewtvComponent},
  {path: 'discover', component: DiscoverComponent},
  {path: 'users', component: UsersComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'userComments/:uid', component: UserCommentsComponent},
  {path: 'movies/:tvshowId', component: MoviesComponent},
  {path: '**', component: HomeComponent}
  ];

export const routing = RouterModule.forRoot(appRoutes);
