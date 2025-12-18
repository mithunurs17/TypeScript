import type { Chai } from '../types';
import { ChaiCard } from './ChaiCard';

interface ChaiListProp {
    items: Chai[];
}


export function ChaiList({items}: ChaiListProp) {
    return (
        <div>
            {items.map((chai) => (
                <ChaiCard key={chai.id} name={chai.name} price={chai.price} isSpecial={chai.isSpecial} />
            ))}
        </div>
    );
}

export default ChaiList;