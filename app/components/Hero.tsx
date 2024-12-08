import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/magic-button';
import { FaLocationArrow } from 'react-icons/fa';
import { WavyBackground } from './ui/wavy-background';

const Hero = () => {
    return (
        <WavyBackground backgroundFill='#FFFFFF' className='absolute top-0'>
        <div className='pb-20 pt-36 '>
            <Spotlight className='top-20 left-full h-[80vh] w-[70vh]' fill="red" />
            <Spotlight className='top-30 left-82 h-[50vh] w-[100vh]' fill="blue" />

            <div className="h-screen w-full dark:bg-black-100 bg-transparent dark:bg-grid-white/[0.3] bg-grid-white/[0.1] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>

            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-black-100 max-w-80'>
                        {/*Dynamic Web Magic with Next.js*/}
                    </h2>
                    <TextGenerateEffect 
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='Transforming Ideas into Subtle Experiences'
                    />
                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                        Hi, I&apos;m Shivam Naik, an experienced Software Engineer currently based in Germany.
                    </p>

                    <a href='#about'>
                        <MagicButton
                            title='Show my Work'
                            icon={<FaLocationArrow />}
                            position='right'
                        />
                    </a>
                </div>
            </div>
        </div>
        </WavyBackground>

    )
}

export default Hero