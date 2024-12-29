import React from 'react';
import img2 from '../../../assets/third1.png';
import img1 from '../../../assets/third2.png';

const Thirdsection = () => {
  return (
    <div className="my-32 w-[90%] mx-auto">
      <div className="flex flex-col md:flex-row gap-10 justify-between  items-center">
        <div className="md:w-[600px]  flex-col gap-6">
          <div className="">
            <div className="">
              <span className="text-green-500 text-2xl font-semibold">
                About our foundation
              </span>
              <h2 className="md:text-5xl text-2xl font-semibold text-blue-950 mx-auto mt-10">
                We Are In A Mission To Help Helpless
              </h2>
            </div>
            <p className="py-4 md:py-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,mod
              tempor incididunt ut labore et dolore magna aliqua. Utnixm, quis
              nostrud exercitation ullamc.
            </p>
            <p className="py-4 md:py-7">
              Lorem ipvsum dolor sit amext, consectetur adipisicing elit, smod
              tempor incididunt ut labore et dolore.
            </p>
          </div>
          <a
            href="about.html"
            className="bg-green-500 w-max py-2 px-5 font-bold rounded-md hover:bg-green-700 text-blue-950"
          >
            What We Do
          </a>
        </div>
        <div className="">
          <div className="relative ">
            <div className="">
              <img
                src={img1}
                alt=""
                className="hidden md:block md:absolute bottom-0 -left-48"
              />
            </div>
            <div className="">
              <img src={img2} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdsection;
