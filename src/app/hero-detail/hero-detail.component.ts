import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';

import { Pet } from '../pet';
import { PetService } from '../pet.service';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  pets: Pet[];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private petService: PetService,
    private messageService: MessageService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.getPets();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  getPets(): void {
    this.petService.getPets()
        .subscribe(pets => this.pets = pets);
  }
  goBack(): void {
    this.location.back();
  }
  
  addPet(pet: Pet): void {
    this.hero.pet = pet;
    this.heroService.updateHero(this.hero).subscribe();
    this.messageService.add(`HeroDetail: Added pet ${this.hero.pet.name}`);
  }

 save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}