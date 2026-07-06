import { FaInfoCircle } from 'react-icons/fa';
import { SectionShell } from '../../../Components/Homepage/shared/SectionShell';
import { COMMUNICATION_POLICY } from '../pilotsContent';

function CommunicationPolicyNotice() {
  const { title, body, warning, officialEmail } = COMMUNICATION_POLICY;

  return (
    <SectionShell
      ariaLabelledby="pilots-communication-policy-title"
      className="border-t border-slate-100 bg-slate-50"
      belowFold
    >
      <aside
        role="note"
        className="mx-auto max-w-4xl rounded-2xl border border-blue-950/15 bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-950/5 text-blue-950"
            aria-hidden
          >
            <FaInfoCircle className="text-xl" />
          </div>

          <div className="text-left">
            <h2
              id="pilots-communication-policy-title"
              className="text-lg font-semibold uppercase tracking-wide text-blue-950 sm:text-xl"
            >
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              {body}
            </p>
            <p className="mt-3">
              <a
                href={`mailto:${officialEmail}`}
                className="break-all text-base font-semibold text-green-600 underline decoration-green-500/40 underline-offset-2 transition-colors hover:text-green-700 sm:text-lg"
              >
                {officialEmail}
              </a>
            </p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
              {warning}
            </p>
          </div>
        </div>
      </aside>
    </SectionShell>
  );
}

export default CommunicationPolicyNotice;
