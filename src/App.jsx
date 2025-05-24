<<<<<<< HEAD
import React, { useState } from "react";
import { Container, Typography, Paper, Box, Button, TextField, Stack } from "@mui/material";
import DarkModeToggle from "./components/DarkModeToggle";
import SearchBar from "./components/SearchBar";
import AssetDetails from "./components/AssetDetails";
import PriceChart from "./components/PriceChart";
import ComparisonChart from "./components/ComparisonChart";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  const [asset, setAsset] = useState("AAPL");
  const [comparisonAssets, setComparisonAssets] = useState([
    "MSFT", "GOOGL", "TSLA", "AMZN", "NFLX", "NVDA", "META"
  ]);
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState(null);
  const [newSymbol, setNewSymbol] = useState("");

  const handleAssetChange = (symbol) => {
    if (symbol) {
      setAsset(symbol.toUpperCase());
      setError(null);
    } else {
      setError("Please enter a valid symbol");
    }
  };

  const handleComparisonChange = (symbols) => {
    if (symbols.length > 0) {
      setComparisonAssets(symbols.map(s => s.toUpperCase()));
      setError(null);
    } else {
      setError("Please select at least one comparison asset");
    }
  };

  const handleAddComparisonAsset = () => {
    const symbol = newSymbol.trim().toUpperCase();
    if (symbol && !comparisonAssets.includes(symbol) && symbol !== asset) {
      setComparisonAssets([...comparisonAssets, symbol]);
      setNewSymbol("");
      setError(null);
    } else if (!symbol) {
      setError("Please enter a stock symbol.");
    } else {
      setError("Stock already added or is the main asset.");
    }
  };

  return (
    <Box sx={{ bgcolor: darkMode ? "#222" : "#fafafa", minHeight: "100vh" }}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h4" gutterBottom>
              Noxolo99's FinDash
            </Typography>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </Box>
          {error && (
            <Typography variant="body1" color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}
          <SearchBar onSearch={handleAssetChange} />
          <Stack direction="row" spacing={2} alignItems="center" sx={{ my: 2 }}>
            <TextField
              label="Add Stock Symbol"
              variant="outlined"
              size="small"
              value={newSymbol}
              onChange={e => setNewSymbol(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") handleAddComparisonAsset(); }}
            />
            <Button variant="contained" onClick={handleAddComparisonAsset}>
              Add Stock
            </Button>
          </Stack>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              Currently comparing:
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
              {[asset, ...comparisonAssets].map(symbol => (
                <Box
                  key={symbol}
                  sx={{
                    bgcolor: "#e0e7ef",
                    color: "#234",
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    fontWeight: symbol === asset ? 700 : 500,
                    border: symbol === asset ? "2px solid #1976d2" : "1px solid #cbd5e1"
                  }}
                >
                  {symbol}
                </Box>
              ))}
            </Box>
          </Box>
          <AssetDetails symbol={asset} />
          <PriceChart symbol={asset} />
          <ComparisonChart symbols={[asset, ...comparisonAssets]} />
          <CurrencyConverter />
          <Typography variant="caption" display="block" sx={{ mt: 3, textAlign: "center" }}>
            Built with ❤️ by Noxolo99
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

=======
import React, { useState } from "react";
import { Container, Typography, Paper, Box, Button, TextField, Stack } from "@mui/material";
import DarkModeToggle from "./components/DarkModeToggle";
import SearchBar from "./components/SearchBar";
import AssetDetails from "./components/AssetDetails";
import PriceChart from "./components/PriceChart";
import ComparisonChart from "./components/ComparisonChart";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  const [asset, setAsset] = useState("AAPL");
  const [comparisonAssets, setComparisonAssets] = useState([
    "MSFT", "GOOGL", "TSLA", "AMZN", "NFLX", "NVDA", "META"
  ]);
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState(null);
  const [newSymbol, setNewSymbol] = useState("");

  const handleAssetChange = (symbol) => {
    if (symbol) {
      setAsset(symbol.toUpperCase());
      setError(null);
    } else {
      setError("Please enter a valid symbol");
    }
  };

  const handleComparisonChange = (symbols) => {
    if (symbols.length > 0) {
      setComparisonAssets(symbols.map(s => s.toUpperCase()));
      setError(null);
    } else {
      setError("Please select at least one comparison asset");
    }
  };

  const handleAddComparisonAsset = () => {
    const symbol = newSymbol.trim().toUpperCase();
    if (symbol && !comparisonAssets.includes(symbol) && symbol !== asset) {
      setComparisonAssets([...comparisonAssets, symbol]);
      setNewSymbol("");
      setError(null);
    } else if (!symbol) {
      setError("Please enter a stock symbol.");
    } else {
      setError("Stock already added or is the main asset.");
    }
  };

  return (
    <Box sx={{ bgcolor: darkMode ? "#222" : "#fafafa", minHeight: "100vh" }}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h4" gutterBottom>
              Noxolo99's FinDash
            </Typography>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </Box>
          {error && (
            <Typography variant="body1" color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}
          <SearchBar onSearch={handleAssetChange} />
          <Stack direction="row" spacing={2} alignItems="center" sx={{ my: 2 }}>
            <TextField
              label="Add Stock Symbol"
              variant="outlined"
              size="small"
              value={newSymbol}
              onChange={e => setNewSymbol(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") handleAddComparisonAsset(); }}
            />
            <Button variant="contained" onClick={handleAddComparisonAsset}>
              Add Stock
            </Button>
          </Stack>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              Currently comparing:
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
              {[asset, ...comparisonAssets].map(symbol => (
                <Box
                  key={symbol}
                  sx={{
                    bgcolor: "#e0e7ef",
                    color: "#234",
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    fontWeight: symbol === asset ? 700 : 500,
                    border: symbol === asset ? "2px solid #1976d2" : "1px solid #cbd5e1"
                  }}
                >
                  {symbol}
                </Box>
              ))}
            </Box>
          </Box>
          <AssetDetails symbol={asset} />
          <PriceChart symbol={asset} />
          <ComparisonChart symbols={[asset, ...comparisonAssets]} />
          <CurrencyConverter />
          <Typography variant="caption" display="block" sx={{ mt: 3, textAlign: "center" }}>
            Built with ❤️ by Noxolo99
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

>>>>>>> 1978595fecfb131c88e3f5ba9105f0ffc337ad57
export default App;