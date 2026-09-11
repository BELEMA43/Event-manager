"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import RegData from "../regData.json";

const Register = RegData;

export default function RegChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={600}
        height={400}
        data={Register}
        margin={{ right: 30 }}
        className=""
      >
        <XAxis dataKey="name" /> <YAxis />
        <Tooltip /> <Legend />
        <Bar
          dataKey="registrations"
          type="monotone"
          stroke="#2563eb"
          fill="#8576FF"
          spacing={2}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
