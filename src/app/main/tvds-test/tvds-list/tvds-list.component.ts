import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tvds-list',
  templateUrl: './tvds-list.component.html',
  styleUrls: ['./tvds-list.component.scss']
})
export class TvdsListComponent implements OnInit {

  rows: Array<any>;

  constructor(private route: ActivatedRoute,private router: Router,) { }

  ngOnInit() {
    this.rows = this.route.snapshot.data.items.data;
  }

}
