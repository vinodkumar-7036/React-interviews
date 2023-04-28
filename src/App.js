import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const arr = [
    {
      id: 1,
      title: "React Js",
    },
    {
      id: 2,
      title: "Node js",
    },
    {
      id: 3,
      title: "Bootstrap",
    },
    { id: 4, title: "Material Ui" },
  ];
  return (
    <div>
      {arr.map((item) => {
        return <p key={item}>{item.title}</p>;
      })}
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
  // const Fruits = ["orange", "apple", "guvava"];
  // const [name, addName] = useState("");
  // const [data, setData] = useState(["vinod"]);
  // const [value, setValue] = useState("");
  // const getData = () => {
  //   setData(Fruits);
  // };
  // const addData = () => {
  //   setData([...data, name]);
  // };
  // return (
  //   <div className="App">
  //     {/* //   <input list="data" onClick={getData} /> */}
  //     <input type="text" onChange={(e) => addName(e.target.value)} />
  //     <button onClick={addData}>Add</button>
  //     {data.map((item) => (
  //       <p>{item}</p>
  //     ))}
  // {
  //   /* <datalist id="data">
  //       (
  //       {data.map((item) => (
  //         <option>{item}</option>
  //       ))}
  //     //   )
  //     // </datalist> */
  // }
  //     </div>
  //   );
  // }
}

export default App;
