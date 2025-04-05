import { SingleSourceTruthHeader, SSTFooter, Aboutimg } from '@/components/app-content';
import { Head, Link } from '@inertiajs/react';

export default function About() {

    return (
        <>
            <Head title="About Laravel Demo">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <SingleSourceTruthHeader></SingleSourceTruthHeader>
                <div className="flex w-full mt-6 justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-wrap lg:max-w-4xl">
                        <div className='min-w-full'>
                            <Aboutimg></Aboutimg>
                        </div>
                        <div>
                            <h1 className='text-3xl font-semibold'>About</h1>
                            <p>This is the about section of the webiste.  I'll be sure to fill this in with actual information 
                            about myself once I get the CSS done.  For now this text should work well enough to hold some information.
                            I will also take up enough space to help ge the CSS right.</p>
                        </div>
                        <SSTFooter></SSTFooter>
                    </main>
                </div>
            </div>
        </>
    );
}
