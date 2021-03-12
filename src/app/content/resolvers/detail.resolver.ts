import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { skipWhile, take, takeWhile, tap } from 'rxjs/operators';
import { MortyService } from '../services/morty.service';

@Injectable({ providedIn: 'root' })
export class DetailResolver implements Resolve<any> {
  constructor(private mortyService: MortyService) {}
  data = new Subject;

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.data.next(null)
    this.mortyService.fetchCharacter(route.params.id).pipe(
      tap(
        (data) => {
          this.data.next(data);
        },
        () => {
          console.log('ups');
        }
      )
    ).subscribe();
    debugger
    return this.data.pipe(skipWhile((data) => !data), take(1));
  }
}
