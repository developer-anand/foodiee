import React from "react";
import "./styles.css";
import { useState } from "react";

const foodDB = {
  Rajasthani: [
    { name: "Dal baati churma <span>🍜🍜</span>", rating: "4/5" },
    { name: "Bajra ki roti with lasun chutney <span>🧄🧄</span>", rating: "3.5/5" },
    { name: "Onion kachori <span>🧅🧅</span>", rating: "3.5/5" }
  ],

  Delhi: [
    {
      name: "Paranthas <span>🍤🍤</span>",
      rating: "5/5"
    },
    {
      name: "Chaat <span>🥗🥗</span>",
      rating: "4.5/5"
    },
    {
      name: "Chole Bhature <span>🥡🥡</span>",
      rating: "4.5/5"
    }
  ],
  Punjabi: [
    {
      name: "Butter Chicken <span>🐔🐔</span>",
      rating: "5/5"
    },
    {
      name: "Sarson Ka Saag Aur Makki Ki Roti <span>🥡🥡</span>",
      rating: "5/5"
    },
    {
      name: "Masala Channa <span>🥗🥗</span>",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedState, setFood] = useState("Punjabi");
  function genreClickHandler(food) {
    setFood(food);
  }
  return (
    <div className="App">
      <h1> <span>🍕</span> Foodiee <span>🍜</span> </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout <strong>India's</strong> Delicious <span>🍕</span> Foods <span>🍜</span>{" "}
      </p>

      <div>
        {Object.keys(foodDB).map((food) => (
          <button
            onClick={() => genreClickHandler(food)}
            style={{
              cursor: "pointer",
              color: "white",
              background: "black",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {food}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedState].map((food) => (
            <li
              key={food.name}
              style={{
                textAlign: "center",
                backgroundColor: "red",
                color: "	#FFFFFF",
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "auto auto 2rem auto",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
