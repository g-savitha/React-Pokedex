import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h4>Total Experience : {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemons.map((pokemon) => (
            <Pokecard
              name={pokemon.name}
              type={pokemon.type}
              id={pokemon.id}
              exp={pokemon.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;