import React from "react";
const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [
    { title: "Blog Post #1" },
    { title: "Blog Post #2" },
    { title: "Blog Post #3" },
  ];

  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};


export const ClickableFunction = () => {
  console.log('Click');
}


export default BlogContext;
