import React from 'react';

export default function TodoToggleAll() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
}
