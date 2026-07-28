import { Routes } from '@angular/router';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';

export const routes: Routes = [
  { path: '', component: AccountsListComponent },
  { path: 'accounts/:id', component: AccountDetailComponent },
  { path: '**', redirectTo: '' },
];
