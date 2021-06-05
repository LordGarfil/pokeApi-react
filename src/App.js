import "./App.css";
import { TopNav } from "./components/TopNav";
import { PokeCard } from "./components/Pokemon";
import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState(null);
  function fetchHomePokemons(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setPokemon({
            image: result.sprites.other.dream_world.front_default,
            name: result.name,
            hp: result.stats[0].base_stat,
            experience: result.base_experience,
            attack: result.stats[1].base_stat,
            specialAttack: result.stats[2].base_stat,
            defense: result.stats[3].base_stat,
          });
        },

        (error) => {}
      );
  }

  async function fetchPokemonByName(name) {
    if (name !== "") {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setPokemon({
              image: result.sprites.other.dream_world.front_default,
              name: result.name,
              hp: result.stats[0].base_stat,
              experience: result.base_experience,
              attack: result.stats[1].base_stat,
              specialAttack: result.stats[2].base_stat,
              defense: result.stats[3].base_stat,
            });
          },

          (error) => {}
        );
    } else {
      const randomId = Math.round(Math.random() * (500 - 1));
      fetchHomePokemons(randomId);
    }
  }

  useEffect(() => {
    const randomId = Math.round(Math.random() * (500 - 1));
    fetchHomePokemons(randomId);
  }, []);

  return (
    <div className="App">
      <TopNav callback={fetchPokemonByName}></TopNav>
      <div style={homeStyle}>
        <PokeCard {...pokemon}></PokeCard>
      </div>
    </div>
  );
}

const homeStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "30px 80px",
};

export default App;
