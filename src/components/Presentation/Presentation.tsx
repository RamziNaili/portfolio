import { FC } from 'react';
import GithubSvg from '@/assets/github.svg?react';
import LinkedinSvg from '@/assets/linkedin.svg?react';

export const Presentation: FC = () => {
  return (
    <div className="flex justify-center gap-20 items-center mt-24 max-md:flex-col md:flex-row-reverse">
      <img
        src="/ranaili.jpg"
        alt="profile"
        className="border-2 border-[#2d2e32] rounded-full h-64 w-64 max-lg:w-1/4 max-lg:h-1/4 max-md:w-2/4"
      />
      <div className="flex flex-col gap-10 relative max-sm:items-center">
        <div className="flex items-center max-sm:justify-center">
          <h1 className="font-black text-6xl text-[#2d2e32] font-poppins w-[500px] relative max-sm:w-4/5">
            Front-End React Developer
          </h1>
          <img
            src="/waving.png"
            alt="waving_hand"
            className="h-14 w-14 absolute top-[4rem] left-[20rem]"
          />
        </div>
        <p className="font-sans text-lg text-[#55555] w-[500px] max-sm:w-4/5">
          Hi, I'm Ramzi Naili. A passionate Front-end React Developer based in
          Paris, France. 📍
        </p>
        <div className="flex gap-4">
          <LinkedinSvg className="hover:cursor-pointer hover:text-sky-500" />
          <GithubSvg className="hover:cursor-pointer hover:text-sky-500" />
        </div>
      </div>
    </div>
  );
};
