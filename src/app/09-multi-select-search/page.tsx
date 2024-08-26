"use client";
import React, { useRef, useState } from "react";
import "./style.css";
import useDebounce from "./useDebounce";
const Suggestions = () => {
  const [value, setValue] = useState("");
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Strawberry",
    "Pineapple",
    "Watermelon",
    "Blueberry",
    "Cherry",
    "Peach",
    "Kiwi",
    "Papaya",
    "Pomegranate",
    "Raspberry",
    "Pear",
    "Lemon",
    "Lime",
    "Avocado",
    "Coconut",
  ];
  const handleSuggestions = (e) => {
    setValue(e.target.value);
  };
  const debouncedHandle = useDebounce(handleSuggestions, 500);
  const addItem = (e) => {
    console.log(e);
    setSelectedFruits((prev) => [e.target.getAttribute("data-fruit"), ...prev]);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const removeItem = (e) => {
    console.log(e);
    setSelectedFruits((prev) =>
      prev.filter((item) => e.target.getAttribute("data-fruit") !== item)
    );
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <>
      <div className="container">
        <div className="wrapper">
          {selectedFruits.map((fruit) => (
            <button
              data-fruit={fruit}
              onClick={removeItem}
              key={fruit}
              className="selection"
            >
              {fruit} ❌
            </button>
          ))}
          <input
            aria-label="Enter Fruit name"
            ref={inputRef}
            placeholder="Enter Fruit name"
            onChange={debouncedHandle}
          />
        </div>
        <div className="suggestionsList">
          {fruits
            .filter(
              (item) =>
                value &&
                item.toLowerCase().includes(value.toLowerCase()) &&
                !selectedFruits?.find(
                  (fruit) => fruit.toLowerCase() === item.toLowerCase()
                )
            )
            .map((item) => (
              <button className="clickable" data-fruit={item} onClick={addItem}>
                {item}
              </button>
            ))}
        </div>
      </div>
    </>
  );
};

export default Suggestions;
