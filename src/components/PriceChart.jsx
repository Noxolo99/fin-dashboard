import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";
import { Line } from "react-chartjs-2";
import { getDailyPrices } from "../services/api";
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const PriceChart = ({ symbol }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDailyPrices(symbol)
      .then((data) => {
        if (!data) {
          setChartData(null);
          return;
        }
        const labels = Object.keys(data).slice(0, 30).reverse();
        const prices = labels.map((date) => parseFloat(data[date]["4. close"]));
        setChartData({
          labels,
          datasets: [
            {
              label: `${symbol} Price`,
              data: prices,
              borderColor: "#1976d2",
              backgroundColor: "rgba(25, 118, 210, 0.3)",
              tension: 0.3,
              fill: true,
            }
          ]
        });
      })
      .finally(() => setLoading(false));
  }, [symbol]);

  if (loading) return <CircularProgress />;
  if (!chartData) return null;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Last 30 Days Price</Typography>
        <Line data={chartData} />
      </CardContent>
    </Card>
  );
};

export default PriceChart;