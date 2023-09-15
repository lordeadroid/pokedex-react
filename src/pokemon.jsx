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
  const typesElement = <Types types={types} />;

  return (
    <div className="card">
      <figure>
        <div className="poke-image">
          <img src={src} alt={name} />
        </div>
        <figcaption>{name}</figcaption>
      </figure>
      <div className="attributes">
        {typesElement}
        <div className="attribute">
          <div className="property">Weight</div>
          <div className="value">{weight}</div>
        </div>
        <div className="attribute">
          <div className="property">HP</div>
          <div className="value">{hp}</div>
        </div>
        <div className="attribute">
          <div className="property">XP</div>
          <div className="value">{xp}</div>
        </div>
        <div className="attribute">
          <div className="property">Attack</div>
          <div className="value">{attack}</div>
        </div>
        <div className="attribute">
          <div className="property">Defense</div>
          <div className="value">{defense}</div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
