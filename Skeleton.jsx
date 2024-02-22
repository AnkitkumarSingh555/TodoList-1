
import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const skeleton = () =>{
    const [skeleton, setskeleton] = useState(null);
    const [isloading, setisLoading] = useState(true);

    const fetchskeleton = async () => {
    setisLoading(false);
        try {
          setisLoading(true); // Set loading to true before making the API request
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
          );
          const data = await response.json();
          await new Promise(resolve => setTimeout(resolve, 5000));
      setskeleton(data);
      setisLoading(false);
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false); // Set loading to false after the API request completes
    }
  };

  useEffect(() => {
    fetchskeleton();
  }, []);

  return(
       <div className="Todo App flex flex-col">
         <div className="flex flex-col m-auto">
          <h1>Todo App</h1>
          {isloadingloading && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}

      </div>
      {spinner && (
        <ul>
          {skeleton.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default skeleton;