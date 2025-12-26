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

// Exercise 2: Input Mirror

// Create an input field
// Display what user types in real-time below it
// Add a "Clear" button
// Show character count

// Exercise 3: Multiple Counters

// Create 3 separate counters on the same page
// Each should have its own +/- buttons
// Each maintains its own count independently

// Exercise 4: Color Picker

// Three inputs for RGB values (0-255)
// Display a box with that color as background
// Show the hex code
// Bonus: Add a reset to white button

// Exercise 5: Simple Calculator

// Two number inputs
// Four buttons: +, -, ×, ÷
// Display result
// Handle division by zero


// Buggy Code - Find the Hook Mistakes
// Bug #1: Counter Not Updating
// jsximport { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const addThree = () => {
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={addThree}>Add 3</button>
//     </div>
//   );
// }
// Question: Click the button. Does it add 3? Why or why not?

// Bug #2: Input Not Working
// jsximport { useState } from 'react';

// function NameInput() {
//   const [name, setName] = useState('');

//   return (
//     <div>
//       <input type="text" placeholder="Enter name" />
//       <p>Hello, {name}!</p>
//     </div>
//   );
// }
// Question: Type in the input. Does "Hello" update?

// Bug #3: Reset Not Working
// jsximport { useState } from 'react';

// function TextInput() {
//   const [text, setText] = useState('');

//   const handleClear = () => {
//     setText('');
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button onClick={handleClear}>Clear</button>
//       <p>You typed: {text}</p>
//     </div>
//   );
// }
// Question: Type something, then click Clear. Does the input clear?

// Bug #4: Counter Going Crazy
// jsximport { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }
// Question: What happens when this component loads?

// Bug #5: Double Counter
// jsximport { useState } from 'react';

// function DoubleCounter() {
//   const [count, setCount] = useState(0);

//   const incrementTwice = () => {
//     setCount(count + 1);
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={incrementTwice}>+2</button>
//     </div>
//   );
// }
// Question: Does clicking the button increase count by 2?

// Bug #6: Previous Value
// jsximport { useState } from 'react';

// function FastCounter() {
//   const [count, setCount] = useState(0);

//   const addFive = () => {
//     for (let i = 0; i < 5; i++) {
//       setCount(count + 1);
//     }
//   };

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={addFive}>Add 5</button>
//     </div>
//   );
// }
// Question: Does it really add 5?
