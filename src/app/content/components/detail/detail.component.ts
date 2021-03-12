import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterState, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  character: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.character = data;
    })
  }

}
