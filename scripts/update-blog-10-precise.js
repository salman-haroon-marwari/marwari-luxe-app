const fs = require('fs');

// Read the blog prompt content
const blogPromptContent = fs.readFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/public/blog-prompt.txt', 'utf8');
const lines = blogPromptContent.split(/\r?\n/);

// Process the content to convert it to proper HTML format
let htmlContent = '<div>';

// Process Key Takeaways
let i = 0;
if (lines[i].trim() === 'Key Takeaways') {
  htmlContent += '<h2 id="key-takeaways">Key Takeaways</h2>\n<ul>\n';
  i++;
  while (i < lines.length && lines[i].trim() !== '' && !lines[i].includes('Table of Contents')) {
    const line = lines[i].trim();
    if (line && !line.includes('Table of Contents')) {
      // Extract just the content part after the number and arrow if present
      const content = line.replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '');
      if (content && content !== 'Key Takeaways' && !content.includes('Table of Contents')) {
        htmlContent += `  <li>${content}</li>\n`;
      }
    }
    i++;
  }
  htmlContent += '</ul>\n\n';
}

// Process Table of Contents
if (i < lines.length && lines[i].includes('Table of Contents')) {
  htmlContent += '<h2 id="table-of-contents">Table of Contents</h2>\n<ul>\n';
  i++;
  while (i < lines.length && lines[i].trim() !== '' && !lines[i].includes('The Day I Discovered 20 Minutes')) {
    const line = lines[i].trim();
    if (line && line !== '' && !line.includes('The Day I Discovered 20 Minutes')) {
      const content = line.replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '');
      if (content && content !== '' && !content.includes('The Day I Discovered 20 Minutes')) {
        // Create a valid HTML ID
        const id = content.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
        htmlContent += `  <li><a href="#${id}">${content}</a></li>\n`;
      }
    }
    i++;
  }
  htmlContent += '</ul>\n\n';
}

