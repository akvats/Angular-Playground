import { Component, OnInit } from '@angular/core';
import { HERO } from '../hero'
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero : HERO = {id : 2, name: 'Windstorm'} ;
  heroes = HEROES;
  constructor() { }

  ngOnInit() {
  }

}
