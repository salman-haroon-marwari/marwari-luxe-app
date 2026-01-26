const fs = require('fs');

let content = fs.readFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', 'utf8');

// Exchange rate: 1 USD = 83 INR (approximate)
const exchangeRate = 83;

// Function to convert rupee amount to dollars
function convertRupeesToDollars(rupeeAmount) {
  // Remove commas and extract numeric value
  const numericValue = parseInt(rupeeAmount.replace(/,/g, ''));
  // Convert to dollars and round to nearest whole number
  const dollarAmount = Math.round(numericValue / exchangeRate);
  return `$${dollarAmount}`;
}

// Function to convert rupee range to dollar range
function convertRupeeRangeToDollarRange(rupeeRange) {
  // Handle ranges like "2,000–5,000" or "40,000–1,50,000"
  const parts = rupeeRange.split('–');
  if (parts.length === 2) {
    const minRupees = parts[0].trim().replace(/[^0-9]/g, '');
    const maxRupees = parts[1].trim().replace(/[^0-9]/g, '');
    
    if (minRupees && maxRupees) {
      const minDollars = Math.round(parseInt(minRupees) / exchangeRate);
      const maxDollars = Math.round(parseInt(maxRupees) / exchangeRate);
      return `$${minDollars}–$${maxDollars}`;
    }
  }
  return rupeeRange; // Return original if conversion fails
}

// Price conversions to apply
const priceConversions = [
  // Individual prices
  { rupee: '₹4,500', dollar: '$54' },
  { rupee: '₹8,000', dollar: '$96' },
  { rupee: '₹25,000', dollar: '$301' },
  { rupee: '₹33,000', dollar: '$398' },
  { rupee: '₹20,000', dollar: '$241' },
  { rupee: '₹18,000', dollar: '$217' },
  { rupee: '₹80,000', dollar: '$964' },
  { rupee: '₹3,000', dollar: '$36' },
  { rupee: '₹1,20,000', dollar: '$1,446' },
  { rupee: '₹85,000', dollar: '$1,024' },
  { rupee: '₹65,000', dollar: '$783' },
  { rupee: '₹1,40,000', dollar: '$1,687' },
  { rupee: '₹45,000', dollar: '$542' },
  
  // Price ranges
  { rupee: '₹2,000–5,000', dollar: '$24–$60' },
  { rupee: '₹5,000', dollar: '$60' }, // one-time
  { rupee: '₹40,000–1,50,000', dollar: '$482–$1,807' },
  
  // Monthly prices (keep "per month" or "/month" designation)
  { rupee: '~₹25,000/month', dollar: '~$301/month' },
  { rupee: '~₹33,000/month', dollar: '~$398/month' },
  { rupee: '~₹20,000/month', dollar: '~$241/month' },
  { rupee: '~₹18,000/month', dollar: '~$217/month' }
];

// Apply all conversions
priceConversions.forEach(conversion => {
  const regex = new RegExp(conversion.rupee.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  content = content.replace(regex, conversion.dollar);
});

// Write back to the file
fs.writeFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', content);

console.log('All prices have been converted from rupees to dollars!');
console.log(`Converted ${priceConversions.length} price references.`);