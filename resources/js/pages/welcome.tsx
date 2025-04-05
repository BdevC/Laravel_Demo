import { Hero, SingleSourceTruthHeader, SSTFooter, Trio } from '@/components/app-content';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {

    return (
        <>
            <Head title="Ben Campbell Front End Demo">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <SingleSourceTruthHeader></SingleSourceTruthHeader>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-wrap lg:max-w-4xl">
                        <div className="flex flex-col w-full items-left justify-left mt-6">
                            <p>This isn’t a real site, but the code here is real. All images on this fake site are from the
                                <a className="font-bold"href="https://inkscape.org/gallery"> Inkscape gallery.</a>
                                &nbsp;The site was designed using Figma.  It uses Laravel, React and Tailwind CSS. 
                                &nbsp;The initial intention was to theme the site as a bicycle club.
                                &nbsp;Some headings still reflect this intention.</p>
                        </div>
                        <div className="mt-3">
                            <Hero></Hero>
                        </div>
                        <div className="flex flex-col w-full items-left justify-left">
                            <h1 className="text-3xl mb-1 font-semibold mt-3 mb-3">See The World on a Bike</h1>
                        </div>
                        <Trio></Trio>
                        <SSTFooter></SSTFooter>
                    </main>
                </div>
            </div>
        </>
    );
}
