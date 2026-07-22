/** Homepage section anchors for in-page navigation */
export const HOME_SECTIONS = {
  about: 'about-zef',
  programs: 'what-we-do',
  ecosystem: 'ecosystem-support',
  events: 'community-events',
};

export function homeSectionPath(sectionId) {
  return `/#${sectionId}`;
}
