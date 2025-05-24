import React from "react";
import { Switch, FormControlLabel } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const DarkModeToggle = ({ darkMode, setDarkMode }) => (
  <FormControlLabel
    control={
      <Switch
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        color="primary"
      />
    }
    label={<DarkModeIcon />}
  />
);

export default DarkModeToggle;