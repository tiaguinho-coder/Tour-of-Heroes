import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const pets = [
      { id: 11, name: 'Dr Bone' },
      { id: 12, name: 'Narcat' },
      { id: 13, name: 'Bombirdsto' },
      { id: 14, name: 'Celerifish' },
      { id: 15, name: 'Magnecat' },
      { id: 16, name: 'RubberTurtle' },
      { id: 17, name: 'Dynafish' },
      { id: 18, name: 'Mr IQ' },
      { id: 19, name: 'Madogma' },
      { id: 20, name: 'Tornacat' }
    ];
    return {heroes, pets};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}