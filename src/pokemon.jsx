import React from 'react';

const Attribute = ({ property, value }) => (
  <div className="attribute">
    <div className="property">{property}</div>
    <div className="value">{value}</div>
  </div>
);

const Types = ({ types }) => {
  const elements = types.map((type, index) => {
    return (
      <span className={type} key={index}>
        {type}
      </span>
    );
  });

  return <Attribute property="Types" value={elements} />;
};

const Pokemon = ({ pokemonDetails }) => {
  const { name, weight, types, xp, hp, attack, defense, src } = pokemonDetails;

  return (
    <div className="card">
      <figure>
        <div className="poke-image">
          <img src={src} alt={name} />
        </div>
        <figcaption>{name}</figcaption>
      </figure>
      <div className="attributes">
        <Types types={types} />
        <Attribute property="Weight" value={weight} />
        <Attribute property="XP" value={xp} />
        <Attribute property="HP" value={hp} />
        <Attribute property="Attack" value={attack} />
        <Attribute property="Defense" value={defense} />
      </div>
    </div>
  );
};

export default Pokemon;
