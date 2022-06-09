import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private httpClient: HttpClient) {}

  getPlayers() {
   return  this.httpClient.get('http://localhost:3000/players')
  }
}
