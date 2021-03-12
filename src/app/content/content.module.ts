import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { MortyService } from './services/morty.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailResolver } from './resolvers/detail.resolver';
@NgModule({
  declarations: [CardComponent, HomeComponent, DetailComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    HttpClientModule,
  ],
  providers: [MortyService, DetailResolver]
})
export class ContentModule { }
