import { Component, OnInit } from '@angular/core';

import { Hero } from '../../Model/Domain/hero';
import { HeroService } from '../../Service/hero.service';
import { HeroModel } from '../../Model/Views/Dynamic/HeroModel';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, public heroModel: HeroModel) {}

  ngOnInit(): void {
    this.heroService.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }

    this.heroService.addHero({ name } as Hero);
    
  }

  delete(hero: Hero): void {
    this.heroModel.heroes = this.heroModel.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id);
  }
}
