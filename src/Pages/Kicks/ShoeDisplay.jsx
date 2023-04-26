import vans_I from '../../assets/img/vans_I.webp';
import vans_II from '../../assets/img/vans_II.webp';
import vans_III from '../../assets/img/vans_III.webp';
import vans_IV from '../../assets/img/vans_IV.webp';

export const ShoeDisplay = () => 
<>
    <h2 className='text-2xl font-bold'>
        Vans SK8-Hi Classic Black and White
    </h2>
    <div className='grid grid-cols-2 gap-2'>
        <div>
            <img src={vans_I} width='200px' height='140px' alt="Very cool vans" />
        </div>
        <div>
            <img src={vans_II} width='200px' height='140px' alt="Very cool vans" />
        </div>
        <div>
            <img src={vans_III} width='200px' height='140px' alt="Very cool vans" />
        </div>
        <div>
            <img src={vans_IV} width='200px' height='140px' alt="Very cool vans" />
        </div>
    </div>
</>