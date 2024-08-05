import React from "react";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewPost from "./Component/NewPost/NewPost";
import { SearchProvider } from "./assets/Context/SearchContext";

const queryClient = new QueryClient();

function App() {
  return (
    <SearchProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="newpost" element={<NewPost />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </SearchProvider>
  );
}

export default App;
