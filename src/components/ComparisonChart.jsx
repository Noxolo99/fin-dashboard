import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, CircularProgress, Box, TextField, Button } from "@mui/material";
import { Line } from "react-chartjs-2";
import { getDailyPrices } from "../services/api";

const colors = ["#1976d2", "#d32f2f", "#388e3c", "#fbc02d", "#ff9800", "#7b1fa2"];

const ComparisonChart = ({ symbols }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [customSymbols, setCustomSymbols] = useState(symbols.slice(1).join(", "));

  useEffect(() => {
    setLoading(true);
    Promise.all(symbols.map(sym => getDailyPrices(sym)))
      .then(results => {
        const labels = results[0] ? Object.keys(results[0]).slice(0, 30).reverse() : [];
        const datasets = results.map((data, idx) => ({
          label: symbols[idx],
          data: labels.map(date => data && data[date] ? parseFloat(data[date]["4. close"]) : null),
          borderColor: colors[idx % colors.length],
          backgroundColor: `${colors[idx % colors.length]}33`,
          tension: 0.3,
          fill: false,
        }));
        setChartData({ labels, datasets });
      })
      .finally(() => setLoading(false));
  }, [symbols]);

  const [input, setInput] = useState(customSymbols);

  const handleUpdate = () => {
    window.location.reload();
  };

  if (loading) return <CircularProgress />;
  if (!chartData) return null;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Compare Assets</Typography>
          <TextField
            size="small"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            label="Symbols (comma separated)"
            sx={{ mr: 2 }}
          />
          <Button
            variant="outlined"
            onClick={() => {
              const arr = input.split(",").map(s => s.trim().toUpperCase()).filter(Boolean);
              window.location.href = `?compare=${arr.join(",")}`;
              window.location.reload();
            }}
          >
            Update
          </Button>
        </Box>
        <Line data={chartData} />
      </CardContent>
    </Card>
  );
};

export default ComparisonChart;