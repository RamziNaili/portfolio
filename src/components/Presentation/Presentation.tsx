import { FC } from 'react';
import GithubSvg from '@/assets/github.svg?react';
import LinkedinSvg from '@/assets/linkedin.svg?react';

export const Presentation: FC = () => {
  return (
    <div className="flex justify-center gap-20  mt-16 md:flex-row-reverse">
      <img
        src="/ranaili.jpg"
        alt="profile"
        className="border-2 border-[#2d2e32] rounded-full h-96 w-96 "
      />
      <div className="flex flex-col gap-6 relative ">
        <div className="flex items-center ">
          <h1 className="font-black text-6xl text-[#2d2e32] font-poppins w-[500px] relative mt-16">
            Front-End React Developer
          </h1>
          <img
            src="/waving.png"
            alt="waving_hand"
            className="h-14 w-14 absolute top-[8rem]  left-[20rem]"
          />
        </div>
        <p className="font-sans text-lg text-[#55555] w-[500px]">
          Hi, I'm Ramzi Naili. A passionate Front-end React Developer based in
          Paris, France. 📍
        </p>
        <div className="flex gap-4">
          <LinkedinSvg className="hover:cursor-pointer hover:text-sky-600" />
          <GithubSvg className="hover:cursor-pointer hover:text-sky-600" />
        </div>
      </div>
    </div>
  );
};
