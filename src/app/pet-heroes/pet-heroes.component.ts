import { Component, OnInit } from '@angular/core';

import { Pet } from '../pet-heroes';
import { PetService } from '../pet.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './pet-heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedPet: Pet;

  pets: Pet[];

  constructor(private petService: PetService, private messageService: MessageService) { }

  ngOnInit() {
    this.getPets();
  }

  onSelect(pet: Pet): void {
    this.selectedPet = pet;
    this.messageService.add(`PetService: Selected pet id=${pet.id}`);
  }

  getPets(): void {
    this.petService.getPets()
        .subscribe(pets => this.pets = pets);
  }
  delete(pet: Pet): void {
    this.pets = this.pets.filter(h => h !== pet);
    this.petService.deletePet(pet).subscribe();
  } 
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.petService.addPet({ name } as Pet)
      .subscribe(pet => {
      this.pets.push(pet);
    });
  }
}