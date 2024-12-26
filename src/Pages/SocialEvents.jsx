import React from "react";
import { Link } from "react-router-dom";
import { CiClock2, CiCalendarDate, CiLocationOn } from "react-icons/ci";
import heroBg from "../assets/images/backgrounds/hero2.png";
import sectionBg from "../assets/images/social-events/section_bg02.png";
import event1 from "../assets/images/social-events/socialEvents1.png";
import event2 from "../assets/images/social-events/socialEvents2.png";
import event3 from "../assets/images/social-events/socialEvents3.png";

const SocialEvents = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-left"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <h1 className="text-5xl font-bold text-center pt-32 pb-24 tracking-wide text-[#072366]">
          Social Events
        </h1>
      </div>
      <section
        className="w-full bg-cover bg-no-repeat bg-center py-28 md:py-16 md:px-16 bg-scroll grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 gap-y-24 text-white"
        style={{ backgroundImage: `url(${sectionBg})` }}
      >
        <div className="text-center space-y-1">
          <p className="text-4xl font-bold">
            6200
            <span className="text-3xl">+</span>
          </p>
          <p className="text-lg">Donations</p>
        </div>
        <div className="text-center space-y-1">
          <p className="text-4xl font-bold">
            80
            <span className="text-3xl">+</span>
          </p>
          <p className="text-lg">Funds Raised</p>
        </div>
        <div className="text-center space-y-1">
          <p className="text-4xl font-bold">
            256
            <span className="text-3xl">+</span>
          </p>
          <p className="text-lg">Donations</p>
        </div>
        <div className="text-center space-y-1">
          <p className="text-4xl font-bold">
            6200
            <span className="text-3xl">+</span>
          </p>
          <p className="text-lg">Donations</p>
        </div>
      </section>
      <section className="text-left md:text-center py-20 ml-3">
        <h2 className="capitalize text-[#09cc7f] font-bold text-lg">
          What We Are Doing
        </h2>
        <h1 className="capitalize text-[#072366] text-3xl md:text-4xl md:w-[55%] mx-auto font-bold mt-6 md:mt-8 leading-loose">
          We arrange many social events for charity donations
        </h1>
        <ul className="space-y-16 my-12 md:w-8/12 md:mx-auto md:space-y-10">
          <li className="space-y-4 md:flex gap-12 text-left items-center hover:shadow-lg rounded-lg">
            <img src={event1} alt="" />
            <div className="space-y-16 md:space-y-4 md:my-28">
              <Link
                to="#"
                className="inline-block text-[#454d72] text-3xl font-semibold ml-3 md:ml-0 text-left"
              >
                Donation is Hope
              </Link>
              <p className="flex gap-3 md:gap-10 justify-between text-gray-500 mx-3 pr-3 md:mx-0">
                <span className="inline-flex gap-1.5 items-center">
                  <CiClock2 /> 8:30 - 9:30 am
                </span>
                <span className="inline-flex gap-1.5 items-center">
                  <CiCalendarDate /> 18.01.2021
                </span>
                <span className="inline-flex gap-2 items-center">
                  <CiLocationOn /> Athens, Greece
                </span>
              </p>
            </div>
          </li>
          <li className="space-y-4 md:flex gap-12 text-left items-center hover:shadow-lg rounded-lg">
            <img src={event1} alt="" />
            <div className="space-y-16 md:space-y-4 md:my-28">
              <Link
                to="#"
                className="inline-block text-[#454d72] text-3xl font-semibold ml-3 md:ml-0 text-left"
              >
                Donation is Hope
              </Link>
              <p className="flex gap-3 md:gap-10 justify-between text-gray-500 mx-3 pr-3 md:mx-0">
                <span className="inline-flex gap-1.5 items-center">
                  <CiClock2 /> 8:30 - 9:30 am
                </span>
                <span className="inline-flex gap-1.5 items-center">
                  <CiCalendarDate /> 18.01.2021
                </span>
                <span className="inline-flex gap-2 items-center">
                  <CiLocationOn /> Athens, Greece
                </span>
              </p>
            </div>
          </li>{" "}
          <li className="space-y-4 md:flex gap-12 text-left items-center hover:shadow-lg rounded-lg">
            <img src={event1} alt="" />
            <div className="space-y-16 md:space-y-4 md:my-28">
              <Link
                to="#"
                className="inline-block text-[#454d72] text-3xl font-semibold ml-3 md:ml-0 text-left"
              >
                Donation is Hope
              </Link>
              <p className="flex gap-3 md:gap-10 justify-between text-gray-500 mx-3 pr-3 md:mx-0">
                <span className="inline-flex gap-1.5 items-center">
                  <CiClock2 /> 8:30 - 9:30 am
                </span>
                <span className="inline-flex gap-1.5 items-center">
                  <CiCalendarDate /> 18.01.2021
                </span>
                <span className="inline-flex gap-2 items-center">
                  <CiLocationOn /> Athens, Greece
                </span>
              </p>
            </div>
          </li>{" "}
          <li className="space-y-4 md:flex gap-12 text-left items-center hover:shadow-lg rounded-lg">
            <img src={event1} alt="" />
            <div className="space-y-16 md:space-y-4 md:my-28">
              <Link
                to="#"
                className="inline-block text-[#454d72] text-3xl font-semibold ml-3 md:ml-0 text-left"
              >
                Donation is Hope
              </Link>
              <p className="flex gap-3 md:gap-10 justify-between text-gray-500 mx-3 pr-3 md:mx-0">
                <span className="inline-flex gap-1.5 items-center">
                  <CiClock2 /> 8:30 - 9:30 am
                </span>
                <span className="inline-flex gap-1.5 items-center">
                  <CiCalendarDate /> 18.01.2021
                </span>
                <span className="inline-flex gap-2 items-center">
                  <CiLocationOn /> Athens, Greece
                </span>
              </p>
            </div>
          </li>{" "}
          <li className="space-y-4 md:flex gap-12 text-left items-center hover:shadow-lg rounded-lg">
            <img src={event1} alt="" />
            <div className="space-y-16 md:space-y-4 md:my-28">
              <Link
                to="#"
                className="inline-block text-[#454d72] text-3xl font-semibold ml-3 md:ml-0 text-left"
              >
                Donation is Hope
              </Link>
              <p className="flex gap-3 md:gap-10 justify-between text-gray-500 mx-3 pr-3 md:mx-0">
                <span className="inline-flex gap-1.5 items-center">
                  <CiClock2 /> 8:30 - 9:30 am
                </span>
                <span className="inline-flex gap-1.5 items-center">
                  <CiCalendarDate /> 18.01.2021
                </span>
                <span className="inline-flex gap-2 items-center">
                  <CiLocationOn /> Athens, Greece
                </span>
              </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default SocialEvents;
