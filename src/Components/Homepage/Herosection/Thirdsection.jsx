import { Link } from 'react-router-dom';
import img2 from '../../../assets/third1.png';
import img1 from '../../../assets/third2.png';
import { ZEF_SHORT, ZEF_TAGLINE } from '../../../config/branding';

const Thirdsection = () => {
  return (
    <div className="my-32 w-[90%] mx-auto">
      <div className="flex flex-col md:flex-row gap-10 justify-between  items-center">
        <div className="md:w-[600px]  flex-col gap-6">
          <div>
            <span className="text-green-500 text-2xl font-semibold">
              About {ZEF_SHORT}
            </span>
            <h2 className="md:text-5xl text-2xl font-semibold text-blue-950 mx-auto mt-10">
              Building Skills, Leadership, and Opportunity
            </h2>
            <p className="py-4 md:py-7">{ZEF_TAGLINE}</p>
            <p className="py-4 md:py-7">
              {/* TODO: Replace with leadership-approved About narrative and impact story */}
              We partner with communities to deliver mentorship, innovation
              programs, and pathways that help young people thrive.
            </p>
          </div>
          <Link
            to="/about"
            className="bg-green-500 w-max py-2 px-5 font-bold rounded-md hover:bg-green-700 text-blue-950"
          >
            Explore Our Programs
          </Link>
        </div>
        <div>
          {/* TODO: Replace with official ZEF team or program imagery */}
          <div className="relative ">
            <img
              src={img1}
              alt=""
              className="hidden md:block md:absolute bottom-0 -left-48"
            />
            <img src={img2} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdsection;

