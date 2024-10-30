import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCardsComponent } from './components/user-cards/user-cards.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserCardsComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: '**', redirectTo: '/users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
