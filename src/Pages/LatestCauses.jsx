import { Link } from "react-router-dom";
import Progress from "../Components/ProgressBar";
import heroBg from "../assets/images/backgrounds/hero2.png";
import cause1 from "../assets/images/latest-causes/case1.png";
import cause2 from "../assets/images/latest-causes/case2.png";
import cause3 from "../assets/images/latest-causes/case3.png";

const LatestCauses = () => {
  return (
    <>
      <div className="bg-cover bg-no-repeat bg-left" style={{ backgroundImage: `url(${heroBg})` }}>
        <h1 className="text-5xl font-bold text-center pt-32 pb-24 tracking-wide text-[#072366]">
          Latest Causes
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16 ml-5 mr-12 mt-12 mb-28">
        <div className="">
          <img
            src={cause3}
            alt=""
            className="aspect-square md:aspect-[16/10]"
          />
          <Link
            to={"#"}
            className="text-xs sm:text-sm md:text-base inline-block font-bold text-[#072366] mx-2 md:mx-5 mt-5 md:min-h-12"
          >
            Supply Drinking Water For The People
          </Link>
          <div className="mx-2 mt-3">
            <Progress completed={50} />
          </div>
          <div className="flex justify-between mt-3 text-[#072366] text-xs md:text-sm mx-1 md:mx-3">
            <p>
              Raised: <span className="font-semibold">$20,000</span>
            </p>
            <p>
              Goal: <span className="font-semibold">$35,000</span>
            </p>
          </div>
        </div>
        <div className="">
          <img
            src={cause3}
            alt=""
            className="aspect-square md:aspect-[16/10]"
          />
          <Link
            to={"#"}
            className="text-xs sm:text-sm md:text-base inline-block font-bold text-[#072366] mx-2 md:mx-5 mt-5 md:min-h-12"
          >
            Supply Drinking Water For The People
          </Link>
          <div className="mx-2 mt-3">
            <Progress completed={50} />
          </div>
          <div className="flex justify-between mt-3 text-[#072366] text-xs md:text-sm mx-1 md:mx-3">
            <p>
              Raised: <span className="font-semibold">$20,000</span>
            </p>
            <p>
              Goal: <span className="font-semibold">$35,000</span>
            </p>
          </div>
        </div>{" "}
        <div className="">
          <img
            src={cause3}
            alt=""
            className="aspect-square md:aspect-[16/10]"
          />
          <Link
            to={"#"}
            className="text-xs sm:text-sm md:text-base inline-block font-bold text-[#072366] mx-2 md:mx-5 mt-5 md:min-h-12"
          >
            Supply Drinking Water For The People
          </Link>
          <div className="mx-2 mt-3">
            <Progress completed={50} />
          </div>
          <div className="flex justify-between mt-3 text-[#072366] text-xs md:text-sm mx-1 md:mx-3">
            <p>
              Raised: <span className="font-semibold">$20,000</span>
            </p>
            <p>
              Goal: <span className="font-semibold">$35,000</span>
            </p>
          </div>
        </div>{" "}
        <div className="">
          <img
            src={cause3}
            alt=""
            className="aspect-square md:aspect-[16/10]"
          />
          <Link
            to={"#"}
            className="text-xs sm:text-sm md:text-base inline-block font-bold text-[#072366] mx-2 md:mx-5 mt-5 md:min-h-12"
          >
            Supply Drinking Water For The People
          </Link>
          <div className="mx-2 mt-3">
            <Progress completed={50} />
          </div>
          <div className="flex justify-between mt-3 text-[#072366] text-xs md:text-sm mx-1 md:mx-3">
            <p>
              Raised: <span className="font-semibold">$20,000</span>
            </p>
            <p>
              Goal: <span className="font-semibold">$35,000</span>
            </p>
          </div>
        </div>{" "}
        <div className="">
          <img
            src={cause3}
            alt=""
            className="aspect-square md:aspect-[16/10]"
          />
          <Link
            to={"#"}
            className="text-xs sm:text-sm md:text-base inline-block font-bold text-[#072366] mx-2 md:mx-5 mt-5 md:min-h-12"
          >
            Supply Drinking Water For The People
          </Link>
          <div className="mx-2 mt-3">
            <Progress completed={50} />
          </div>
          <div className="flex justify-between mt-3 text-[#072366] text-xs md:text-sm mx-1 md:mx-3">
            <p>
              Raised: <span className="font-semibold">$20,000</span>
            </p>
            <p>
              Goal: <span className="font-semibold">$35,000</span>
            </p>
          </div>
        </div>{" "}
        <div className="">
          <img
            src={cause3}
            alt=""
            className="aspect-square md:aspect-[16/10]"
          />
          <Link
            to={"#"}
            className="text-xs sm:text-sm md:text-base inline-block font-bold text-[#072366] mx-2 md:mx-5 mt-5 md:min-h-12"
          >
            Supply Drinking Water For The People
          </Link>
          <div className="mx-2 mt-3">
            <Progress completed={50} />
          </div>
          <div className="flex justify-between mt-3 text-[#072366] text-xs md:text-sm mx-1 md:mx-3">
            <p>
              Raised: <span className="font-semibold">$20,000</span>
            </p>
            <p>
              Goal: <span className="font-semibold">$35,000</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestCauses;
