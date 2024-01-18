import React, { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

import "./App.css";
import Navigation from "./components/navigation/Navigation";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isPageStored = localStorage.getItem("index");

    if (isPageStored !== null) {
      setLoading(false);
    } else {
      setLoading(true);

      const timeoutId = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("index", "true"); // Ustawia wartość na "true" jako domyślną po 2 sekundach
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <InfinitySpin
            visible={true}
            width="200"
            color="#ff0000"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <>
          <Navigation />
        </>
      )}
    </div>
  );
}

export default App;
