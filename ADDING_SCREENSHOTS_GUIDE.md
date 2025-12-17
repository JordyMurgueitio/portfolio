# 📸 Guide: Adding Internal Tool Screenshots/Videos

## Step 1: Prepare Your Media Files

### For Screenshots (Recommended for Static UI):

1. Take screenshots of your internal tools
2. **IMPORTANT**: Blur or redact any sensitive information:
   - Customer names/emails
   - Company-specific data
   - Internal URLs/endpoints
   - Proprietary business logic
3. Save as PNG or JPG format
4. Recommended size: 1200x800px (or similar 3:2 ratio)
5. Optimize file size (use tools like TinyPNG or ImageOptim)

### For Videos/GIFs (Better for Demonstrating Features):

1. Record a screen demo showing:
   - UI interactions
   - Key features in action
   - Workflow demonstrations
2. **IMPORTANT**: Same redaction rules as screenshots
3. For GIF: Keep under 5MB (use tools like Gifski or ezgif.com)
4. For MP4: Keep under 10MB, H.264 codec works best
5. Recommended: 1280x720px, 15-30 seconds max

---

## Step 2: Add Files to Your Project

1. Save your screenshots/videos to: `/Users/jordy/Documents/portfolio/src/assets/`

   Example filenames:

   ```
   support-dashboard.png (or .gif or .mp4)
   crm-tool.png
   data-analytics.png
   ```

2. Make sure files are named clearly and match what you'll import

---

## Step 3: Update Projects.jsx

Open `/Users/jordy/Documents/portfolio/src/components/Projects.jsx`

### Option A: Using Images (Screenshots)

```javascript
// At the top of the file, add your imports:
import supportDashboard from '../assets/support-dashboard.png'
import crmTool from '../assets/crm-tool.png'
import dataAnalytics from '../assets/data-analytics.png'

// Then in the projects array, update the image property:
{
    title: "Internal Support Dashboard",
    // ... other properties ...
    image: supportDashboard,  // CHANGE THIS from null
    video: null,
    // ... rest of properties
}
```

### Option B: Using Videos/GIFs

```javascript
// Import your video/gif:
import supportDashboardVideo from '../assets/support-dashboard.mp4'
// OR
import supportDashboardGif from '../assets/support-dashboard.gif'

// Then in the projects array:
{
    title: "Internal Support Dashboard",
    // ... other properties ...
    image: null,  // Keep as null if using video
    video: supportDashboardVideo,  // ADD THIS
    // ... rest of properties
}
```

### Option C: Mix Both (Image + Video)

```javascript
// If you have both, video takes priority in the display:
{
    title: "Internal Support Dashboard",
    // ... other properties ...
    image: supportDashboard,  // Fallback
    video: supportDashboardVideo,  // Will display instead of image
    // ... rest of properties
}
```

---

## Step 4: Customize Project Descriptions (IMPORTANT!)

Edit the descriptions to match YOUR actual work:

```javascript
{
    title: "Internal Support Dashboard",  // CHANGE TO YOUR ACTUAL PROJECT NAME
    description: "Change this to describe what YOUR tool actually does...",
    techStack: ["Add", "Your", "Actual", "Tech", "Stack"],
    // ... etc
    impact: [
        "Change these to YOUR actual metrics",
        "Real numbers from your work",
        "Specific achievements"
    ]
}
```

### Tips for Good Descriptions:

- Start with what problem it solves
- Mention specific features YOU built
- Include real metrics if possible (30% faster, 15 users, etc.)
- Highlight technical complexity (real-time updates, authentication, etc.)
- Keep it honest - don't oversell

---

## Step 5: Test Everything

1. Start your dev server:

   ```bash
   npm run dev
   ```

2. Check that:
   - ✅ Images/videos load correctly
   - ✅ No console errors
   - ✅ Videos autoplay and loop smoothly
   - ✅ Descriptions are accurate
   - ✅ Status badges show correctly
   - ✅ "Professional" badge appears on internal tools
   - ✅ NDA notice displays for internal tools

---

## What You Get:

### Internal Projects Show:

- ✅ "Professional" badge
- ✅ "Production" status (purple)
- ✅ Screenshot or video demo
- ✅ Detailed description with metrics
- ✅ "Key Impact" section with bullet points
- ✅ NDA notice instead of demo/code links
- ✅ Professional tech stack badges

### Personal Projects Show:

- ✅ Status badge (Live/In Progress)
- ✅ Screenshot or placeholder
- ✅ Description
- ✅ Tech stack
- ✅ Live Demo + GitHub Code links

---

## Example: Full Internal Project Entry

```javascript
{
    title: "Customer Support Dashboard",
    description: "Real-time Vue.js application for managing support tickets. Built custom SQL query builder, role-based access control, and live notification system. Reduced average ticket resolution time from 45min to 30min (33% improvement). Used by 20+ support agents across 3 departments.",
    techStack: ["Vue.js", "Express.js", "PostgreSQL", "WebSocket", "JWT Auth"],
    image: supportDashboard,  // Your screenshot
    video: null,
    liveUrl: null,
    githubUrl: null,
    status: "production",
    year: "2024-Present",
    isInternal: true,
    impact: [
        "33% faster ticket resolution (45min → 30min)",
        "20+ daily active users across 3 teams",
        "Real-time updates reduced refresh needs by 80%"
    ]
}
```

---

## Quick Checklist Before Publishing:

- [ ] All sensitive data redacted from screenshots/videos
- [ ] File sizes optimized (images < 500KB, videos < 10MB)
- [ ] Import statements added at top of Projects.jsx
- [ ] `image` or `video` property updated (not null anymore)
- [ ] Descriptions updated to match YOUR actual work
- [ ] Tech stacks match what you actually used
- [ ] Impact metrics are real (or removed if not applicable)
- [ ] Tested locally - everything displays correctly
- [ ] No console errors

---

## Need Help?

If images don't show:

1. Check file path in import statement
2. Verify file exists in /src/assets/
3. Check browser console for errors
4. Try clearing cache (Cmd+Shift+R on Mac)

If videos don't play:

1. Use .mp4 format with H.264 codec
2. Keep file size reasonable (< 10MB)
3. Test in multiple browsers
4. Consider using GIF instead for better compatibility

---

**You're all set!** Just add your media files and update the project details. Your portfolio will go from 7/10 to 9/10! 🚀
