import { FaLaptopCode, FaUsers } from 'react-icons/fa';

const ICONS = {
  laptop: FaLaptopCode,
  users: FaUsers,
};

function PilotProgramCard({ program, index }) {
  const Icon = ICONS[program.icon] ?? FaLaptopCode;

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 opacity-0 animate-fade-in-up sm:p-8 lg:p-10"
      style={{
        animationDelay: `${0.12 + index * 0.12}s`,
        animationFillMode: 'forwards',
      }}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-green-500/5 transition-transform duration-500 group-hover:scale-125"
        aria-hidden
      />

      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-950/5 text-blue-950 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
        <Icon className="text-2xl" aria-hidden />
      </div>

      <h3 className="text-2xl font-semibold text-blue-950">{program.title}</h3>

      <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-green-600">
            For
          </p>
          <p className="mt-1.5">{program.audience}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-green-600">
            What they get
          </p>
          <ul className="mt-2 space-y-2">
            {program.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"
                  aria-hidden
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
            Outcome
          </p>
          <p className="mt-1.5 font-medium text-blue-950">{program.outcome}</p>
        </div>
      </div>
    </article>
  );
}

export default PilotProgramCard;
