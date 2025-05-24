import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";
import { getAssetOverview } from "../services/api";

const AssetDetails = ({ symbol }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAssetOverview(symbol)
      .then(data => setDetails(data))
      .finally(() => setLoading(false));
  }, [symbol]);

  if (loading) return <CircularProgress />;
  if (!details) return <Typography>No data found.</Typography>;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{details.Name} ({details.Symbol})</Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>{details.AssetType} - {details.Sector}</Typography>
        <Typography variant="body2">{details.Description}</Typography>
        <Typography variant="caption" color="text.secondary">
          Market Cap: {details.MarketCapitalization} | PERatio: {details.PERatio}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AssetDetails;