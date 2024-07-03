import React from 'react';
import useToggle from '../customHooks//useToggle';

const ToggleComponent = () => {
  const {isToggled, toggle} = useToggle(false);

  return (
    <div>
      <p>{isToggled ? 'Toggled' : 'Not Toggled'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default ToggleComponent;
