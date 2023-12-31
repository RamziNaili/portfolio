import { AlignJustify } from 'lucide-react';
import { FC } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from '../ui/sheet';

export const Header: FC = () => {
  return (
    <div className="flex justify-between items-center px-[50px] py-[25px] shadow-[0_0px_11px_rgba(0,0,0,.09)]">
      <p className="font-poppins font-bold text-[#2d2e32] text-xl">
        Naili Ramzi
      </p>
      <div className="md:hidden flex items-center">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent side="left" className="w-screen h-screen">
            <SheetDescription className="flex items-center h-full w-full">
              <div className="flex flex-col w-full items-center gap-10 hover:cursor-pointer">
                <p className="font-poppins text-2xl font-semibold text-black">
                  Home
                </p>
                <p className="font-poppins text-2xl font-semibold text-black">
                  About
                </p>
                <p className="font-poppins text-2xl font-semibold text-black">
                  Projects
                </p>
                <p className="font-poppins text-2xl font-semibold text-black">
                  Contact
                </p>
              </div>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex gap-4 max-md:hidden">
        <p className="font-popins text-lg font-semibold hover:cursor-pointer hover:text-sky-600">
          Home
        </p>
        <p className="font-popins text-lg font-semibold hover:cursor-pointer hover:text-sky-600">
          About
        </p>
        <p className="font-popins text-lg font-semibold  hover:cursor-pointer hover:text-sky-600">
          Project
        </p>
        <p className="font-popins text-lg font-semibold hover:cursor-pointer hover:text-sky-600">
          Contact
        </p>
      </div>
    </div>
  );
};
