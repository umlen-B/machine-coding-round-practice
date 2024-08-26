import React, { useEffect, useRef, useState } from "react";

const useDebounce = (fn: (...args: any[]) => void, delay = 500) => {
  // const [timer, setTimer] = useState(null)
  const timer = useRef<Timeout | null>(null);
  useEffect(() => {
    // Cleanup function to clear the timeout if the component is unmounted or dependencies change
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [fn, delay]);
  return function (...args) {
    if (timer) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      fn.apply(this, args);
      //   fn(...args);
    }, delay);
  };
};

export default useDebounce;

// import { useRef, useEffect } from "react";

// type Timeout = ReturnType<typeof setTimeout>;

// const useDebounce = (fn: (...args: any[]) => void, delay: number = 500) => {
//   const timer = useRef<Timeout | null>(null);

//   useEffect(() => {
//     // Cleanup function to clear the timeout if the component is unmounted or dependencies change
//     return () => {
//       if (timer.current) {
//         clearTimeout(timer.current);
//       }
//     };
//   }, [fn, delay]);

//   return function (...args: any[]) {
//     if (timer.current) {
//       clearTimeout(timer.current);
//     }

//     timer.current = setTimeout(() => {
//       //   fn.apply(this, args);
//       fn(...args);
//     }, delay);
//   };
// };

// export default useDebounce;
