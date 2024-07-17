'use client';
import { data, Model, StockSymbol } from '@/data';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

type ValueType = {
  selectedModel: Model;
  setSelectedModel: Dispatch<SetStateAction<Model>>;
  selectedSymbol: StockSymbol;
  setSelectedSymbol: Dispatch<SetStateAction<StockSymbol>>;
};

const initialValue: ValueType = {
  selectedModel: data.models[0].name,
  setSelectedModel: () => {},
  selectedSymbol: data.stocks[0].symbol,
  setSelectedSymbol: () => {},
};

export const DataContext = createContext(initialValue);

export function DataProvider({ children }: { children: ReactNode }) {
  const { models, stocks } = data;
  const [selectedModel, setSelectedModel] = useState<Model>(models[0].name);
  const [selectedSymbol, setSelectedSymbol] = useState<StockSymbol>(stocks[0].symbol);
  return (
    <DataContext.Provider
      value={{
        selectedModel,
        setSelectedModel, // fix typings later
        selectedSymbol,
        setSelectedSymbol,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
