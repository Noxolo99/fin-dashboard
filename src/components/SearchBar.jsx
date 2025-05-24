import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim().toUpperCase());
      setInput("");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", mb: 2 }}>
      <TextField
        label="Search by symbol (e.g. AAPL, BTC)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        variant="outlined"
        size="small"
        sx={{ flexGrow: 1, mr: 1 }}
      />
      <Button variant="contained" type="submit">
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;