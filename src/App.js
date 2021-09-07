import React, { useState } from "react";
import "./styles.css";

const animalDictionary = {
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐕": "Dog",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐱": "Cat",
  "🦁": "Lion",
  "🐎": "Horse"
};

const animalArray = Object.keys(animalDictionary);

export default function App() {
  const [animalEmoji, setAnimalEmoji] = useState("Meaning Appears Here!");

  const animalInputHandler = (event) => {
    const inputVal = event.target.value.trim();
    if (inputVal in animalDictionary) {
      setAnimalEmoji(animalDictionary[inputVal]);
    } else if (inputVal === "") {
      setAnimalEmoji("Meaning Appears Here!");
    } else {
      setAnimalEmoji("Entered emoji is not in our DB");
    }
  };

  const animalClickHandler = (animal) => {
    setAnimalEmoji(animalDictionary[animal]);
  };

  return (
    <div className="App">
      <h1>Fun with Animals</h1>

      <input
        style={{ padding: "15px", width: "80%", fontSize: "1.5rem" }}
        placeholder="Enter the animal emoji here!"
        onChange={animalInputHandler}
      ></input>
      <div style={{ padding: "20px", fontSize: "1.5rem" }}>{animalEmoji}</div>
      <div>
        {animalArray.map((animal) => (
          <span
            key={animal}
            onClick={() => animalClickHandler(animal)}
            style={{ padding: "5px", fontSize: "2rem" }}
          >
            {animal}
          </span>
        ))}
      </div>
    </div>
  );
}
