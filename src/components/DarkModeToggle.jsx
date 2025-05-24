<<<<<<< HEAD
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

=======
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

>>>>>>> 1978595fecfb131c88e3f5ba9105f0ffc337ad57
export default DarkModeToggle;