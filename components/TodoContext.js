import React, { createContext, useState } from 'react';

export const TodoContext = React.createContext();


export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

