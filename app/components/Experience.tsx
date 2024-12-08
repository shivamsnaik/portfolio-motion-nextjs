import React from 'react'
import { ContainerScroll } from './ui/container-scroll';

const Experience = () => {
    return (
        <section id="experience">
            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={<>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            Experience that matters! <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                with Various Projects
                            </span>
                        </h1>
                    </>} children={
                        <img
                        className='w-full h-full'
                        src='https://nextcloud.shivamnaik.de/s/ZFPigPbPH2LLecE/download/Screenshot%202024-12-08%20170813.png'
                    />
                    }>
                </ContainerScroll>
            </div>
        </section>
    )
}

export default Experience;

const children = (
    <div className='float w-full h-full'>
        
        <p>Test</p>
    </div>
)