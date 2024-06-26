'use client';

import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const learnMoreButton = (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    href="https://warpcast.com/~/channel/farmap"
  >
    <Button className="w-full md:w-fit">Follow Farmap on Farcaster</Button>
  </Link>
);

const claimProfileButton = (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    href="https://data.thegrid.id/form/205d9e06-7463-49f8-8509-71bada2f92bb"
  >
    <Button variant="outline" className="w-full md:w-fit">
      Claim your profile
    </Button>
  </Link>
);



export const Header = () => {
  return (
    <header className="container flex w-full items-center py-4">
      <div className="w-full items-center justify-start">
        <Link href="/" className="flex items-center">
          <Image
            alt="The grid logo"
            src="/farmap_logo.svg"
            width={250}
            height={200}
          />
        </Link>
      </div>

      <div className="hidden w-full items-center justify-end gap-2 md:flex">
        {learnMoreButton}
        {claimProfileButton}
      </div>
      <Sheet>
        <SheetTrigger asChild className="flex w-full items-center justify-end">
          <div className="w-full md:hidden">
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </SheetTrigger>

        <SheetContent>
          <SheetTrigger asChild>
            <Link className="flex items-center gap-2" href="/">
              <h3 className="text-lg font-semibold tracking-tight">The Grid</h3>
            </Link>
          </SheetTrigger>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <SheetTrigger asChild>{learnMoreButton}</SheetTrigger>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
};
