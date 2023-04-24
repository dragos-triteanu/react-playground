import React, { createContext } from "react";


/**
 * #CONTEXT This is an example of using the context API to create a context
 */
const ThemeContext = createContext({
  isDark: false
});

export default ThemeContext;
