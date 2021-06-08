import { Injectable } from '@angular/core';
import { Kindergarten } from './kindergarten.model';

@Injectable({
  providedIn: 'root'
})
export class KindergartenService {

  kindergarten : Kindergarten;
  constructor() { }
}
