import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { DetailResolver } from './resolvers/detail.resolver';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'character/:id',
    component: DetailComponent,
    resolve: {
      data: DetailResolver,
    },
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
