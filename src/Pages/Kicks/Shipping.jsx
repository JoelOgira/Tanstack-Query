import { FaCheck } from 'react-icons/fa';
import { RiErrorWarningLine } from 'react-icons/ri';

const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();

export const Shipping = () => 
<div className='py-6 text-sm'>
    <p className='flex flex-row text-[#3ec063] pt-2'>
        <span className='pr-1'>2 in stock</span>
        <span className='mt-1'>  
            <FaCheck 
                color='#3ec063'
            />       
        </span>
        <span className='font-bold pl-1 pr-3'>same day delivery</span>
        <span className=''>  
            <RiErrorWarningLine
                color='#9ca3af'
                size={22.5}
            />     
        </span>
    </p>
    <p className='flex flex-row pt-4'>
        <span className='mt-1'>  
            <FaCheck 
                color='#3ec063'
            />       
        </span>
        <span className='pl-1 font-bold'>Shipped today?</span>
        <span className='pl-1'>Order within 5:32:31</span>
    </p>
    <p className='pt-4 text-xl'>
        <span className='line-through text-red-500 pr-2'>
            Ksh4,100.00 
        </span>
        <span className='font-bold'>
            Ksh3,439.00 Excl. VAT
        </span>
    </p>
</div>
