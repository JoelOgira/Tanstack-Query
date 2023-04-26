import { ShoeDisplay } from './ShoeDisplay';
import { SizeSection } from './SizeSection';
import { Shipping } from './Shipping';
import { Buttons } from './Buttons';

const Kicks = () => {
    return (
        <div className="flex flex-col mb-20 space-y-4 m-3 mx-auto justify-between md:flex-row md:m-6 md:space-x-6 md:space-y-0 h-screen">
            <div className="px-4 md:w-1/2">
                <ShoeDisplay />          
            </div>

            <div className="px-4 md:w-1/2 text-gray-600 md:pl-20">
                <SizeSection />
                <Shipping />
                <Buttons />
            </div>
        </div>
    )
}

export default Kicks;