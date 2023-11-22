/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  menu: [
    'index',
    {
      type: 'category',
      label: '🚀 Organization',
      items: [
        'organization/vision-and-mission',
        // 'organization/careers-path',
        'organization/people',
        'organization/tech-radar',
      ],
      link: {
        type: 'generated-index',
        title: 'Organization',
        slug: '/organization',
        keywords: ['guides'],
      },
    },
    {
      type: 'category',
      label: '⭐ Teams',
      items: [
        'teams/data-team',
        'teams/devops-engineering-team'
      ],
      link: {
        type: 'generated-index',
        title: 'Teams',
        slug: '/teams',
        keywords: ['guides'],
      },
    }
  ],
};

module.exports = sidebars;
