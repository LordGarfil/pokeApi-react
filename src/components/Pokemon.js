export const PokeCard = (poke) => {
  return (
    <div className="pokeCard">
      <div className="pokeCard-header">
        <img src={poke.image} alt="" />
      </div>
      <div className="pokeCard-body">
        <span>
          <strong style={{textTransform: 'capitalize'}}>{poke.name}</strong> <small style={{ color: "gray" }}>{poke.hp}hp</small>
        </span>
        <small style={{ color: "gray" }}>{poke.experience} exp</small>
      </div>
      <div className="pokeCard-footer">
        <div style={{ textAlign: "center" }}>
          <strong>{poke.attack}</strong> <small style={{ color: "gray" }}>Ataque</small>
        </div>
        <div style={{ textAlign: "center" }}>
          <strong>{poke.specialAttack}</strong> <small style={{ color: "gray" }}>Especial</small>
        </div>
        <div style={{ textAlign: "center" }}>
          <strong>{poke.defense}</strong> <small style={{ color: "gray" }}>Defensa</small>
        </div>
      </div>
    </div>
  );
};