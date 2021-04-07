import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PokemonList from "./components/pokemon/PokemonList";
import { Navbar } from "./components/styles";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <PokemonList />
    </QueryClientProvider>
  );
}

export default App;
