const fs = require('fs');

let content = fs.readFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', 'utf8');

// Extract the new content from blog-prompt.txt
const blogPromptContent = fs.readFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/public/blog-prompt.txt', 'utf8');
const lines = blogPromptContent.split('\n');

// Process the content according to the blog structure
let processedContent = '';

// Add introduction section
processedContent += `<div><h2 id="introduction">Introduction</h2>\n`;
processedContent += `<p>High-Intensity Interval Training (HIIT) involves alternating short bursts of intense exercise with recovery periods. This training method has gained popularity for its efficiency and effectiveness in improving fitness in minimal time.</p>\n\n`;

// Process the lines from blog-prompt.txt to create the full content
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  if (line.startsWith('Key Takeaways')) {
    processedContent += `<h2 id="key-takeaways">Key Takeaways</h2>\n`;
    processedContent += `<ul>\n`;
    
    // Add the key takeaways
    while (i + 1 < lines.length && !lines[i + 1].trim().startsWith('Table of Contents')) {
      i++;
      const takeaway = lines[i].trim();
      if (takeaway && !takeaway.startsWith('Table of Contents')) {
        // Extract just the content part after the number
        const content = takeaway.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
        if (content && !content.includes('Table of Contents')) {
          processedContent += `  <li>${content}</li>\n`;
        }
      } else {
        break;
      }
    }
    processedContent += `</ul>\n\n`;
  } 
  else if (line.startsWith('Table of Contents')) {
    processedContent += `<h2 id="table-of-contents">Table of Contents</h2>\n`;
    processedContent += `<ul>\n`;
    
    // Add the table of contents
    while (i + 1 < lines.length && !lines[i + 1].trim().match(/^\d+→.*The Day I Discovered/)) {
      i++;
      const tocItem = lines[i].trim();
      if (tocItem && !tocItem.match(/^\d+→.*The Day I Discovered/) && !tocItem.includes('Key Takeaways')) {
        const content = tocItem.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
        if (content && content !== '') {
          // Convert spaces to hyphens and lowercase for the ID
          const id = content.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
          processedContent += `  <li><a href="#${id}">${content}</a></li>\n`;
        }
      } else {
        break;
      }
    }
    processedContent += `</ul>\n\n`;
  }
  else if (line.match(/^\d+→The Day I Discovered/)) {
    const title = line.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    processedContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    // Add content for this section until next heading
    while (i + 1 < lines.length && !lines[i + 1].trim().match(/^\d+→.*What High-Intensity/)) {
      const sectionContent = lines[i].trim();
      if (sectionContent && !sectionContent.includes('What High-Intensity')) {
        const content = sectionContent.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
        if (content && content !== '' && !content.includes('What High-Intensity')) {
          processedContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--; // Adjust because the outer loop will increment
  }
  else if (line.match(/^\d+→What High-Intensity/)) {
    const title = line.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    processedContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    // Add content for this section
    while (i + 1 < lines.length && !lines[i + 1].trim().match(/^\d+→.*The Science:/)) {
      const sectionContent = lines[i].trim();
      if (sectionContent && !sectionContent.includes('The Science:')) {
        const content = sectionContent.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
        if (content && content !== '' && !content.includes('The Science:')) {
          processedContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--;
  }
  else if (line.match(/^\d+→The Science:/)) {
    const title = line.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    processedContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    // Add content for this section
    while (i + 1 < lines.length && !lines[i + 1].trim().match(/^\d+→.*HIIT Benefits/)) {
      const sectionContent = lines[i].trim();
      if (sectionContent && !sectionContent.includes('HIIT Benefits')) {
        const content = sectionContent.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
        if (content && content !== '' && !content.includes('HIIT Benefits')) {
          processedContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--;
  }
  else if (line.match(/^\d+→HIIT Benefits/)) {
    const title = line.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    processedContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    // Add content for this section
    while (i + 1 < lines.length && !lines[i + 1].trim().match(/^\d+→.*HIIT vs/)) {
      const sectionContent = lines[i].trim();
      if (sectionContent && !sectionContent.includes('HIIT vs')) {
        const content = sectionContent.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
        if (content && content !== '' && !content.includes('HIIT vs')) {
          processedContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--;
  }
  else if (line.match(/^\d+→HIIT vs/)) {
    const title = line.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    processedContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    // Add content for this section
    while (i + 1 < lines.length && !lines[i + 1].trim().match(/^\d+→.*Who Should/)) {
      const sectionContent = lines[i].trim();
      if (sectionContent && !sectionContent.includes('Who Should')) {
        const content = sectionContent.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
        if (content && content !== '' && !content.includes('Who Should')) {
          processedContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--;
  }
  else if (line.match(/^\d+→Who Should/)) {
    const title = line.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    processedContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    // Add content for this section
    while (i + 1 < lines.length && !lines[i + 1].trim().match(/^\d+→.*My Exact/)) {
      const sectionContent = lines[i].trim();
      if (sectionContent && !sectionContent.includes('My Exact')) {
        const content = sectionContent.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
        if (content && content !== '' && !content.includes('My Exact')) {
          processedContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--;
  }
  else if (line.match(/^\d+→My Exact/)) {
    const title = line.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    processedContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    // Add content for this section
    while (i + 1 < lines.length && !lines[i + 1].trim().match(/^\d+→.*20-Minute HIIT/)) {
      const sectionContent = lines[i].trim();
      if (sectionContent && !sectionContent.includes('20-Minute HIIT')) {
        const content = sectionContent.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
        if (content && content !== '' && !content.includes('20-Minute HIIT')) {
          processedContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--;
  }
  else if (line.match(/^\d+→20-Minute HIIT/)) {
    const title = line.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    processedContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    // Add content for this section
    while (i + 1 < lines.length && !lines[i + 1].trim().match(/^\d+→.*Common Mistakes/)) {
      const sectionContent = lines[i].trim();
      if (sectionContent && !sectionContent.includes('Common Mistakes')) {
        const content = sectionContent.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
        if (content && content !== '' && !content.includes('Common Mistakes')) {
          processedContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--;
  }
  else if (line.match(/^\d+→Common Mistakes/)) {
    const title = line.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    processedContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    // Add content for this section
    while (i + 1 < lines.length && !lines[i + 1].trim().match(/^\d+→.*Before and After/)) {
      const sectionContent = lines[i].trim();
      if (sectionContent && !sectionContent.includes('Before and After')) {
        const content = sectionContent.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
        if (content && content !== '' && !content.includes('Before and After')) {
          processedContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--;
  }
  else if (line.match(/^\d+→Before and After/)) {
    const title = line.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    processedContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    // Add content for this section
    while (i + 1 < lines.length && !lines[i + 1].trim().match(/^\d+→.*FAQ/)) {
      const sectionContent = lines[i].trim();
      if (sectionContent && !sectionContent.includes('FAQ')) {
        const content = sectionContent.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
        if (content && content !== '' && !content.includes('FAQ')) {
          processedContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--;
  }
  else if (line.match(/^\d+→FAQ/)) {
    processedContent += `<h2 id="faq">FAQ</h2>\n`;
    i++;
    // Add FAQ content
    while (i + 1 < lines.length && !lines[i + 1].trim().match(/^\d+→.*Conclusion/)) {
      const faqContent = lines[i].trim();
      if (faqContent && !faqContent.includes('Conclusion')) {
        const content = faqContent.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
        if (content && content.startsWith('Q:')) {
          const qPattern = /^Q:\s*(.*?)\?\s*$/;
          const match = content.match(qPattern);
          if (match) {
            const question = match[1];
            processedContent += `<h3>${content}</h3>\n`;
          } else {
            processedContent += `<p>${content}</p>\n`;
          }
        } else if (content && content.startsWith('A:')) {
          processedContent += `<p>${content}</p>\n`;
        } else if (content && content !== '') {
          processedContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--;
  }
  else if (line.match(/^\d+→Conclusion/)) {
    const title = line.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
    const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]/g, '');
    processedContent += `<h2 id="${id}">${title}</h2>\n`;
    i++;
    // Add content for this section until end
    while (i + 1 < lines.length) {
      const sectionContent = lines[i].trim();
      if (sectionContent) {
        const content = sectionContent.replace(/^\d+\→/, '').replace(/^\d+→/, '').replace(/^\d+ →/, '');
        if (content && content !== '') {
          processedContent += `<p>${content}</p>\n`;
        }
      }
      i++;
    }
    i--;
  }
}

processedContent += `</div>`;

// Replace the content of blog-10
const startMarker = '    content: `';
const endMarker = '`,';

// Find the position of blog-10 content
const blog10StartIndex = content.indexOf('"blog-10"', 0);
if (blog10StartIndex !== -1) {
  const contentStartIndex = content.indexOf(startMarker, blog10StartIndex);
  if (contentStartIndex !== -1) {
    const contentEndIndex = content.indexOf(endMarker, contentStartIndex + startMarker.length);
    if (contentEndIndex !== -1) {
      const beforeContent = content.substring(0, contentStartIndex + startMarker.length);
      const afterContent = content.substring(contentEndIndex);
      
      // Combine everything
      content = beforeContent + processedContent + afterContent;
      
      // Write the updated content back to the file
      fs.writeFileSync('c:/Users/RS Computers/Desktop/marwari-luxe-app-main/src/data/blogs.ts', content);
      
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