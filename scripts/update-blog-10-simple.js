const fs = require('fs');
const path = require('path');

// Read the blog-prompt.txt file
const promptFilePath = path.join(__dirname, '..', 'public', 'blog-prompt.txt');
const content = fs.readFileSync(promptFilePath, 'utf8');
const lines = content.split('\n');

// Process the content from lines 1-172 (array indices 0-171)
let processedContent = '';
let keyTakeaways = [];
let tableOfContents = [];
let faqs = [];
let currentFAQ = null;

for (let i = 0; i < Math.min(172, lines.length); i++) {
  let line = lines[i].trim();
  
  if (line.startsWith('Key Takeaways')) {
    processedContent += '<!-- Key Takeaways Section -->\n<section id="key-takeaways">\n<h2 style="font-size: 1.5em;"><strong>Key Takeaways</strong></h2><br>\n<ul style="list-style-type: disc; margin: 10px 0; padding-left: 20px;">\n';
    i++; // Move to next line
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().startsWith('Table of Contents')) {
      const takeaway = lines[i].trim();
      if (takeaway) {
        keyTakeaways.push(takeaway);
        processedContent += `  <li style="margin-bottom: 8px;">${takeaway}</li>\n`;
      }
      i++;
    }
    processedContent += '</ul>\n</section>\n<br/>\n';
    i--; // Adjust for the outer loop increment
  } else if (line.startsWith('Table of Contents')) {
    processedContent += '<!-- Table of Contents Section -->\n<section id="table-of-contents">\n<h2 style="font-size: 1.5em;"><strong>Table of Contents</strong></h2><br>\n<ul style="list-style-type: disc; margin: 10px 0; padding-left: 20px;">\n';
    i++; // Move to next line
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().includes('The Day I Discovered 20 Minutes Could Beat 2 Hours in the Gym')) {
      const tocItem = lines[i].trim();
      if (tocItem && !tocItem.startsWith('Link') && !tocItem.includes('[IMAGE')) {
        tableOfContents.push({
          id: tocItem.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-'),
          title: tocItem,
          level: "H2"
        });
        processedContent += `  <li style="margin-bottom: 8px;"><a href="#${tocItem.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}" style="color: blue; text-decoration: underline;">${tocItem}</a></li>\n`;
      }
      i++;
    }
    processedContent += '</ul>\n</section>\n<br/>\n';
    i--; // Adjust for the outer loop increment
  } else if (line.includes('The Day I Discovered 20 Minutes Could Beat 2 Hours in the Gym')) {
    processedContent += `<!-- The Day I Discovered Section -->\n<section id="the-day-i-discovered-20-minutes-could-beat-2-hours-in-the-gym">\n<h2 style="font-size: 1.5em;"><strong>The Day I Discovered 20 Minutes Could Beat 2 Hours in the Gym</strong></h2><br>\n`;
    i++; // Move to next line
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().includes('What High-Intensity Interval Training Actually Is')) {
      const paragraph = lines[i].trim();
      if (paragraph && !paragraph.includes('Link') && !paragraph.includes('[IMAGE')) {
        processedContent += `<p>${paragraph}</p>\n`;
      } else if (paragraph.includes('Link')) {
        // Handle external links
        const linkMatch = paragraph.match(/Link \d+: (https?:\/\/[^\s\(]+) \(([^)]+)\)/);
        if (linkMatch) {
          const url = linkMatch[1];
          const desc = linkMatch[2];
          processedContent += `<p>External link: <a href="${url}" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">${desc}</a></p>\n`;
        }
      }
      i++;
    }
    processedContent += '</section>\n<br/>\n';
    i--; // Adjust for the outer loop increment
  } else if (line.includes('What High-Intensity Interval Training Actually Is')) {
    processedContent += `<!-- What High-Intensity Interval Training Actually Is Section -->\n<section id="what-high-intensity-interval-training-actually-is-and-isnt">\n<h2 style="font-size: 1.5em;"><strong>What High-Intensity Interval Training Actually Is (And Isn't)</strong></h2><br>\n`;
    i++; // Move to next line
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().includes('The Science: Why HIIT Burns Fat Long After You Stop')) {
      const paragraph = lines[i].trim();
      if (paragraph && !paragraph.includes('Link') && !paragraph.includes('[IMAGE')) {
        if (paragraph.startsWith('Typical structure:') || paragraph === 'It is NOT:' || paragraph.startsWith('20–60 seconds') || paragraph.startsWith('10–120 seconds') || paragraph.startsWith('Total session')) {
          processedContent += `<p>${paragraph}</p>\n`;
        } else if (paragraph.startsWith('20–60 seconds') || paragraph.startsWith('10–120 seconds') || paragraph.startsWith('Total session')) {
          processedContent += `<p>${paragraph}</p>\n`;
        } else {
          processedContent += `<p>${paragraph}</p>\n`;
        }
      } else if (paragraph.includes('Link')) {
        // Handle external links
        const linkMatch = paragraph.match(/Link \d+: (https?:\/\/[^\s\(]+) \(([^)]+)\)/);
        if (linkMatch) {
          const url = linkMatch[1];
          const desc = linkMatch[2];
          processedContent += `<p>External link: <a href="${url}" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">${desc}</a></p>\n`;
        }
      }
      i++;
    }
    processedContent += '</section>\n<br/>\n';
    i--; // Adjust for the outer loop increment
  } else if (line.includes('The Science: Why HIIT Burns Fat Long After You Stop')) {
    processedContent += `<!-- The Science Section -->\n<section id="the-science-why-hiit-burns-fat-long-after-you-stop">\n<h2 style="font-size: 1.5em;"><strong>The Science: Why HIIT Burns Fat Long After You Stop</strong></h2><br>\n`;
    i++; // Move to next line
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().includes('HIIT Benefits That Changed How I Train Forever')) {
      const paragraph = lines[i].trim();
      if (paragraph && !paragraph.includes('Link') && !paragraph.includes('[IMAGE')) {
        processedContent += `<p>${paragraph}</p>\n`;
      } else if (paragraph.includes('Link')) {
        // Handle external links
        const linkMatch = paragraph.match(/Link \d+: (https?:\/\/[^\s\(]+) \(([^)]+)\)/);
        if (linkMatch) {
          const url = linkMatch[1];
          const desc = linkMatch[2];
          processedContent += `<p>External link: <a href="${url}" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">${desc}</a></p>\n`;
        }
      }
      i++;
    }
    processedContent += '</section>\n<br/>\n';
    i--; // Adjust for the outer loop increment
  } else if (line.includes('HIIT Benefits That Changed How I Train Forever')) {
    processedContent += `<!-- HIIT Benefits Section -->\n<section id="hiit-benefits-that-changed-how-i-train-forever">\n<h2 style="font-size: 1.5em;"><strong>HIIT Benefits That Changed How I Train Forever</strong></h2><br>\n`;
    // Skip the header row and find the table data
    i++; // Move to next line
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().includes('HIIT vs Traditional Cardio')) {
      const paragraph = lines[i].trim();
      if (paragraph.includes('Benefit') && lines[i+1]?.trim().includes('Traditional Cardio')) {
        // Process table
        processedContent += '<table style="width: 100%; border-collapse: collapse; margin: 24px 0;">\n<thead>\n<tr style="background-color: #f8f9fa;">\n<th style="border: 1px solid #dee2e6; padding: 12px 16px; text-align: left; font-weight: 600;">Benefit</th>\n<th style="border: 1px solid #dee2e6; padding: 12px 16px; text-align: left; font-weight: 600;">Traditional Cardio</th>\n<th style="border: 1px solid #dee2e6; padding: 12px 16px; text-align: left; font-weight: 600;">HIIT (Same Time)</th>\n<th style="border: 1px solid #dee2e6; padding: 12px 16px; text-align: left; font-weight: 600;">Winner</th>\n</tr>\n</thead>\n<tbody>\n';
        
        // Skip header line and process rows
        i += 2; // Skip to first data row
        while (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().includes('HIIT vs Traditional Cardio')) {
          const rowText = lines[i].trim();
          if (rowText.startsWith('Benefit') || rowText.includes('Traditional Cardio')) {
            // Skip header rows
            i++;
            continue;
          }
          
          if (rowText.includes('vs')) {
            // End of table, break to process next section
            break;
          }
          
          // Process each row
          if (rowText.includes('Good') || rowText.includes('Poor') || rowText.includes('Excellent') || rowText.includes('45–60 min') || rowText.includes('20–30 min') || rowText.includes('Minimal') || rowText.includes('24–48 hours') || rowText.includes('Low impact') || rowText.includes('High impact') || rowText.includes('Tie')) {
            const parts = rowText.split('\t');
            if (parts.length >= 4) {
              processedContent += `<tr>
<td style="border: 1px solid #dee2e6; padding: 12px 16px;">${parts[0]}</td>
<td style="border: 1px solid #dee2e6; padding: 12px 16px;">${parts[1]}</td>
<td style="border: 1px solid #dee2e6; padding: 12px 16px;">${parts[2]}</td>
<td style="border: 1px solid #dee2e6; padding: 12px 16px;">${parts[3]}</td>
</tr>
`;
            }
          }
          i++;
        }
        processedContent += '</tbody>\n</table>\n';
        continue; // Continue the outer loop without incrementing i again
      }
      i++;
    }
    processedContent += '</section>\n<br/>\n';
    i--; // Adjust for the outer loop increment
  } else if (line.includes('HIIT vs Traditional Cardio')) {
    processedContent += `<!-- HIIT vs Traditional Cardio Section -->\n<section id="hiit-vs-traditional-cardio-the-real-numbers">\n<h2 style="font-size: 1.5em;"><strong>HIIT vs Traditional Cardio: The Real Numbers</strong></h2><br>\n`;
    i++; // Move to next line
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().includes('Who Should (and Shouldn’t) Do HIIT Workouts')) {
      const paragraph = lines[i].trim();
      if (paragraph && !paragraph.includes('Link') && !paragraph.includes('[IMAGE')) {
        processedContent += `<p>${paragraph}</p>\n`;
      } else if (paragraph.includes('Link')) {
        // Handle external links
        const linkMatch = paragraph.match(/Link \d+: (https?:\/\/[^\s\(]+) \(([^)]+)\)/);
        if (linkMatch) {
          const url = linkMatch[1];
          const desc = linkMatch[2];
          processedContent += `<p>External link: <a href="${url}" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">${desc}</a></p>\n`;
        }
      }
      i++;
    }
    processedContent += '</section>\n<br/>\n';
    i--; // Adjust for the outer loop increment
  } else if (line.includes('Who Should (and Shouldn’t) Do HIIT Workouts')) {
    processedContent += `<!-- Who Should Do HIIT Section -->\n<section id="who-should-and-shouldnt-do-hiit-workouts">\n<h2 style="font-size: 1.5em;"><strong>Who Should (and Shouldn't) Do HIIT Workouts</strong></h2><br>\n`;
    i++; // Move to next line
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().includes('My Exact 2025 HIIT Protocol')) {
      const paragraph = lines[i].trim();
      if (paragraph && !paragraph.includes('Link') && !paragraph.includes('[IMAGE')) {
        if (paragraph.includes('Perfect for:') || paragraph.includes('Avoid or modify if:')) {
          processedContent += `<p><strong>${paragraph}</strong></p>\n<ul style="list-style-type: disc; margin: 10px 0; padding-left: 20px;">\n`;
          i++; // Move to list items
          while (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().includes('My Exact 2025 HIIT Protocol')) {
            const listItem = lines[i].trim();
            if (listItem.startsWith('•') || listItem.match(/^\d+\./)) {
              processedContent += `<li style="margin-bottom: 8px;">${listItem.substring(listItem.indexOf(listItem.trim()[0]))}</li>\n`;
            } else if (!listItem.includes('Perfect for:') && !listItem.includes('Avoid or modify if:')) {
              break; // End of list
            }
            i++;
          }
          processedContent += '</ul>\n';
          i--; // Adjust for outer loop increment
        } else {
          processedContent += `<p>${paragraph}</p>\n`;
        }
      } else if (paragraph.includes('Link')) {
        // Handle external links
        const linkMatch = paragraph.match(/Link \d+: (https?:\/\/[^\s\(]+) \(([^)]+)\)/);
        if (linkMatch) {
          const url = linkMatch[1];
          const desc = linkMatch[2];
          processedContent += `<p>External link: <a href="${url}" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">${desc}</a></p>\n`;
        }
      }
      i++;
    }
    processedContent += '</section>\n<br/>\n';
    i--; // Adjust for the outer loop increment
  } else if (line.includes('My Exact 2025 HIIT Protocol')) {
    processedContent += `<!-- My Exact 2025 HIIT Protocol Section -->
<section id="my-exact-2025-hiit-protocol-for-beginners-to-advanced">
<h2 style="font-size: 1.5em;"><strong>My Exact 2025 HIIT Protocol for Beginners to Advanced</strong></h2><br>
<p>(Full 12-week progression with specific workouts)</p>
</section>
<br/>
`;
  } else if (line.includes('20-Minute HIIT Workouts You Can Do Anywhere')) {
    processedContent += `<!-- 20-Minute HIIT Workouts Section -->
<section id="20-minute-hiit-workouts-you-can-do-anywhere">
<h2 style="font-size: 1.5em;"><strong>20-Minute HIIT Workouts You Can Do Anywhere</strong></h2><br>
<p>(5 complete routines with timers)</p>
`;
    // Check if there's an image reference
    if (lines[i+1]?.includes('[IMAGE 3')) {
      processedContent += '<figure>\n<img src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="20 minute HIIT workout at home no equipment 2025" loading="lazy" />\n<figcaption>20 minute HIIT workout at home no equipment 2025</figcaption>\n</figure>\n';
      i++; // Skip the image line
    }
    processedContent += '</section>\n<br/>\n';
  } else if (line.includes('Common Mistakes That Kill Results')) {
    processedContent += `<!-- Common Mistakes Section -->
<section id="common-mistakes-that-kill-results-and-how-to-avoid-them">
<h2 style="font-size: 1.5em;"><strong>Common Mistakes That Kill Results (And How to Avoid Them)</strong></h2><br>
<ul style="list-style-type: disc; margin: 10px 0; padding-left: 20px;">
`;
    i++; // Move to next line
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().includes('Before and After Stories')) {
      const paragraph = lines[i].trim();
      if (paragraph.startsWith('•') || paragraph.startsWith('Going too hard') || paragraph.startsWith('No proper') || paragraph.startsWith('Daily HIIT') || paragraph.startsWith('Poor form') || paragraph.startsWith('No progression')) {
        processedContent += `<li style="margin-bottom: 8px;">${paragraph.replace(/^•\s*/, '')}</li>\n`;
      }
      i++;
    }
    processedContent += '</ul>\n</section>\n<br/>\n';
    i--; // Adjust for the outer loop increment
  } else if (line.includes('Before and After Stories')) {
    processedContent += `<!-- Before and After Stories Section -->
<section id="before-and-after-stories-from-real-clients">
<h2 style="font-size: 1.5em;"><strong>Before and After Stories From Real Clients</strong></h2><br>
<p>(Detailed transformations with photos and stats)</p>
`;
    i++; // Move to next line
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().startsWith('FAQ')) {
      const paragraph = lines[i].trim();
      if (paragraph && !paragraph.includes('Link') && !paragraph.includes('[IMAGE')) {
        processedContent += `<p>${paragraph}</p>\n`;
      } else if (paragraph.includes('Link')) {
        // Handle external links
        const linkMatch = paragraph.match(/Link \d+: (https?:\/\/[^\s\(]+) \(([^)]+)\)/);
        if (linkMatch) {
          const url = linkMatch[1];
          const desc = linkMatch[2];
          processedContent += `<p>External link: <a href="${url}" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">${desc}</a></p>\n`;
        }
      }
      i++;
    }
    processedContent += '</section>\n<br/>\n';
    i--; // Adjust for the outer loop increment
  } else if (line.startsWith('FAQ')) {
    processedContent += `<!-- FAQ Section -->\n<section id="faq-your-top-questions-answered">\n<h2 style="font-size: 1.5em;"><strong>FAQ – Your Top Questions Answered</strong></h2><br>\n`;
    i++; // Move to next line
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().includes('Conclusion')) {
      const paragraph = lines[i].trim();
      if (paragraph.startsWith('Q:')) {
        const qMatch = paragraph.match(/Q:\s*(.*?)\s*A:/);
        const aMatch = lines[i+1]?.trim().match(/A:\s*(.*)/);
        if (qMatch && aMatch) {
          const question = qMatch[1].trim();
          const answer = aMatch[1].trim();
          faqs.push({ question, answer });
          processedContent += `<h3 style="font-size: 1.2em;"><strong>Q: ${question}</strong></h3><br>\n<p>A: ${answer}</p>\n<br>\n`;
          i++; // Skip the answer line
        }
      }
      i++;
    }
    processedContent += '</section>\n<br/>\n';
    i--; // Adjust for the outer loop increment
  } else if (line.includes('Conclusion')) {
    processedContent += `<!-- Conclusion Section -->\n<section id="conclusion">\n<h2 style="font-size: 1.5em;"><strong>Conclusion</strong></h2><br>\n`;
    i++; // Move to next line
    while (i < lines.length && lines[i].trim() !== '' && i < 171) { // Stay within the 172 lines
      const paragraph = lines[i].trim();
      if (paragraph && !paragraph.includes('Link') && !paragraph.includes('[IMAGE')) {
        processedContent += `<p>${paragraph}</p>\n`;
      }
      i++;
    }
    processedContent += '</section>\n<br/>\n';
    // Add any final images if they exist in the remaining lines
    while (i < Math.min(172, lines.length)) {
      const paragraph = lines[i].trim();
      if (paragraph.includes('[IMAGE 1')) {
        processedContent += '<figure>\n<img src="https://images.unsplash.com/photo-1599447743651-421f36d8a87c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="20 minute HIIT workout at home 2025" loading="lazy" />\n<figcaption>20 minute HIIT workout at home 2025</figcaption>\n</figure>\n';
      } else if (paragraph.includes('[IMAGE 2')) {
        processedContent += '<figure>\n<img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="HIIT afterburn effect vs steady state cardio" loading="lazy" />\n<figcaption>HIIT afterburn effect vs steady state cardio</figcaption>\n</figure>\n';
      } else if (paragraph.includes('[IMAGE 4')) {
        processedContent += '<figure>\n<img src="https://images.unsplash.com/photo-1581009137025-6b4f06c4e6e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="HIIT workout results before and after 12 weeks" loading="lazy" />\n<figcaption>HIIT workout results before and after 12 weeks</figcaption>\n</figure>\n';
      }
      i++;
    }
    processedContent += '</div>';
    break; // End processing since we reached conclusion
  } else if (line.includes('Advanced 30-Minute HIIT Protocols') || line.includes('Nutrition and Recovery Strategies')) {
    // Skip these sections as they're beyond the main content we want to include
    continue;
  }
}

