import React from "react";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Test from "./Test";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <Home />
        {/* <Test/> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
