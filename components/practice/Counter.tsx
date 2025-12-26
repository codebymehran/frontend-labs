'use client'
import { useState } from "react"
import { Button, Input } from '@/components/ui';

const Counter = () => {
   const [count, setCount] = useState(0);
   return (
     <div className="space-y-4">
       <h1 className="text-2xl font-semibold">Counter</h1>
       <p>Counter is {count}</p>

       <div className="flex gap-2">
         <Button className='cursor-pointer'>Increase</Button>
         <Button variant="secondary">Decrease</Button>
         <Button variant="outline">Reset</Button>
       </div>

       <form>
         <Input type="number" />
       </form>
     </div>
   );
}

export default Counter
