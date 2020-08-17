import React, { Component } from "react";
import "./Pokecard.css";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padTothree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    const { name, type, id, exp } = this.props;
    const imgSrc = `${POKE_API}${padTothree(id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={name} />
        </div>
        <div className="Pokecard-data">Type: {type}</div>
        <div className="Pokecard-data">Experience: {exp}</div>
      </div>
    );
  }
}

export default Pokecard;
