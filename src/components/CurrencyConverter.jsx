import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, CircularProgress, Box, TextField, MenuItem, Button } from "@mui/material";
import { getExchangeRate } from "../services/api";

const currencies = ["USD", "EUR", "GBP", "ZAR", "JPY", "CNY"];

const CurrencyConverter = () => {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("ZAR");
  const [amount, setAmount] = useState(1);
  const [rate, setRate] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setRate(null);
    if (from && to && from !== to) {
      setLoading(true);
      getExchangeRate(from, to)
        .then((r) => setRate(r))
        .finally(() => setLoading(false));
    }
  }, [from, to]);

  const handleConvert = () => {
    if (rate) setResult((amount * rate).toFixed(2));
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Currency Converter</Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>
          <TextField
            select
            label="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            size="small"
          >
            {currencies.map(curr => <MenuItem key={curr} value={curr}>{curr}</MenuItem>)}
          </TextField>
          <TextField
            select
            label="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            size="small"
          >
            {currencies.map(curr => <MenuItem key={curr} value={curr}>{curr}</MenuItem>)}
          </TextField>
          <TextField
            type="number"
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            size="small"
            sx={{ width: 100 }}
          />
          <Button variant="contained" onClick={handleConvert} disabled={!rate}>Convert</Button>
        </Box>
        {loading && <CircularProgress size={18} />}
        {result && (
          <Typography variant="subtitle1">{amount} {from} = {result} {to}</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;