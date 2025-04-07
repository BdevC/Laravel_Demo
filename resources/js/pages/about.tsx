import { SingleSourceTruthHeader, SSTFooter, Aboutimg } from '@/components/app-content';
import { Head } from '@inertiajs/react';

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
                            <p>
                                I have startup energy.  A letter of recommendation says this: <q> Ben has a work ethic that
                                is unparalleled and is always willing to go the extra mile to see the project through completion.</q>
                                - MRS VP of technology, Brent Sink. I regularly take care of those around me. <q>He actively 
                                collaborates with the other team members, providing feedback and suggestions that lead to stronger, 
                                more stable code in our projects.</q>- MRS Lead Software Engineer, Dennie Davy. In my six years 
                                of work at MRS Electronics, I always received the highest possible score on performance reviews, 
                                and I would like to be equally important as an asset to your company. <q>It’s not only Ben’s 
                                technical skills that impress me. Ben is a joy to work with because of his strong positive attitude 
                                and determination.</q>- Engineering Manager, Josh Barnheiser
                            </p>
                            <p> 
                                Letters of recommendation are available upon request.
                            </p>
                        </div>
                        <SSTFooter></SSTFooter>
                    </main>
                </div>
            </div>
        </>
    );
}
