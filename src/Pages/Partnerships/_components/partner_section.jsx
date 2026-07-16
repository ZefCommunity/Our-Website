import { useEffect, useState } from 'react';
import PartnerCard from './partner-card';

const ROTATION_MS = 8000;

export default function PartnerSection({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const partner = data[activeIndex];
  const hasMultiplePartners = data.length > 1;

  useEffect(() => {
    if (!hasMultiplePartners) return;

    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, ROTATION_MS);

    return () => clearInterval(intervalId);
  }, [data.length, activeIndex, hasMultiplePartners]);

  if (!partner) return null;

  return (
    <div className="mx-auto lg:max-w-4xl">
      <div aria-live="polite" aria-atomic="true">
        <PartnerCard
          key={partner.id}
          name={partner.name}
          description={partner.description}
          logo={partner.logo}
          href={partner.link}
          category={partner.category}
          logoClassName={partner.logoClassName}
          logoPanelClassName={partner.logoPanelClassName}
          className="opacity-0 animate-fade-in-up"
        />
      </div>

      {hasMultiplePartners ? (
        <div className="mt-6 flex flex-col items-center gap-3">
          <p className="sr-only">
            Partner {activeIndex + 1} of {data.length}
          </p>
          <div
            className="flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Browse partners"
          >
            {data.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show ${item.name}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 ${
                    isActive
                      ? 'w-8 bg-green-600'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
