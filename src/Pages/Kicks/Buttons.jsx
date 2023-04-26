import { FaCheck } from 'react-icons/fa';
import { MdLock } from 'react-icons/md';

export const Buttons = () => 
<div className='mb-4'>
    <button className="w-full py-4 bg-[#3ec063] text-white text-center rounded mb-4 font-bold cursor-pointer">
        Add to cart
    </button>
    <button className="w-full py-4 bg-blue-950 text-white text-center rounded mb-6 font-bold cursor-pointer">
        Buy it now
    </button>
    <div>
        <ul className='capitalize'>
            <li className="flex flex-row pb-3 text-sm">
                <span className='mt-1 pr-2'>  
                    <FaCheck 
                        color='#3ec063'
                    />       
                </span>
                <span>Quality is never over-looked at Kicks Kenya</span>
            </li>
            <li className="flex flex-row pb-3 text-sm">
                <span className='mt-1 pr-2'>  
                    <FaCheck 
                        color='#3ec063'
                    />       
                </span>
                <span>Our Team Carefully Analyses Each Pair Before Dispatch</span>
            </li>
            <li className="flex flex-row pb-3 text-sm">
                <span className='mt-1 pr-2'>  
                    <FaCheck 
                        color='#3ec063'
                    />       
                </span>
                <span>To improve on your purchase decision: We take most of the product photos through our in-house studio</span>
            </li>
        </ul>
    </div>
    <MdLock
        size={30}
        color='#000'
    />
    <p className='text-sm text-gray-600 py-4'>
        <span>Guaranteed</span>
        <span className='px-3 font-bold'>secure & safe</span>
        <span>checkout</span>
    </p>
</div>