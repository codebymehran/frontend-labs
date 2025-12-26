'use client';
import { useState } from 'react';
import { Button, Input } from '@/components/ui';
// Exercise 1: Basic Counter Variations
// Build a counter with these buttons:

// Increment by 1
// Decrement by 1
// Increment by 5
// Reset to 0
// Set to a specific number (using an input)

export const Hooks_ex1 = () => {
  const [counter, setCounter] = useState(0);
  const [inputCounter, setInputCounter] = useState(0);

  const increment = () => setCounter(c => c + 1);
  const decrement = () => setCounter(c => Math.max(0, c - 1));
  const addFive = () => setCounter(c => c + 5);
  const reset = () => setCounter(0);
  const setFromInput = () => {
    setCounter(inputCounter);
    setInputCounter(0);
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 space-y-6 rounded-xl bg-card shadow">
      <h1 className="text-2xl font-bold text-center">Hooks Exercise 1</h1>

      <p className="text-center text-xl">
        Counter: <span className="font-semibold">{counter}</span>
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <Button onClick={increment}>Increment</Button>
        <Button variant="secondary" onClick={decrement}>
          Decrement
        </Button>
        <Button variant="outline" onClick={addFive}>
          +5
        </Button>
        <Button variant="destructive" onClick={reset}>
          Reset
        </Button>
      </div>

      <div className="flex justify-center gap-2">
        <Input
          type="number"
          value={inputCounter}
          onChange={e => setInputCounter(Math.max(0, Number(e.target.value)))}
          onKeyDown={e => e.key === 'Enter' && setFromInput()}
          placeholder="Set a number"
          className="w-32 text-center appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <Button onClick={setFromInput}>Set</Button>
      </div>
    </div>
  );
};
