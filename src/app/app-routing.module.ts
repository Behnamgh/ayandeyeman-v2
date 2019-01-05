import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountFromComponent } from './account-from/account-from.component';
import { HomeComponent } from './home/home.component';
import { MyLettersComponent } from './my-letters/my-letters.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'myLetters',
    component: MyLettersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
