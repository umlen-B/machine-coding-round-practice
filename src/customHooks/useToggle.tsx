import { useState } from 'react';

function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue);

  const toggle = () => setState(prevState => !prevState);

  return {isToggled:state, toggle};
}

export default useToggle;
