const fs = require('fs');
const path = require('path');

// List of files to update
const files = [
  'c:\\Users\\RS Computers\\Desktop\\marwari-luxe-app\\src\\app\\tools\\health\\calorie-tracker\\page.tsx',
  'c:\\Users\\RS Computers\\Desktop\\marwari-luxe-app\\src\\app\\tools\\health\\water-monitor\\page.tsx',
  'c:\\Users\\RS Computers\\Desktop\\marwari-luxe-app\\src\\app\\tools\\health\\sleep-tracker\\page.tsx',
  'c:\\Users\\RS Computers\\Desktop\\marwari-luxe-app\\src\\app\\tools\\health\\heart-rate\\page.tsx',
  'c:\\Users\\RS Computers\\Desktop\\marwari-luxe-app\\src\\app\\tools\\health\\step-counter\\page.tsx',
  'c:\\Users\\RS Computers\\Desktop\\marwari-luxe-app\\src\\app\\tools\\health\\blood-pressure\\page.tsx',
  'c:\\Users\\RS Computers\\Desktop\\marwari-luxe-app\\src\\app\\tools\\health\\stress-assessment\\page.tsx',
  'c:\\Users\\RS Computers\\Desktop\\marwari-luxe-app\\src\\app\\tools\\health\\medication-reminder\\page.tsx',
  'c:\\Users\\RS Computers\\Desktop\\marwari-luxe-app\\src\\app\\tools\\health\\workout-planner\\page.tsx'
];

// Metadata block to remove
const metadataBlock = `export const metadata = {
  title: 'TITLE_PLACEHOLDER',
  description: 'DESCRIPTION_PLACEHOLDER',
};`;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove metadata export
    content = content.replace(/export const metadata = \{[\s\S]*?\};\n/, '');
    
    // Write back the file
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});

// Also update the template file
const templateFile = 'c:\\Users\\RS Computers\\Desktop\\marwari-luxe-app\\src\\app\\tools\\health\\tool-template.tsx';
if (fs.existsSync(templateFile)) {
  let content = fs.readFileSync(templateFile, 'utf8');
  
  // Remove metadata export
  content = content.replace(/export const metadata = \{[\s\S]*?\};\n/, '');
  
  // Write back the file
  fs.writeFileSync(templateFile, content);
  console.log(`Updated ${templateFile}`);
}