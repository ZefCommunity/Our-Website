import {
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaSearch,
} from 'react-icons/fa';

const ICONS = {
  briefcase: FaBriefcase,
  graduation: FaGraduationCap,
  search: FaSearch,
  map: FaMapMarkerAlt,
};

function FeatureCard({ item, index }) {
  const Icon = ICONS[item.icon] ?? FaBriefcase;

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 opacity-0 animate-fade-in-up sm:p-8"
      style={{
        animationDelay: `${0.1 + index * 0.08}s`,
        animationFillMode: 'forwards',
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-500 via-green-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/10 text-green-500 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-green-500/25">
        <Icon className="text-2xl" aria-hidden />
      </div>

      <h3 className="text-lg font-semibold text-blue-900 sm:text-xl">
        {item.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
        {item.description}
      </p>
    </article>
  );
}

export default FeatureCard;
