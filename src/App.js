import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    setSpinner(true);
    
    if (!!input) {
      axios
        .get(`https://api.datamuse.com/words?rel_trg=${input}`)
        .then((res) => {
          setData(res.data);
          setSpinner(false);
        })
        .catch((err) => {
          console.log(err);
          setSpinner(false);
        });
    }
    setInput("");
  };

  return (
    <div className="App">
      <SearchBar
        handleSearch={handleSearch}
        input={input}
        setInput={setInput}
      />
      <SearchResult data={data} spinner={spinner} />
    </div>
  );
}

export default App;
