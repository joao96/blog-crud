import React, { useReducer } from "react";

//So just to clarify what we just did right here we made a reusable function that we can use several times
//inside the application to automate the process of setting up this context stuff and setting up this provider
//as well.

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === {addBlogPost: (dispatch) => {return() => {} } }
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
