import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PokemonList from "./components/pokemon/PokemonList";
import { ReactQueryDevtools } from "react-query/devtools";
import { Navbar } from "./components/styles";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar>
        <img src="pokemon-logo.png" />
      </Navbar>
      <PokemonList />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
