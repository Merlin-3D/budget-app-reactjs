import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Category A", value: 400 },
  { name: "Category B", value: 300 },
  { name: "Category C", value: 300 },
  { name: "Category D", value: 200 },
  { name: "Category E", value: 278 },
  { name: "Category F", value: 189 },
];

export function CircularChart() {
  const [_activeIndex, setActiveIndex] = React.useState<number>(0);

  const onPieEnter = React.useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <ResponsiveContainer width="100%" height="70%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#fb6d3b"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
