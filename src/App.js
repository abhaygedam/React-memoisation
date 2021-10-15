import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Child from './Child';

function App() {
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [list, setList] = useState([]);

  setInterval(() => {
    setTimer(timer + 1);
  }, 5000);

  const handleAdd = () => {
    const data = {
      title: title,
      body: body,
      verify: false,
      id: uuidv4(),
    }
    setList([...list,  data ]);
  }

  const handleToggle = (id) => {
    list.map((e) => {
      if (id == e.id) {
        e.verify = !e.verify;
      }
    });
  }


  return (
    <div className="App">
      <div><h3>Timer :- {timer}</h3></div>
      <input name="title" placeholder="Enter Tittle" onChange={(e) => { setTitle(e.target.value) }} />
      <input name="body" placeholder="Enter Body" onChange={(e) => { setBody(e.target.value) }} />
      <button onClick={handleAdd}>Add</button>

      {
        list.map((e) => {
          return (
              <Child {...e} handleToggle={handleToggle}></Child>
          )
        })
      }
    </div>
  );
}

export default App;
