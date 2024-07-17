export type Model = 'Model A' | 'Model B' | 'Model C';

export type StockSymbol = 'AAPL' | 'GOOGL' | 'MSFT';

export type TimeSeriesData = {
  [key in StockSymbol]: Array<{ date: string; price: number }>;
};

type DataType = {
  models: Array<{ id: number; name: Model }>;
  stocks: Array<{ symbol: StockSymbol; name: string }>;
  timeSeriesData: TimeSeriesData;
};

export const data: DataType = {
  models: [
    { id: 1, name: 'Model A' },
    { id: 2, name: 'Model B' },
    { id: 3, name: 'Model C' },
  ], // dropdown
  stocks: [
    { symbol: 'AAPL', name: 'Apple Inc.' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.' },
    { symbol: 'MSFT', name: 'Microsoft Corp.' },
  ], // dropdown
  timeSeriesData: {
    AAPL: [
      { date: '2024-07-01', price: 150 },
      { date: '2024-07-02', price: 152 },
      { date: '2024-07-03', price: 148 },
      { date: '2024-07-04', price: 153 },
    ],
    GOOGL: [
      { date: '2024-07-01', price: 2800 },
      { date: '2024-07-02', price: 2820 },
      { date: '2024-07-03', price: 2790 },
      { date: '2024-07-04', price: 2830 },
    ],
    MSFT: [
      { date: '2024-07-01', price: 300 },
      { date: '2024-07-02', price: 305 },
      { date: '2024-07-03', price: 302 },
      { date: '2024-07-04', price: 310 },
    ],
  }, // chart
};

