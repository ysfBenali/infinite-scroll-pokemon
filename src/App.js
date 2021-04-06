import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Navbar } from "./components/styles";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
    </QueryClientProvider>
  );
}

export default App;
