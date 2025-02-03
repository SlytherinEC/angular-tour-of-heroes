import { Component } from '@angular/core';
import { Hero } from '../hero';
import { NgFor } from '@angular/common';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [  NgFor, HeroDetailComponent ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero 

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero : Hero){
    this.selectedHero = hero;
  }
}
