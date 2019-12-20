import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { treinadorService, treinador } from '@angular/cli/bin/angular-pk-pj/src/app/treinador.service';
import { Treinador } from '@angular/cli/bin/angular-pk-pj/src/app/treinador';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {

 treinador: Treinador[];
  selectedPokemon: Pokemon;

  constructor(private treinaservice: treinadorService) { }

  ngOnInit() {
  this.getTreinadores();

  }

  add(nome: string): void{
    this.treinaservice.PostTreinador({ nome } as treinador).subscribe();
    this.getTreinadores();
  }

  getTreinadores(): void{
    this.treinaservice.getAllTreinador().subscribe(treinador => this.treinador = treinador);
  }

  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }
}