import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      let result = await axios.get(
        "https://4ac2-37-145-175-85.eu.ngrok.io/api/categories/", {
          headers: {
            'Access-Control-Allow-Origin': '*',
          }
        }
      );
      console.log(result)
   //   setCategories(result)
    };
    fetch();
  }, []);
  return <div className="App">Hello World</div>;
}

export default App;
