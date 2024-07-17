'use client';
import ModelsDropdown from '@/components/models-dropdown';
import StockChart from '@/components/stock-chart';
import StocksDropdown from '@/components/stocks-dropdown';
export default function Home() {
  return (
    <main className="max-w-screen-md mx-auto grid pt-16 space-y-6">
      <div className="flex gap-6">
        <ModelsDropdown />
        <StocksDropdown />
      </div>
      <StockChart />
    </main>
  );
}
