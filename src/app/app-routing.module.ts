import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthorizedComponent } from './core/unauthorized/unauthorized.component';
import { InternalServerErrorComponent } from './core/internal-server-error/internal-server-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { DomainsComponent } from './domains/domains.component';
import { DomainDetailsComponent } from './domain-details/domain-details.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'domains' },
  { path: 'domains',component: DomainsComponent },
  { path: 'domains/:id', component: DomainDetailsComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'internal-server-error', component: InternalServerErrorComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
