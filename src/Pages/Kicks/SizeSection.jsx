import { ImLocation } from 'react-icons/im';

export const SizeSection = () => 
<>
    <p className='hidden md:block pb-2 text-sm'>
        The Authentic Vans are an effortless cool factor, a universally loved design, and wearability with nearly any wear, either official,... <span className='text-[#efb34c]'>Read more</span>
    </p>

    <div className="py-2 flex flex-row justify-between">
        <span className='font-bold '>Size</span>
        <span className='flex'>
            <ImLocation 
                color='#efb34c'
                size={25}
            /> 
            <p className='text-sm'>Free pickup in our shop(s)</p>
        </span>
    </div>
    
    <div className="inline-block relative w-full bg-white">
        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline">
            <option>38</option>
            <option>39</option>
            <option>40</option>
            <option>41</option>
            <option>42</option>
            <option>43</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>                                          
    </div>
</>