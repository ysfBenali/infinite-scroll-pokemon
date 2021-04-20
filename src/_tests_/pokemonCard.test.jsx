import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import renderer from 'react-test-renderer'
import PokemonCard from "../components/pokemon/PokemonCard"

const pokemon = {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
    index: "1",
  };

it("pokemon item render with name", () => {
    const {getByTestId,getByText}= render(<PokemonCard name={pokemon.name} url={pokemon.url}/>)
    expect(getByTestId("pokemonId")).toBeInTheDocument()
    expect(getByText(pokemon.name)).toBeInTheDocument()
})

it('match snapshot', () => {
    const tree = renderer.create(<PokemonCard name={pokemon.name} url={pokemon.url}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });