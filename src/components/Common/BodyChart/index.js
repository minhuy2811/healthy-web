import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import Box from "@mui/material/Box";
import { randomNumber } from "../../../helpers";
import { bgChart } from "../../../assets/variables";

export default function BodyChart({ height, margin }) {
  const data = [...Array(12)].map((_, index) => {
    const key = index;
    return {
      month: `${key + 1} 月`,
      line1: randomNumber(999, 99999),
      line2: randomNumber(555, 99999),
    };
  });

  return (
    <Box height="100%" width="100%" bgcolor={bgChart}>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data}
          margin={margin || { right: 50, top: 50, bottom: 50, left: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" interval="preserveEnd" />
          <YAxis interval="preserveEnd" />
          <Line
            type="monotone"
            dataKey="line1"
            stroke="#FFCC21"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="line2" stroke="#8FE9D0" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
