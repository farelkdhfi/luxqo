import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import volume1 from '../assets/volume3.png';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const VolumeSection3 = () => {
    const garisRef = useRef(null);

    useEffect(() => {
        gsap.to(garisRef.current, {
            y: '200vh',
            duration: 2,
            repeat: -1,
            ease: 'linear',
            onRepeat: () => gsap.set(garisRef.current, { y: '-10vh' })
        });
    }, []);

    return (
        <section className='lg:h-screen lg:relative px-5 pt-16 lg:pt-0 lg:px-20 flex flex-col lg:flex-row justify-center items-center lg:overflow-hidden gap-y-3 lg:gap-y-0 bg-gray-100 lg:bg-white'>
            <div className='hidden lg:flex absolute lg:left-[70vh]'>
                <div className='w-50 h-[160vh] bg-gradient-to-b from-white via-gray-200 to-white overflow-hidden relative -rotate-45'>
                    <div ref={garisRef} className='bg-white h-20 w-full absolute top-0 shadow-lg'></div>
                </div>
            </div>
            <div className='lg:w-1/2 z-50 flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                <h2 className='font-bold text-xl'>N'Impressed</h2>
                <p className='max-w-md text-center lg:text-start'>Not Impressed is a statement of quiet confidence, blending sleek design with an effortless edge. Bold yet understated, it reflects a refined attitude that speaks without the need for words.</p>
                <Link to="/preview3" className='mt-2 bg-black p-2 px-4 rounded-lg flex text-white w-fit justify-center items-center gap-x-2'>Check <FaArrowRight /></Link>
            </div>
            <div className='lg:w-1/2 z-50'>
                <div className='lg:w-[70vh] w-full h-full lg:h-[70vh] bg-gray-200 lg:absolute lg:bottom-0 rounded-full'>
                    <img src={volume1} alt="" className='lg:absolute lg:bottom-0 lg:w-[65vh] w-full' />
                </div>
            </div>
        </section>
    );
};

export default VolumeSection3;
