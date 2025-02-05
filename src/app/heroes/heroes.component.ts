import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { NgFor } from '@angular/common';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [  NgFor, RouterLink ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  // selectedHero?: Hero 

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero : Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }
}
