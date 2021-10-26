import React from "react";
import { useState } from "react";
import "./App.css";
import Card from "./Components/card";
import Input from "./Components/input";
interface User {
  name: string;
  hobby: string;
  age: number;
}
function App() {
  const [name, setName] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [users, setUsers] = useState<User[]>([] as User[]);
  const handleSubmit = () => {
    const person = { name, hobby, age };
    setUsers([...users, person]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Input
          placeholder="Insira seu nome"
          label="name"
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          placeholder="Insira seu hobby favorito"
          label="Hobby"
          onChange={(event) => setHobby(event.target.value)}
        />
        <Input
          placeholder="Insira sua idade"
          label="Idade"
          type="number"
          value={age}
          onChange={(event) => setAge(Number(event.target.value))}
        />
        <button
          onClick={() => {
            console.log(users);
            handleSubmit();
          }}
        >
          Enviar
        </button>

        <ul>
          {users.map((person, index) => (
            <li key={index}>
              <Card name={person.name} hobby={person.hobby} age={person.age} />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
