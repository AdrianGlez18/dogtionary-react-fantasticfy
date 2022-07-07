import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home"
import Header from "./components/Header";

function App() {
  const [breeds, setBreeds] = useState([]);
  const [search, setSearch] = useState("");

  const loadBreedList = async () => {
    const res = await axios.get("https://dog.ceo/api/breeds/list/all");
    setBreeds(res.data.message);
  }

  const handleSearchChange = sch => {
    setSearch(sch);
  }

  useEffect(() => {
    loadBreedList();

  }, [])
  return (
    <div className="App">
      <Header handleSearchChange={handleSearchChange}/>
      <Home breeds={breeds} search={search}/>
    </div>
  )
}

export default App