// Process the rest of the content
while (i < lines.length) {
  const line = lines[i].trim();
  
  if (line.includes('The Day I Discovered 20 Minutes Could Beat 2 Hours in the Gym')) {
    const title = line.replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    htmlContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    
    // Add paragraphs for this section
    while (i < lines.length && 
           !lines[i].includes('What High-Intensity Interval Training Actually Is') &&
           !lines[i].includes('Table of Contents') &&
           lines[i].trim() !== '') {
      const content = lines[i].replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '').trim();
      if (content && content !== title) {
        if (content.startsWith('Link 1:') || content.startsWith('Link 2:') || content.startsWith('Link 3:')) {
          // Format links properly
          const linkRegex = /(Link \d+):\s*(https?:\/\/[^\s\(]+)\s*\((.+?)\)/;
          const match = content.match(linkRegex);
          if (match) {
            htmlContent += `<p>${match[1]}: <a href="${match[2]}" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">${match[3]}</a></p>\n`;
          } else {
            htmlContent += `<p>${content}</p>\n`;
          }
        } else if (!content.startsWith('[') || content.includes('Fit person') || content.includes('Infographic')) {
          // Skip image placeholders but add other content
          htmlContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--; // Adjust because the outer loop will increment
  }
  else if (line.includes('What High-Intensity Interval Training Actually Is')) {
    const title = line.replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    htmlContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    
    while (i < lines.length && 
           !lines[i].includes('The Science: Why HIIT Burns Fat') &&
           lines[i].trim() !== '') {
      const content = lines[i].replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '').trim();
      if (content) {
        if (content.startsWith('Link 1:') || content.startsWith('Link 2:') || content.startsWith('Link 3:')) {
          const linkRegex = /(Link \d+):\s*(https?:\/\/[^\s\(]+)\s*\((.+?)\)/;
          const match = content.match(linkRegex);
          if (match) {
            htmlContent += `<p>${match[1]}: <a href="${match[2]}" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">${match[3]}</a></p>\n`;
          } else {
            htmlContent += `<p>${content}</p>\n`;
          }
        } else if (content.includes('Typical structure:') || content.includes('It is NOT:')) {
          htmlContent += `<p><strong>${content}</strong></p>\n`;
        } else if (content.match(/^\d+–\d+/) || content.startsWith('20–60 seconds') || content.startsWith('10–120 seconds') || content.startsWith('Total session')) {
          htmlContent += `<p>${content}</p>\n`;
        } else if (content.startsWith('Steady jogging') || content.startsWith('Circuit training') || content.startsWith('Doing burpees')) {
          htmlContent += `<p>${content}</p>\n`;
        } else if (!content.startsWith('[') || content.includes('Fit person') || content.includes('Infographic')) {
          htmlContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--;
  }
  else if (line.includes('The Science: Why HIIT Burns Fat')) {
    const title = line.replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    htmlContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    
    while (i < lines.length && 
           !lines[i].includes('HIIT Benefits That Changed How I Train') &&
           lines[i].trim() !== '') {
      const content = lines[i].replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '').trim();
      if (content) {
        if (content.startsWith('Link 1:') || content.startsWith('Link 2:') || content.startsWith('Link 3:')) {
          const linkRegex = /(Link \d+):\s*(https?:\/\/[^\s\(]+)\s*\((.+?)\)/;
          const match = content.match(linkRegex);
          if (match) {
            htmlContent += `<p>${match[1]}: <a href="${match[2]}" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener">${match[3]}</a></p>\n`;
          } else {
            htmlContent += `<p>${content}</p>\n`;
          }
        } else if (content.includes('EPOC') || content.startsWith('Improved') || content.startsWith('Increased') || content.startsWith('Greater')) {
          htmlContent += `<p>${content}</p>\n`;
        } else if (!content.startsWith('[') || content.includes('Fit person') || content.includes('Infographic')) {
          htmlContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--;
  }
  else if (line.includes('HIIT Benefits That Changed How I Train')) {
    const title = line.replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    htmlContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    
    while (i < lines.length && 
           !lines[i].includes('HIIT vs Traditional Cardio') &&
           lines[i].trim() !== '') {
      const content = lines[i].replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '').trim();
      if (content) {
        if (content.includes('Benefit') && content.includes('Winner')) {
          // This looks like a table header, start a table
          htmlContent += '<table style="width: 100%; border-collapse: collapse; margin: 24px 0;">\n<thead>\n<tr style="background-color: #f8f9fa;">\n<th style="border: 1px solid #dee2e6; padding: 12px 16px; text-align: left; font-weight: 600;">Benefit</th>\n<th style="border: 1px solid #dee2e6; padding: 12px 16px; text-align: left; font-weight: 600;">Traditional Cardio</th>\n<th style="border: 1px solid #dee2e6; padding: 12px 16px; text-align: left; font-weight: 600;">HIIT (Same Time)</th>\n<th style="border: 1px solid #dee2e6; padding: 12px 16px; text-align: left; font-weight: 600;">Winner</th>\n</tr>\n</thead>\n<tbody>\n';
        } else if (content.includes('Fat loss') || content.includes('Muscle preservation') || content.includes('Time efficiency') || 
                   content.includes('Cardiovascular health') || content.includes('Afterburn') || content.includes('Bone density')) {
          // This is a table row
          const parts = content.split('\t');
          if (parts.length >= 4) {
            htmlContent += `<tr>
<td style="border: 1px solid #dee2e6; padding: 12px 16px;">${parts[0]}</td>
<td style="border: 1px solid #dee2e6; padding: 12px 16px;">${parts[1]}</td>
<td style="border: 1px solid #dee2e6; padding: 12px 16px;">${parts[2]}</td>
<td style="border: 1px solid #dee2e6; padding: 12px 16px;">${parts[3]}</td>
</tr>
`;
          }
        } else if (content.includes('HIIT vs Traditional Cardio: The Real Numbers')) {
          // End the previous table and start a new section
          if (!content.includes('HIIT vs Traditional Cardio: The Real Numbers')) {
            htmlContent += '</tbody>\n</table>\n';
          }
          const newTitle = 'HIIT vs Traditional Cardio: The Real Numbers';
          const newId = newTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
          htmlContent += `<h2 id="${newId}">${newTitle}</h2>\n`;
          
          // Look for the table data in the next few lines
          i++;
          while (i < lines.length && 
                 !lines[i].includes('Who Should (and Shouldn\'t) Do HIIT Workouts') &&
                 lines[i].trim() !== '') {
            const subContent = lines[i].replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '').trim();
            if (subContent.includes('Study Duration') && subContent.includes('Fat Loss')) {
              htmlContent += '<table style="width: 100%; border-collapse: collapse; margin: 24px 0;">\n<thead>\n<tr style="background-color: #f8f9fa;">\n<th style="border: 1px solid #dee2e6; padding: 12px 16px; text-align: left; font-weight: 600;">Study Duration</th>\n<th style="border: 1px solid #dee2e6; padding: 12px 16px; text-align: left; font-weight: 600;">Training Type</th>\n<th style="border: 1px solid #dee2e6; padding: 12px 16px; text-align: left; font-weight: 600;">Weekly Time</th>\n<th style="border: 1px solid #dee2e6; padding: 12px 16px; text-align: left; font-weight: 600;">Average Fat Loss</th>\n</tr>\n</thead>\n<tbody>\n';
            } else if (subContent.includes('15 weeks') && subContent.includes('HIIT')) {
              const parts = subContent.split('\t');
              if (parts.length >= 4) {
                htmlContent += `<tr>
<td style="border: 1px solid #dee2e6; padding: 12px 16px;">${parts[0]}</td>
<td style="border: 1px solid #dee2e6; padding: 12px 16px;">${parts[1]}</td>
<td style="border: 1px solid #dee2e6; padding: 12px 16px;">${parts[2]}</td>
<td style="border: 1px solid #dee2e6; padding: 12px 16px;">${parts[3]}</td>
</tr>
`;
              }
            } else if (subContent && subContent !== '') {
              htmlContent += `<p>${subContent}</p>\n`;
            }
            i++;
          }
          htmlContent += '</tbody>\n</table>\n';
          i--; // Adjust for the outer loop increment
        } else if (!content.startsWith('[') || content.includes('Fit person') || content.includes('Infographic')) {
          htmlContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    if (!content.includes('HIIT vs Traditional Cardio')) {
      htmlContent += '</tbody>\n</table>\n';
    }
    i--;
  }
  else if (line.includes('Who Should (and Shouldn\'t) Do HIIT Workouts')) {
    const title = line.replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    htmlContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    
    while (i < lines.length && 
           !lines[i].includes('My Exact 2025 HIIT Protocol') &&
           lines[i].trim() !== '') {
      const content = lines[i].replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '').trim();
      if (content) {
        if (content === 'Perfect for:' || content === 'Avoid or modify if:') {
          htmlContent += `<p><strong>${content}</strong></p>\n<ul>\n`;
        } else if (content.startsWith('Busy professionals') || content.startsWith('Parents with limited time') || 
                   content.startsWith('Athletes wanting') || content.startsWith('Anyone who hates') ||
                   content.startsWith('Recent injury') || content.startsWith('Heart conditions') ||
                   content.startsWith('Severe obesity') || content.startsWith('Chronic fatigue')) {
          htmlContent += `<li>${content}</li>\n`;
        } else if (content === '') {
          htmlContent += '</ul>\n';
        } else if (!content.startsWith('[') || content.includes('Fit person') || content.includes('Infographic')) {
          htmlContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    // Close any open ul tags
    if (lines[i-1].trim() !== '' && (lines[i-1].includes('Busy professionals') || lines[i-1].includes('Recent injury'))) {
      htmlContent += '</ul>\n';
    }
    i--;
  }
  else if (line.includes('My Exact 2025 HIIT Protocol')) {
    const title = line.replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    htmlContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    
    while (i < lines.length && 
           !lines[i].includes('20-Minute HIIT Workouts You Can Do Anywhere') &&
           lines[i].trim() !== '') {
      const content = lines[i].replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '').trim();
      if (content && !content.includes('(Full 12-week progression') && !content.includes('5 complete routines')) {
        if (!content.startsWith('[') || content.includes('Fit person') || content.includes('Infographic')) {
          htmlContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--;
  }
  else if (line.includes('20-Minute HIIT Workouts You Can Do Anywhere')) {
    const title = line.replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    htmlContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    
    while (i < lines.length && 
           !lines[i].includes('Common Mistakes That Kill Results') &&
           lines[i].trim() !== '') {
      const content = lines[i].replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '').trim();
      if (content && !content.includes('(5 complete routines') && !content.includes('6 complete routines')) {
        if (!content.startsWith('[') || content.includes('Fit person') || content.includes('Infographic')) {
          htmlContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--;
  }
  else if (line.includes('Common Mistakes That Kill Results')) {
    const title = line.replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    htmlContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    
    // Add list items for common mistakes
    htmlContent += '<ul>\n';
    while (i < lines.length && 
           !lines[i].includes('Before and After Stories From Real Clients') &&
           lines[i].trim() !== '') {
      const content = lines[i].replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '').trim();
      if (content && content !== 'Common Mistakes That Kill Results' && 
          content !== 'Going too hard too soon' && content !== 'No proper warm-up' &&
          content !== 'Daily HIIT (burnout city)' && content !== 'Poor form' && 
          content !== 'No progression') {
        // This is not a list item, so close the list
        htmlContent += '</ul>\n';
        if (content && !content.includes('Before and After Stories')) {
          htmlContent += `<p>${content}</p>\n`;
        }
      } else if (content === 'Going too hard too soon' || content === 'No proper warm-up' ||
                 content === 'Daily HIIT (burnout city)' || content === 'Poor form' ||
                 content === 'No progression') {
        htmlContent += `<li>${content}</li>\n`;
      }
      i++;
    }
    if (!lines[i-1].trim().includes('Before and After Stories')) {
      htmlContent += '</ul>\n';
    }
    i--;
  }
  else if (line.includes('Before and After Stories From Real Clients')) {
    const title = line.replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    htmlContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    
    while (i < lines.length && 
           !lines[i].includes('FAQ – Your Top Questions Answered') &&
           lines[i].trim() !== '') {
      const content = lines[i].replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '').trim();
      if (content && !content.includes('(Detailed transformations')) {
        if (!content.startsWith('[') || content.includes('Fit person') || content.includes('Infographic')) {
          htmlContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--;
  }
  else if (line.includes('FAQ – Your Top Questions Answered')) {
    htmlContent += '<h2 id="faq-your-top-questions-answered">FAQ – Your Top Questions Answered</h2>\n';
    i++;
    
    while (i < lines.length && 
           !lines[i].includes('Conclusion') &&
           lines[i].trim() !== '') {
      const content = lines[i].replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '').trim();
      if (content) {
        if (content.startsWith('Q:')) {
          htmlContent += `<h3>${content}</h3>\n`;
        } else if (content.startsWith('A:')) {
          htmlContent += `<p>${content}</p>\n`;
        } else if (content.includes('Best HIIT workouts') || content.includes('HIIT workouts at home') || 
                   content.includes('Is HIIT safe for beginners')) {
          // These are answers to the questions above
          htmlContent += `<p>${content}</p>\n`;
        } else if (!content.startsWith('[') || content.includes('Fit person') || content.includes('Infographic')) {
          htmlContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--;
  }
  else if (line.includes('Conclusion')) {
    const title = line.replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    htmlContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    
    while (i < lines.length) {
      const content = lines[i].replace(/^\d+→\s*/, '').replace(/^\d+\→\s*/, '').trim();
      if (content && !content.startsWith('[')) { // Skip image placeholders
        htmlContent += `<p>${content}</p>\n`;
      }
      i++;
    }
  }
  else {
    i++;
  }
}

htmlContent += '</div>';

// Read the entire blogs.ts file
let fullContent = fs.readFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', 'utf8');

// Find and replace the content of blog-10
const blog10Start = fullContent.indexOf('id: "blog-10"');
if (blog10Start !== -1) {
  const contentStart = fullContent.indexOf('content: `', blog10Start);
  if (contentStart !== -1) {
    const contentEnd = fullContent.indexOf('`,', contentStart + 'content: `'.length);
    if (contentEnd !== -1) {
      const beforeContent = fullContent.substring(0, contentStart + 'content: `'.length);
      const afterContent = fullContent.substring(contentEnd);
      
      // Combine everything
      const updatedContent = beforeContent + htmlContent + afterContent;
      
      // Write the updated content back to the file
      fs.writeFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', updatedContent);
      
      console.log('Blog-10 content has been updated successfully with the new content from blog-prompt.txt');
    } else {
      console.error('Could not find the end marker for blog-10 content');
    }
  } else {
    console.error('Could not find the start marker for blog-10 content');
  }
} else {
  console.error('Could not find blog-10 in the file');
}