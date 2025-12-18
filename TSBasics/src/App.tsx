import './App.css'
import {ChaiCard} from './components/ChaiCard.tsx'
import { Counter } from './components/Counter.tsx'
import { ChaiList } from './components/ChaiList.tsx';

import type { Chai } from './types.ts';

const menu: Chai[] = [
  {id: 1, name: "Masala Chai", price: 20, isSpecial: true},
  {id: 2, name: "Ginger Chai", price: 15},
  {id: 3, name: "Lemon Chai", price: 10},
];


function App() {
  

  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard name="HeadPhones" price={5000} />
        <ChaiCard name="HeadPhones" price={99000} />
      </div>
      <div>
        <Counter />
      </div>
      <div><ChaiList items={menu} /></div>
      
    </>
  )
}

export default App
