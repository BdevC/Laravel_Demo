import { SidebarInset } from '@/components/ui/sidebar';
import * as React from 'react';

interface AppContentProps extends React.ComponentProps<'main'> {
    variant?: 'header' | 'sidebar';
}

export function AppContent({ variant = 'header', children, ...props }: AppContentProps) {
    if (variant === 'sidebar') {
        return <SidebarInset {...props}>{children}</SidebarInset>;
    }

    return (
        <main className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl" {...props}>
            {children}
        </main>
    );
}


import hero from '/public/images/about-screen.png'; // Tell webpack this JS file uses this image
function Hero() {
  // Import result is the URL of your image
  return (<a href='https://inkscape.org/~doctormo/%E2%98%85code-it-ralph' target="_blank">
    <img src={hero} alt="vim Joke" className='rounded-sm'></img>
    </a>
    );
}

import about from '/public/images/using-vim.png'; // Tell webpack this JS file uses this image
function Aboutimg() {
  // Import result is the URL of your image
  return (<a href='https://inkscape.org/~doctormo/%E2%98%85code-it-ralph' target="_blank">
    <img src={about} alt="vim Joke" className='rounded-sm'></img>
    </a>
    );
}


import wave23 from '/public/images/Wave23.png'; // Tell webpack this JS file uses this image
import titansGrowth from '/public/images/Titans_of_Growth.png'; // Tell webpack this JS file uses this image
import farmscape from '/public/images/farmsacpe1.png'; // Tell webpack this JS file uses this image
import { Link } from '@inertiajs/react';

function Trio() {
  return (
    <div className="grid gap-4 mt-3 mb-3 grid-cols-1 lg:grid-cols-3 grid-rows-3 lg:grid-rows-1">
        <a href='https://inkscape.org/~Jack+S./%E2%98%85wave23' target="_blank"><img src={wave23} alt="waves" className="aspect-square rounded-sm"></img></a>
        <a href='https://inkscape.org/~rafael_clemos/%E2%98%85titans-of-growth' target="_blank"><img src={titansGrowth} alt="titans" className='aspect-square rounded-sm'></img></a>
        <a href='https://inkscape.org/~stephanieluz/%E2%98%85farmscape' target="_blank"><img src={farmscape} alt="vim Joke" className='aspect-square rounded-sm'></img></a>
    </div>
  );
}

function SingleSourceTruthHeader(){
    return (
    <header className="flex flex-row w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
        <a href={route('home')} className="basis-7xl  mb-1 font-bold items-left text-3xl lg:text-4xl"><h1 className="dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]">Front End Demo</h1></a>
        {/* TODO make header a component */}
        <nav className="basis-x1 flex items-center justify-end gap-4">
            <Link
                href={route('about')}
                className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
            >
                About
            </Link>
        </nav>
    </header>
    );
}
// Single Source of Truth Footer
function SSTFooter(){
    return (
        <footer className='w-full py-2 dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]'>
            <h1 className='mb-1 font-bold items-left text-xl dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]'>Look a Footer</h1>
            <ul className="grid grid-cols-1 lg:grid-cols-4 dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]">
                <li className="dark:text-[#EDEDEC]">Not-A-Link</li>
                <li className="dark:text-[#EDEDEC]"> Filling-Space</li>
                <li className="dark:text-[#EDEDEC]">Other-Footer-Item</li>
                <li className="dark:text-[#EDEDEC]">More-Content</li>
            </ul>
        </footer>
    );
}

export { Hero, Trio, SingleSourceTruthHeader, SSTFooter , Aboutimg};


