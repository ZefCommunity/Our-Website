import { cn } from '@/lib/utils';
import { SECTION_CONTAINER, SECTION_PY, SECTION_SCROLL_MARGIN } from './sectionUi';

export function SectionShell({
  children,
  className = '',
  containerClassName = '',
  id,
  ariaLabelledby,
  as: Tag = 'section',
  noPadding = false,
  belowFold = false,
}) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`${noPadding ? '' : SECTION_PY} ${id ? SECTION_SCROLL_MARGIN : ''} ${belowFold ? 'content-visibility-section' : ''} ${className}`.trim()}
    >
      <div className={cn(SECTION_CONTAINER, containerClassName)}>
        {children}
      </div>
    </Tag>
  );
}
