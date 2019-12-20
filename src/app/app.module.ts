import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { treinadorService } from '@angular/cli/bin/angular-pk-pj/src/app/treinador.service';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [treinadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }