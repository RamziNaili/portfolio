import { FC } from 'react';
import GithubSvg from '@/assets/github.svg?react';
import LinkedinSvg from '@/assets/linkedin.svg?react';

export const Presentation: FC = () => {
  return (
    <div className="flex justify-center gap-20 items-center mt-24">
      <div className="flex flex-col gap-10">
        <div className="flex items-center">
          <h1 className="font-black text-6xl text-[#2d2e32] font-poppins w-80">
            FullStack Developer
          </h1>
          <img src="/waving.png" alt="waving_hand" className="h-14 w-14" />
        </div>
        <p className="font-sans text-lg text-[#55555] w-80">
          Hi, I'm Ramzi Naili. A passionate FullStack Developer based in Paris,
          France. 📍
        </p>
        <div className="flex gap-4">
          <LinkedinSvg />
          <GithubSvg />
        </div>
      </div>

      <img
        src="/ranaili.jpg"
        alt="profile"
        className="border-2 border-[#2d2e32] rounded-full h-64 w-64"
      />
    </div>
  );
};
