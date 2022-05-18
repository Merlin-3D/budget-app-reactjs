import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan.",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb.",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar.",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr.",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May.",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun.",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul.",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const getIntroOfPage = (label: string) => {
  if (label === "Page A") {
    return "Page A is about men's clothing";
  }
  if (label === "Page B") {
    return "Page B is about women's dress";
  }
  if (label === "Page C") {
    return "Page C is about women's bag";
  }
  if (label === "Page D") {
    return "Page D is about household goods";
  }
  if (label === "Page E") {
    return "Page E is about food";
  }
  if (label === "Page F") {
    return "Page F is about baby food";
  }
  return "";
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white bg-opacity-50 p-8">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="text-gray-500">
          Anything you want can be displayed here.
        </p>
      </div>
    );
  }

  return null;
};

export const MyChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 0,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="pv" barSize={20} fill="#fb6d3b" />
      </BarChart>
    </ResponsiveContainer>
  );
};
