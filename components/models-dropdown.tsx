'use client';
import { useContext, useState } from 'react';
import { data } from '@/data';
import { DataContext } from '@/context/data-context';
import { ChevronDown, Dot } from 'lucide-react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Command, CommandItem, CommandGroup, CommandList } from './ui/command';

export default function ModelsDropdown() {
  const [open, setOpen] = useState(false);
  const { selectedModel, setSelectedModel } = useContext(DataContext);
  const { models } = data;
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          variant="outline"
          className="w-52 justify-between"
        >
          {selectedModel}
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-52">
        <Command>
          <CommandGroup>
            {models.map((model) => (
              <CommandList key={model.id}>
                <CommandItem
                  value={model.name}
                  onSelect={(value) => {
                    if (
                      value != 'Model A' &&
                      value != 'Model B' &&
                      value != 'Model C'
                    )
                      return; // bandaid fix to get rid of typing error
                    setSelectedModel(value); 
                    setOpen(false);
                  }}
                >
                  <Dot
                    className={
                      selectedModel === model.name ? 'opacity-100' : 'opacity-0'
                    }
                  />
                  {model.name}
                </CommandItem>
              </CommandList>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
