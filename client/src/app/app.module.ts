import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlayersModule} from "./players/players.module";
import { CoffeeformComponent } from './coffeeform/coffeeform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlayersModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
