"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import "./style.css";
const boxData = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 1, 1],
];
const InteractiveUi = () => {
  const [selection, setSelection] = useState<number[][]>([]);
  const [allSlected, setAllSelected] = useState(false);
  const timer = useRef(null);
  useEffect(() => {
    if (allSlected) {
      clearSelection();
    }
    return () => {
      if (timer.current) {
        console.log("!@# clear timer");
        clearTimeout(timer.current);
      }
    };
  }, [allSlected]);
  const getOneCount = useMemo(() => {
    return boxData
      .flat(1)
      .reduce((prev, current) => (current ? prev + current : prev), 0);
  }, [boxData]);
  const addToClicked = (colIndex: number, rowIndex: number) => {
    // change color
    if (!allSlected && !isSelected(colIndex, rowIndex)) {
      if (selection.length === getOneCount - 1) {
        // if last item start deselect
        console.log("!@# pop starts");
        timer.current = setTimeout(() => setAllSelected(true), 500);
      }
      setSelection((prev) => [[colIndex, rowIndex], ...prev]);
    }
  };
  const clearSelection = () => {
    setSelection((prevSelection) => {
      if (prevSelection.length > 0) {
        const newSelection = prevSelection.slice(0, -1); // create a new array without the last element
        console.log("!@# selection", prevSelection);
        console.log("!@# newSelection", newSelection);
        if (timer.current) {
          console.log("!@# clear timer");
          clearTimeout(timer.current);
        }
        timer.current = setTimeout(clearSelection, 500);
        return newSelection;
      } else {
        setAllSelected(false); // No more items to clear, reset the state
        return prevSelection;
      }
    });
  };
  const isSelected = (colIndex: number, rowIndex: number) => {
    const selectionFound = selection.find(
      (item) => item[0] === colIndex && item[1] === rowIndex
    );
    if (selectionFound) {
      return "selected ";
    } else {
      return "";
    }
  };
  const renderRow = (row: number[], colIndex: number) => {
    return row.map((num, rowIndex) => {
      if (num === 0) {
        return <div className="emptyBox"></div>;
      } else {
        return (
          <div
            onClick={() => addToClicked(colIndex, rowIndex)}
            className={`${isSelected(colIndex, rowIndex)}borderedBox`}
          ></div>
        );
      }
    });
  };
  const renderColumn = (col: number[][]) => {
    return col.map((row, colIndex) => {
      return <div style={{ display: "flex" }}>{renderRow(row, colIndex)}</div>;
    });
  };

  return <div className="container">{renderColumn(boxData)}</div>;
};

export default InteractiveUi;
