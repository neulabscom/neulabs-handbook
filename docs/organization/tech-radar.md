---
id: tech-radar
title: Neulabs Tech Radar
---

import TechRadar from '@site/src/components/tech/TechRadar';

export const quadrants = [
  {
    quadrant: 0,
    name: "Languages & Frameworks",
    entries: [
      { ring: 0, label: "TypeScript", active: true, moved: 0 },
      { ring: 0, label: "Python", active: true, moved: 0 },
      { ring: 0, label: "GraphQL", active: true, moved: 0 },
      { ring: 0, label: "JavaScript", active: true, moved: 0 },
      { ring: 0, label: "SQL", active: true, moved: 0 },
      { ring: 0, label: "bash", active: true, moved: 0 },
      { ring: 0, label: "Next.js", active: true, moved: 0 },
      { ring: 0, label: "Node.js", active: true, moved: 0 },
    ],
  },
  {
    quadrant: 1,
    name: "Platforms & Infrastructure",
    entries: [
      { ring: 0, label: "Docker", active: true, moved: 0 },
      { ring: 1, label: "Google Cloud Platform", active: true, moved: 0 },
      { ring: 1, label: "Docusaurus", active: true, moved: 0 },
      { ring: 0, label: "Amazon Web Services", active: true, moved: 0 },
    ],
  },
  {
    quadrant: 2,
    name: "Data Management & Storage",
    entries: [
      { ring: 0, label: "dbt", active: true, moved: 0 },
      { ring: 0, label: "Google BigQuery", active: true, moved: 0 },
      { ring: 0, label: "AWS DynamoDB", active: true, moved: 0 },
      { ring: 0, label: "AWS S3", active: true, moved: 0 },
      { ring: 0, label: "AWS SQS", active: true, moved: 0 },
      { ring: 0, label: "Apache Airflow", active: true, moved: 1 },
      { ring: 2, label: "Streamlit", active: true, moved: 0 },
      { ring: 0, label: "MySQL", active: true, moved: 0 },
      { ring: 0, label: "PostgreSQL", active: true, moved: 0 },
    ],
  },
  {
    quadrant: 3,
    name: "Tools",
    entries: [
      { ring: 0, label: "ReTool", active: true, moved: 1 },
      { ring: 0, label: "Supabase", active: true, moved: 1 },
      { ring: 0, label: "AWS CDK", active: true, moved: 0 },
      { ring: 0, label: "GitHub Actions", active: true, moved: 0 },
      { ring: 1, label: "Task", active: true, moved: 0 },
      { ring: 1, label: "NewRelic", active: true, moved: 0 },
      { ring: 0, label: "Nginx", active: true, moved: 0 },
    ],
  },
];


export const entries = quadrants.reduce((acc, quadrant) => {
  // add quadrant number to each entry
  quadrant.entries.forEach(entry => {
    entry.quadrant = quadrant.quadrant
  })
  return acc.concat(quadrant.entries)
}, [])

<TechRadar entries={entries} />