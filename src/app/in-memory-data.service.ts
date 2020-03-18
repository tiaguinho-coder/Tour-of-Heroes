import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Pet } from './pet';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Dr Nice', pet: null},
      { id: 1, name: 'Narco', pet: null },
      { id: 2, name: 'Bombasto', pet: null },
      { id: 3, name: 'Celeritas', pet: null },
      { id: 4, name: 'Magneta', pet: null },
      { id: 5, name: 'RubberMan', pet: null },
      { id: 6, name: 'Dynama', pet: null },
      { id: 7, name: 'Dr IQ', pet: null },
      { id: 8, name: 'Magma', pet: null },
      { id: 9, name: 'Tornado', pet: null }
    ];
    const pets = [
      { id: 0, name: 'Dr Bone' },
      { id: 1, name: 'Narcat' },
      { id: 2, name: 'Bombirdsto' },
      { id: 3, name: 'Celerifish' },
      { id: 4, name: 'Magnecat' },
      { id: 5, name: 'RubberTurtle' },
      { id: 6, name: 'Dynafish' },
      { id: 7, name: 'Mr IQ' },
      { id: 8, name: 'Madogma' },
      { id: 9, name: 'Tornacat' }
    ];
    return {pets, heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
 genId<T extends Hero | Pet>(myTable: T[]): number {
  return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 0;
}

}