const fs = require('fs');
const path = require('path');

const tools = [
  {
    dir: 'sleep-tracker',
    title: 'Sleep Quality Tracker',
    description: 'Track your sleep patterns and improve your rest quality.',
    fileName: 'SleepTrackerPage'
  },
  {
    dir: 'heart-rate',
    title: 'Heart Rate Monitor',
    description: 'Track your heart rate and monitor cardiovascular health.',
    fileName: 'HeartRatePage'
  },
  {
    dir: 'step-counter',
    title: 'Step Counter',
    description: 'Count your daily steps and set activity goals.',
    fileName: 'StepCounterPage'
  },
  {
    dir: 'blood-pressure',
    title: 'Blood Pressure Tracker',
    description: 'Monitor your blood pressure readings over time.',
    fileName: 'BloodPressurePage'
  },
  {
    dir: 'stress-assessment',
    title: 'Stress Level Assessment',
    description: 'Assess your stress levels and receive coping recommendations.',
    fileName: 'StressAssessmentPage'
  },
  {
    dir: 'medication-reminder',
    title: 'Medication Reminder',
    description: 'Set reminders for your medications and track adherence.',
    fileName: 'MedicationReminderPage'
  },
  {
    dir: 'workout-planner',
    title: 'Workout Planner',
    description: 'Create personalized workout plans and track your progress.',
    fileName: 'WorkoutPlannerPage'
  }
];

const templateContent = (tool) => `
'use client';

import HealthToolTemplate from '../tool-template';

export const metadata = {
  title: '${tool.title} | Health Tools | Marwari Luxe',
  description: '${tool.description}',
};

export default function ${tool.fileName}() {
  return (
    <HealthToolTemplate
      title="${tool.title}"
      description="${tool.description}"
      toolName="${tool.title}"
    />
  );
}
`;

tools.forEach(tool => {
  const dirPath = path.join(__dirname, '..', 'src', 'app', 'tools', 'health', tool.dir);
  const filePath = path.join(dirPath, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Write the file
  fs.writeFileSync(filePath, templateContent(tool).trim());
  console.log(`Created ${filePath}`);
});