// Read the blogs.ts file
const blogsFilePath = path.join(__dirname, '..', 'src', 'data', 'blogs.ts');
let blogsContent = fs.readFileSync(blogsFilePath, 'utf8');

// Find blog-10 and replace its content
const blogStartMarker = 'id: "blog-10",';
const blogEndMarker = '},';

// Find the start index of blog-10
const blogStartIndex = blogsContent.indexOf(blogStartMarker);
if (blogStartIndex === -1) {
  console.error('Blog-10 not found in blogs.ts');
  process.exit(1);
}

// Find the end of blog-10 by finding the matching closing brace
let openBracesCount = 0;
let currentIndex = blogStartIndex;
let blogEndIndex = -1;

while (currentIndex < blogsContent.length) {
  const char = blogsContent[currentIndex];
  if (char === '{') {
    openBracesCount++;
  } else if (char === '}') {
    openBracesCount--;
    if (openBracesCount === 0) {
      blogEndIndex = currentIndex + 1; // Include the closing brace
      break;
    }
  }
  currentIndex++;
}

if (blogEndIndex === -1) {
  console.error('Could not find the end of blog-10');
  process.exit(1);
}

// Extract the content before and after blog-10
const beforeBlog = blogsContent.substring(0, blogStartIndex);
const afterBlog = blogsContent.substring(blogEndIndex);

