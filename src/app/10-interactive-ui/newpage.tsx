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
  const [allSelected, setAllSelected] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (allSelected) {
      clearSelection();
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [allSelected]);

  const getOneCount = useMemo(() => {
    return boxData
      .flat()
      .reduce((prev, current) => (current ? prev + current : prev), 0);
  }, [boxData]);

  const addToClicked = (colIndex: number, rowIndex: number) => {
    if (!allSelected && !isSelected(colIndex, rowIndex)) {
      if (selection.length === getOneCount - 1) {
        timer.current = setTimeout(() => setAllSelected(true), 2000);
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
        timer.current = setTimeout(clearSelection, 2000);
        return newSelection;
      } else {
        setAllSelected(false); // No more items to clear, reset the state
        return prevSelection;
      }
    });
  };

  const isSelected = (colIndex: number, rowIndex: number) => {
    return selection.some(
      (item) => item[0] === colIndex && item[1] === rowIndex
    )
      ? "selected"
      : "";
  };

  const renderRow = (row: number[], colIndex: number) => {
    return row.map((num, rowIndex) => {
      if (num === 0) {
        return (
          <div key={`empty-${colIndex}-${rowIndex}`} className="emptyBox"></div>
        );
      } else {
        return (
          <div
            key={`box-${colIndex}-${rowIndex}`}
            onClick={() => addToClicked(colIndex, rowIndex)}
            className={`${isSelected(colIndex, rowIndex)} borderedBox`}
          ></div>
        );
      }
    });
  };

  const renderColumn = (col: number[][]) => {
    return col.map((row, colIndex) => {
      return (
        <div key={`row-${colIndex}`} style={{ display: "flex" }}>
          {renderRow(row, colIndex)}
        </div>
      );
    });
  };

  return <div className="container">{renderColumn(boxData)}</div>;
};

export default InteractiveUi;
