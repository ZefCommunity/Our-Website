import {
  SECTION_BODY,
  SECTION_BODY_ON_DARK,
  SECTION_DESC_GAP,
  SECTION_EYEBROW,
  SECTION_HEADER_GAP,
  SECTION_TITLE,
  SECTION_TITLE_LIGHT,
} from './sectionUi';

export function SectionHeader({
  eyebrow,
  title,
  description,
  titleId,
  align = 'center',
  theme = 'light',
  className = '',
}) {
  const wrap =
    align === 'center'
      ? 'mx-auto max-w-3xl text-center'
      : 'max-w-2xl text-left';

  const titleClass =
    theme === 'dark' ? SECTION_TITLE_LIGHT : SECTION_TITLE;
  const bodyClass =
    theme === 'dark' ? SECTION_BODY_ON_DARK : SECTION_BODY;

  return (
    <header className={`${wrap} ${className}`.trim()}>
      {eyebrow ? <span className={SECTION_EYEBROW}>{eyebrow}</span> : null}
      {title ? (
        <h2 id={titleId} className={`${SECTION_HEADER_GAP} ${titleClass}`}>
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className={`${SECTION_DESC_GAP} ${bodyClass}`}>{description}</p>
      ) : null}
    </header>
  );
}
