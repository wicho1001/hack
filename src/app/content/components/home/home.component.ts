import { Component, OnInit } from '@angular/core';
import { MortyService } from '../../services/morty.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters: any;
  info: any;

  constructor(private mortyService: MortyService) { }

  ngOnInit(): void {
    this.mortyService.fetchCharacters(1).pipe(
      tap(
        (data) => {
          this.characters = data.results;
          this.info = data.info;
        },
        () => {
          console.log('ups')
        }
      )
    ).subscribe()


  }

}
