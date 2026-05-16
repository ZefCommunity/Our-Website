import { SECTION_CONTAINER, SECTION_PY, SECTION_SCROLL_MARGIN } from './sectionUi';

export function SectionShell({
  children,
  className = '',
  containerClassName = '',
  id,
  ariaLabelledby,
  as: Tag = 'section',
  noPadding = false,
}) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`${noPadding ? '' : SECTION_PY} ${id ? SECTION_SCROLL_MARGIN : ''} ${className}`.trim()}
    >
      <div className={`${SECTION_CONTAINER} ${containerClassName}`.trim()}>
        {children}
      </div>
    </Tag>
  );
}
