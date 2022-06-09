import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    PlayersComponent
  ],
  exports: [
    PlayersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PlayersModule { }
