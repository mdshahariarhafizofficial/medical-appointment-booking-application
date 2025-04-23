import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='min-h-[calc(100vh-382px)] flex items-center justify-center'>
           <ScaleLoader
                color="#176AE5"
                height={50}
                margin={5}
                radius={10}
                width={10}
            />
        </div>
    );
};

export default Loader;