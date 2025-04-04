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



import hero from '/public/images/using-vim.png'; // Tell webpack this JS file uses this image

console.log(hero); // /logo.84287d09.png

function Hero() {
  // Import result is the URL of your image
  return <a href='https://inkscape.org/~doctormo/%E2%98%85code-it-ralph' target="_blank"><img src={hero} alt="vim Joke"></img></a>;
}

export default Hero;