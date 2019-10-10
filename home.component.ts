import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  images = [1,2, 3, 4 ,5].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  ngOnInit() {
  }

    onSearch()
  {
   this.router.navigateByUrl("search");
  }
}
