import { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([]);

  const getData = async () => {
    const res = await fetch("http://localhost:5000/api");
    const data = await res.json();
    setBackendData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {typeof backendData?.users === "undefined" ? (
        <p>Loading..</p>
      ) : (
        <>
          {backendData.users.map((user, key) => (
            <p key={key}>{user}</p>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
