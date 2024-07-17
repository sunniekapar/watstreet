'use client';
import { useContext, useState } from 'react';
import { data } from '@/data';
import { DataContext } from '@/context/data-context';
import { ChevronDown, Dot } from 'lucide-react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Command, CommandItem, CommandGroup, CommandList } from './ui/command';

export default function StocksDropdown() {
  const [open, setOpen] = useState(false);
  const { selectedSymbol, setSelectedSymbol } = useContext(DataContext);
  const { stocks } = data;
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          variant="outline"
          className="w-52 justify-between"
        >
          {selectedSymbol}
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-52">
        <Command>
          <CommandGroup>
            {stocks.map((symbol) => (
              <CommandList key={symbol.symbol}>
                <CommandItem
                  value={symbol.symbol}
                  onSelect={(value) => {
                    if (value != 'AAPL' && value != 'GOOGL' && value != 'MSFT')
                      return; // bandaid fix to get rid of typing error
                    setSelectedSymbol(value);
                    setOpen(false);
                  }}
                >
                  <Dot
                    className={
                      selectedSymbol === symbol.symbol
                        ? 'opacity-100'
                        : 'opacity-0'
                    }
                  />
                  {symbol.name}
                </CommandItem>
              </CommandList>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
