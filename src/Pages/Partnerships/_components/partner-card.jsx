import React from "react";

export default function PartnerCard({ logo, description, name, href }) {
  return (
    <ul className="flex justify-center items-center gap-10  flex-row border rounded-xl p-4">
      <li className="w-72">
        <a href={href} target="blank">
          <img src={logo} alt={name} className="!w-40" />
        </a>
      </li>
      <div className="text-start flex flex-col gap-3">
        <li className="font-semibold px-3 text-start">{name}</li>
        <li className="text-sm text-start px-3">{description}</li>
      </div>
    </ul>
  );
}
