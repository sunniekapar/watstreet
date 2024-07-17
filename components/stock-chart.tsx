'use client';

import { DataContext } from '@/context/data-context';
import { data } from '@/data';
import { useContext } from 'react';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from './ui/chart';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const symbolMap = new Map();
data.stocks.map((stock) => {
  symbolMap.set(stock.symbol, stock.name);
});

export default function StockChart() {
  const { selectedModel, selectedSymbol } = useContext(DataContext); // we would typically use the selectedModel here to change the graph depending on the
  const chartData = data.timeSeriesData[selectedSymbol];
  const chartConfig = {
    price: {
      label: 'Price',
      color: 'golden',
    },
  } satisfies ChartConfig;

  let maxRange = 0;
  chartData.map((num) => {
    maxRange = Math.max(maxRange, num.price);
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {symbolMap.get(selectedSymbol)} - {selectedModel}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickMargin={8}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              domain={[0, Math.floor((maxRange * 2) / 10) * 10]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="price"
              type="linear"
              fill="darkgoldenrod"
              fillOpacity={0.4}
              stroke="darkgoldenrod"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
