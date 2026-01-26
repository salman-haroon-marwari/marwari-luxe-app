const fs = require('fs');

let content = fs.readFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', 'utf8');

// List of links that need blue styling added
const linksToFix = [
  {
    original: '<a href="https://journals.lww.com/menopausejournal/fulltext/2023/05000/seed_cycling_for_symptom_relief.5.aspx" target="_blank" rel="noopener">2023 perimenopause study – Journal of Menopause</a>',
    fixed: '<a href="https://journals.lww.com/menopausejournal/fulltext/2023/05000/seed_cycling_for_symptom_relief.5.aspx" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">2023 perimenopause study – Journal of Menopause</a>'
  },
  {
    original: '<a href="https://ods.od.nih.gov/factsheets/Flaxseed-HealthProfessional/" target="_blank" rel="noopener">NIH page on flaxseed and drug interactions</a>',
    fixed: '<a href="https://ods.od.nih.gov/factsheets/Flaxseed-HealthProfessional/" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">NIH page on flaxseed and drug interactions</a>'
  },
  {
    original: '<a href="https://www.fda.gov/medical-devices/in-vitro-diagnostics/continuous-glucose-monitoring-systems" target="_blank" rel="noopener">FDA explanation of interstitial vs blood glucose</a>',
    fixed: '<a href="https://www.fda.gov/medical-devices/in-vitro-diagnostics/continuous-glucose-monitoring-systems" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">FDA explanation of interstitial vs blood glucose</a>'
  },
  {
    original: '<a href="https://bjsm.bmj.com/content/57/18/1196" target="_blank" rel="noopener">2023 meta-analysis on walking after meals and glucose – The BMJ</a>',
    fixed: '<a href="https://bjsm.bmj.com/content/57/18/1196" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">2023 meta-analysis on walking after meals and glucose – The BMJ</a>'
  },
  {
    original: '<a href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/continuous-glucose-monitor/faq-20477493" target="_blank" rel="noopener">Mayo Clinic on appropriate use of CGM in non-diabetics</a>',
    fixed: '<a href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/continuous-glucose-monitor/faq-20477493" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">Mayo Clinic on appropriate use of CGM in non-diabetics</a>'
  },
  {
    original: '<a href="https://ascopubs.org/doi/10.1200/JCO.20.02603" target="_blank" rel="noopener">2021 meta-analysis on MLD for lymphedema – Journal of Clinical Oncology</a>',
    fixed: '<a href="https://ascopubs.org/doi/10.1200/JCO.20.02603" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">2021 meta-analysis on MLD for lymphedema – Journal of Clinical Oncology</a>'
  },
  {
    original: '<a href="https://www.ncbi.nlm.nih.gov/books/NBK534278/" target="_blank" rel="noopener">NIH page on lymphatic system and manual drainage</a>',
    fixed: '<a href="https://www.ncbi.nlm.nih.gov/books/NBK534278/" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">NIH page on lymphatic system and manual drainage</a>'
  },
  {
    original: '<a href="https://www.mayoclinic.org/diseases-conditions/lymphedema/diagnosis-treatment/drc-20374687" target="_blank" rel="noopener">Mayo Clinic on lymphedema self-care</a>',
    fixed: '<a href="https://www.mayoclinic.org/diseases-conditions/lymphedema/diagnosis-treatment/drc-20374687" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">Mayo Clinic on lymphedema self-care</a>'
  },
  {
    original: '<a href="https://med.stanford.edu/news/all-news/2023/06/digital-detox-dopamine.html" target="_blank" rel="noopener">2023 Stanford study on digital detox and dopamine sensitivity</a>',
    fixed: '<a href="https://med.stanford.edu/news/all-news/2023/06/digital-detox-dopamine.html" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">2023 Stanford study on digital detox and dopamine sensitivity</a>'
  },
  {
    original: '<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6556138/" target="_blank" rel="noopener">NIH research on reward sensitivity and abstinence</a>',
    fixed: '<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6556138/" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">NIH research on reward sensitivity and abstinence</a>'
  },
  {
    original: '<a href="https://www.mayoclinic.org/diseases-conditions/compulsive-gambling/symptoms-causes/syc-20355178" target="_blank" rel="noopener">Mayo Clinic on behavioral addictions and reward pathways</a>',
    fixed: '<a href="https://www.mayoclinic.org/diseases-conditions/compulsive-gambling/symptoms-causes/syc-20355178" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">Mayo Clinic on behavioral addictions and reward pathways</a>'
  },
  {
    original: '<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15707" target="_blank" rel="noopener">2023 meta-analysis on RLT for skin rejuvenation – Journal of Cosmetic Dermatology</a>',
    fixed: '<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15707" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">2023 meta-analysis on RLT for skin rejuvenation – Journal of Cosmetic Dermatology</a>'
  },
  {
    original: '<a href="https://www.nasa.gov/centers-and-facilities/marshall/nasa-light-technology-successfully-reduces-cancer-patients-painful-side-effects-from-radiation-and-chemotherapy/" target="_blank" rel="noopener">NASA research on LED wound healing (original RLT studies)</a>',
    fixed: '<a href="https://www.nasa.gov/centers-and-facilities/marshall/nasa-light-technology-successfully-reduces-cancer-patients-painful-side-effects-from-radiation-and-chemotherapy/" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">NASA research on LED wound healing (original RLT studies)</a>'
  },
  {
    original: '<a href="https://www.mayoclinic.org/tests-procedures/red-light-therapy/about/pac-20520493" target="_blank" rel="noopener">Mayo Clinic on light therapy safety</a>',
    fixed: '<a href="https://www.mayoclinic.org/tests-procedures/red-light-therapy/about/pac-20520493" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">Mayo Clinic on light therapy safety</a>'
  }
];

// Apply all fixes
linksToFix.forEach(link => {
  content = content.replace(link.original, link.fixed);
});

// Write back to the file
fs.writeFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', content);

console.log('All links have been fixed and made clickable with blue styling!');
console.log(`Fixed ${linksToFix.length} links.`);