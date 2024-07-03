import { useRef, useEffect } from 'react';

function usePrevious(value:number) {
  const ref = useRef<number>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;
