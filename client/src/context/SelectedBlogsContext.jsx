import React, { createContext, useState } from 'react';

// Create a context
export const SelectedBlogsContext = createContext();

export const SelectedBlogsProvider = ({ children }) => {
  const [selectedBlogs, setSelectedBlogs] = useState([]);

  return (
    <SelectedBlogsContext.Provider value={{ selectedBlogs, setSelectedBlogs }}>
      {children}
    </SelectedBlogsContext.Provider>
  );
};
