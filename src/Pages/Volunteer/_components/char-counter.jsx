import { useWatch } from "react-hook-form";

export default function CharCounter({ control }) {
  const chars = useWatch({ control, name: "motivation" });

  return <div className="w-full text-right">{chars.length}/1000</div>;
}
