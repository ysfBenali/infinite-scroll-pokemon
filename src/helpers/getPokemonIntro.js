const getPokemonIntro = (pokemonData, speciesData) => {
  const enLang = speciesData?.flavor_text_entries.filter(
    (entry) => entry.language.name === "en"
  )[0];

  const type = pokemonData?.types?.map((type) => type.type.name);

  return `${pokemonData?.name}, ${type} pokemon type. ${enLang.flavor_text.replace(/[^\x20-\x7E]/g, ' ')}`;
};

export default getPokemonIntro;
