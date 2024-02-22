import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Spinner = () => {
  const [spinner, setspinner] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchspinner = async () => {
    setLoading(false);
    try {
      setLoading(true); // Set loading to true before making the API request
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      await new Promise(resolve => setTimeout(resolve, 5000));
      setspinner(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false); // Set loading to false after the API request completes
    }
  };

  useEffect(() => {
    fetchspinner();
  }, []);

  return (
    <div className="Todo App flex flex-col">
      <div className="flex flex-col m-auto">
        <h1>Todo App</h1>
        {loading && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
      </div>

      {spinner && (
        <ul>
          {spinner.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Spinner;