// Extract the current blog-10 content to keep some of the structure
const currentBlogContent = blogsContent.substring(blogStartIndex, blogEndIndex);

// Extract the static parts of the blog (title, slug, etc.)
const titleMatch = currentBlogContent.match(/title: "(.*?)",/);
const urlSlugMatch = currentBlogContent.match(/urlSlug: "(.*?)",/);
const excerptMatch = currentBlogContent.match(/excerpt: "(.*?)",/);
const categoryMatch = currentBlogContent.match(/category: "(.*?)",/);
const tagsMatch = currentBlogContent.match(/tags: \[(.*?)\],/);
const metaTitleMatch = currentBlogContent.match(/metaTitle: "(.*?)",/);
const metaDescriptionMatch = currentBlogContent.match(/metaDescription: "(.*?)",/);
const authorMatch = currentBlogContent.match(/author: "(.*?)",/);
const dateMatch = currentBlogContent.match(/date: "(.*?)",/);
const readTimeMatch = currentBlogContent.match(/readTime: "(.*?)",/);
const viewsMatch = currentBlogContent.match(/views: "(.*?)",/);
const imageMatch = currentBlogContent.match(/image: "(.*?)",/);

// Construct the new blog-10 with updated content
const newBlog10 = `{
    id: "blog-10",
    title: "${titleMatch ? titleMatch[1] : 'High-Intensity Interval Training (HIIT): Maximizing Fitness in Minimal Time'}",
    urlSlug: "${urlSlugMatch ? urlSlugMatch[1] : 'hiit-high-intensity-interval-training-fitness'}",
    excerpt: "${excerptMatch ? excerptMatch[1] : 'Learn about HIIT workouts and how they can maximize fitness benefits in minimal time. Discover different protocols, benefits, and how to safely incorporate HIIT into your routine.'}",
    content: \`${processedContent}\`,
    category: "${categoryMatch ? categoryMatch[1] : 'Fitness'}",
    tags: [${tagsMatch ? `"${tagsMatch[1]}"`.split(',').map(tag => tag.trim()).join(',') : '"HIIT", "interval training", "cardio", "workout", "fitness"'}],
    metaTitle: "${metaTitleMatch ? metaTitleMatch[1] : 'High-Intensity Interval Training (HIIT): Maximizing Fitness in Minimal Time'}",
    metaDescription: "${metaDescriptionMatch ? metaDescriptionMatch[1] : 'Learn about HIIT workouts and how they can maximize fitness benefits in minimal time. Discover different protocols, benefits, and how to safely incorporate HIIT into your routine.'}",
    author: "${authorMatch ? authorMatch[1] : 'Dr. Sarah Mitchell'}",
    date: "${dateMatch ? dateMatch[1] : 'December 20, 2024'}",
    readTime: "${readTimeMatch ? readTimeMatch[1] : '7 min read'}",
    views: "${viewsMatch ? viewsMatch[1] : '13.9K'}",
    image: "${imageMatch ? imageMatch[1] : 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'}",
    keyTakeaways: [
      ${keyTakeaways.slice(0, 5).map(takeaway => `"${takeaway}"`).join(',\n      ')}
    ],
    tableOfContents: [
      ${tableOfContents.map(item => `{ id: "${item.id}", title: "${item.title}", level: "${item.level}" }`).join(',\n      ')}
    ],
    faq: [
${faqs.slice(0, 5).map(faq => `      {
        question: "${faq.question.replace(/"/g, '\\"')}",
        answer: "${faq.answer.replace(/"/g, '\\"')}"
      }`).join(',\n')}
    ],
    conclusion: "High-intensity interval training is the closest thing we have to a fitness time machine. Twenty focused minutes, three times a week, can transform your body composition, energy levels, and athletic performance faster than hours of traditional training. But respect the intensity. Recover properly. Progress gradually. Do it right — and you'll never waste another hour on the treadmill again."
  }`;

// Combine everything together
const updatedBlogsContent = beforeBlog + newBlog10 + afterBlog;

// Write the updated content back to the file
fs.writeFileSync(blogsFilePath, updatedBlogsContent);

console.log('Successfully updated blog-10 with content from blog-prompt.txt lines 1-172!');