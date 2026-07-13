import PartnerSection from "./_components/partner_section";
import { VOLUNTEERS_DATA, SUPPORTERS_DATA } from "./data";

/** Partnerships landing route — contact experience with partnership-focused page context */
function Partnerships() {
  return (
    <main className="bg-white flex flex-col justify-center items-center max-sm:mx-4">
      <div className="text-center my-10 md:my-20">
        <span className="text-green-500 text-2xl  font-semibold">
          Our Partners
        </span>
        <h1 className="text-2xl max-w-lg md:text-4xl font-semibold text-blue-950 md:w-[600px] mx-auto mt-10">
          Our Ecosystem & Support Network
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <p className="max-w-lg text-center">
          Zurfte Empowercare Foundation (ZEF) is supported by a growing
          ecosystem of organizations, platforms, and technology providers that
          help us strengthen our operations, connect with skilled volunteers,
          and expand our impact.
        </p>
      </div>
      <PartnerSection
        data={VOLUNTEERS_DATA}
        dir="text-start"
        title="Volunteer & Community Ecosystem"
      />
      <PartnerSection
        data={SUPPORTERS_DATA}
        dir="text-start"
        title="Technology Supporters"
      />
    </main>
  );
}

export default Partnerships;
