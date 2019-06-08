import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public static API_URL: string = 'https://polar-ocean-52767.herokuapp.com';

  constructor() { }
}
