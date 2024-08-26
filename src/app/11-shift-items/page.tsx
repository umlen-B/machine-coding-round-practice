"use client";
import { useState } from "react";
import ListView, { ListItem } from "./listView";
import "./style.css";

export default function App() {
  const [leftList, setLeftList] = useState<ListItem[]>([]);
  const [rightList, setRightList] = useState<ListItem[]>([]);
  const updateList = (value: string, queue: string) => {
    const payload: ListItem = {
      id: Date.now().toString(),
      value: value,
      checked: false,
    };
    if (queue === "left") {
      setLeftList((prev) => [...prev, payload]);
    }
    if (queue === "right") {
      setRightList((prev) => [...prev, payload]);
    }
  };
  // Extract common logic to different function
  const updateCheckedValue = (value: boolean, id: string, queue: string) => {
    if (queue === "left") {
      const arr = leftList.map((item) => {
        if (item.id.toString() === id.toString()) {
          item.checked = value;
          return item;
        }
        return item;
      });
      setLeftList(arr);
    }
    if (queue === "right") {
      const arr = rightList.map((item) => {
        if (item.id.toString() === id.toString()) {
          item.checked = value;
          return item;
        }
        return item;
      });
      setRightList(arr);
    }
  };
  // Extract common logic to different function
  // Combine LTR & RTL using type props
  // Rename function for readability
  const moveLTR = () => {
    const newRightList = [...rightList];
    const newleftList = leftList.filter((item) => {
      if (item.checked) {
        item.checked = false;
        newRightList.push(item);
        return false;
      } else {
        return true;
      }
    });
    setLeftList(newleftList);
    setRightList(newRightList);
  };
  // Extract common logic to different function
  // Combine LTR & RTL using type props
  // Rename function for readability
  const moveRTL = () => {
    const newleftList = [...leftList];
    const newRightList = rightList.filter((item) => {
      if (item.checked) {
        item.checked = false;
        newleftList.push(item);
        return false;
      } else {
        return true;
      }
    });
    setLeftList(newleftList);
    setRightList(newRightList);
  };
  // Extract common logic to different function
  const updateAll = (e) => {
    const checked = e.target.checked;
    const queue = e.target.getAttribute("id");
    if (queue === "left") {
      const arr = leftList.map((item) => {
        item.checked = checked;
        return item;
      });
      setLeftList(arr);
    }
    if (queue === "right") {
      const arr = rightList.map((item) => {
        item.checked = checked;
        return item;
      });
      setRightList(arr);
    }
  };
  // wrapper div should be main tag instead of div
  // Update App.js to App.tsx
  return (
    <div className="wrapper">
      <ListView
        type="left"
        addItem={updateList}
        items={leftList}
        onCheckChange={updateCheckedValue}
        updateAll={updateAll}
      />
      <section>
        <button className="btn" onClick={moveRTL}>
          {" "}
          {"<"}{" "}
        </button>
        <button className="btn" onClick={moveLTR}>
          {" "}
          {">"}{" "}
        </button>
      </section>
      <ListView
        type="right"
        addItem={updateList}
        items={rightList}
        onCheckChange={updateCheckedValue}
        updateAll={updateAll}
      />
    </div>
  );
}
