import { SectionHeader } from '../../../Components/Homepage/shared/SectionHeader';
import { SectionShell } from '../../../Components/Homepage/shared/SectionShell';
import { SECTION_CONTENT_GAP } from '../../../Components/Homepage/shared/sectionUi';
import { PROMISE_CONTENT } from '../pilotsContent';

function PromiseSection() {
  return (
    <SectionShell ariaLabelledby="pilots-promise-title" className="bg-white">
      <SectionHeader titleId="pilots-promise-title" title={PROMISE_CONTENT.title} />

      <div
        className={`mx-auto max-w-4xl rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-8 shadow-lg shadow-slate-200/50 opacity-0 animate-fade-in-up sm:p-10 lg:p-12 ${SECTION_CONTENT_GAP}`}
        style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
      >
        <p className="text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
          {PROMISE_CONTENT.body}
        </p>
      </div>
    </SectionShell>
  );
}

export default PromiseSection;
