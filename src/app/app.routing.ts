import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {NewtvComponent} from './newtv/newtv.component';
import {DiscoverComponent} from './discover/discover.component';
import {UsersComponent} from './users/users.component';
import {FeedComponent} from './feed/feed.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'newShows', component: NewtvComponent},
  {path: 'discover', component: DiscoverComponent},
  {path: 'users', component: UsersComponent},
  {path: 'feed', component: FeedComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
