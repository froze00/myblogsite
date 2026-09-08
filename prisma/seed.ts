import { db } from "../src/lib/db";

const posts = [
  {
    slug: "week-1-onboarding-and-first-steps",
    title: "Week 1 — Onboarding, Exams & First Bugs",
    excerpt:
      "My first week at Aquila Software Corporation: passing the intern examination, fixing 19 backend bugs, and building my first CRUD inventory system.",
    weekNumber: 1,
    startDate: "June 15, 2026",
    endDate: "June 19, 2026",
    totalHours: 40.5,
    remainingHours: 283.5,
    coverAccent: "emerald",
    tags: "Onboarding,Examination,Bug Fixing,CRUD,Inventory System",
    highlights: "Passed intern examination;Fixed 19 backend bugs;Built CRUD inventory system",
    content: `## The Beginning of My Journey

Week 1 marked the official start of my On-the-Job Training at **AQUILA Software Corporation** as a Frontend Developer. It was a whirlwind of introductions, assessments, and real hands-on work — exactly the kind of start I had hoped for.

### Monday, June 15 — Intern Examination
The very first day began with the intern examination, which had two parts: a **written test** and a **hands-on practical exam**. This was the company's way of gauging where each intern stood technically. It set a serious, professional tone for the weeks ahead.

### Tuesday, June 16 — Orientation & First Real Task
After orientation, I was immediately handed a meaningful task: **fixing 19 bugs in the backend of the Library Management System**. Jumping straight into a real codebase on day two was both intimidating and exhilarating — it forced me to learn the project structure quickly.

### Wednesday, June 17 — Building an Inventory System
I was assigned to **create an inventory system using CRUD operations**. This meant designing the full Create, Read, Update, Delete flow from scratch. It was a great opportunity to apply everything I'd learned in school to a production-style project.

### Thursday, June 18 — Continuation
I continued developing the inventory system, refining the CRUD logic, wiring up the UI, and making sure each operation behaved correctly. The day flew by as I got deeper into the work.

### Friday, June 19 — Demo & Submission (WFH)
I demonstrated the completed inventory system and submitted the fixed 19 bugs from the Library MS backend. This was a **work-from-home** day, which showed me that Aquila trusts its interns with flexibility as long as the work gets delivered.

### Reflection
By the end of the week, I had already contributed real fixes and built a working system. The remaining 283.5 hours felt less daunting after this — I knew I was going to learn a lot.`,
  },
  {
    slug: "week-2-ui-refactoring-and-pull-requests",
    title: "Week 2 — UI Refactoring & My First Pull Request",
    excerpt:
      "Refactoring UI components into classes, opening my first pull request, and learning the merge workflow with the project manager.",
    weekNumber: 2,
    startDate: "June 22, 2026",
    endDate: "June 26, 2026",
    totalHours: 40.5,
    remainingHours: 243,
    coverAccent: "teal",
    tags: "UI Refactoring,Pull Request,Code Merge,Frontend",
    highlights: "Refactored UI into classes;Opened first pull request;Learned merge workflow",
    content: `## Leveling Up My Frontend Skills

Week 2 was about writing cleaner, more maintainable code and learning how professional teams collaborate through version control.

### Monday, June 22 — UI Refactoring
I started the week by **refactoring the UI into classes**, pulling the existing interface apart and restructuring it so it would be easier to extend. Refactoring taught me to read code critically — not just to make it work, but to make it readable for the next developer.

### Tuesday, June 23 — Preparing the Pull Request
With the refactoring done, I prepared a **pull request** to send to the project manager, signaling the changes were ready to merge. Writing a clear PR description was a skill in itself.

### Wednesday, June 24 — Code Review Feedback
I received feedback on the changes and made small adjustments based on review comments. Iterating on feedback is one of the fastest ways to grow as a developer.

### Thursday, June 25 — Merge Preparation
I finalized the refactored code, cleaned up commits, and made sure the branch was ready to merge without conflicts.

### Friday, June 26 — Wrapping Up the Cycle
The week closed with the refactored UI in a stable, reviewable state. I felt much more confident navigating the codebase than I had just seven days earlier.

### Reflection
This week taught me that **code is written for humans first**. Clear structure and good PR etiquette matter just as much as working features.`,
  },
  {
    slug: "week-3-merge-success-and-video-editing",
    title: "Week 3 — A Successful Merge & A Creative Pivot",
    excerpt:
      "My pull request was merged, and then I took on an unexpected creative task: editing event videos for a hotel function in Davao City.",
    weekNumber: 3,
    startDate: "June 29, 2026",
    endDate: "July 3, 2026",
    totalHours: 40.5,
    remainingHours: 202.5,
    coverAccent: "amber",
    tags: "Code Merge,Video Editing,Creativity,Event Coverage",
    highlights: "Pull request merged;Edited event videos;Creative cross-training",
    content: `## When Code Meets Creativity

Week 3 brought a satisfying milestone — my first merged contribution — followed by a surprising creative assignment that took me outside of pure development.

### Monday, June 29 — The Merge
I successfully completed the **UI refactoring with classes** and submitted the pull request to the project manager, ready to merge the changes. Seeing my code accepted into the main branch was a real confidence boost.

### Tuesday, June 30 — Merge Confirmation
I received the update from the project manager that the **merge from my pull request had gone through**. My changes were now live in the project. It was the first time code I'd written was running in a real product.

### Wednesday, July 1 — A Creative Pivot
I was assigned to **edit a video for an event held at the Grand Regal Hotel in Davao City**. This was a completely different kind of work — creative, visual, and storytelling-driven. It reminded me that tech roles often blend disciplines.

### Thursday, July 2 — Editing Video No. 3
I continued editing, focusing on **Video No. 3** of the series. Pacing, transitions, and audio sync all became part of my daily vocabulary.

### Friday, July 3 — Upload & Review
I uploaded the finished edited videos to **Google Drive for checking**, marking them ready to post. Wrapping up a creative deliverable felt just as rewarding as merging code.

### Reflection
This week showed me that **versatility is a superpower**. Being able to switch between code and creative work made me more valuable to the team.`,
  },
  {
    slug: "week-4-accounting-ui-and-tutorial-videos",
    title: "Week 4 — Accounting UI Enhancements & 7 Tutorial Videos",
    excerpt:
      "Enhancing the accounting system UI for responsiveness and producing a complete set of 7 tutorial videos for the Clinix+ app.",
    weekNumber: 4,
    startDate: "July 6, 2026",
    endDate: "July 10, 2026",
    totalHours: 40.5,
    remainingHours: 162,
    coverAccent: "orange",
    tags: "Accounting System,Responsive UI,Tutorial Videos,Clinix+",
    highlights: "Enhanced accounting UI;Produced 7 tutorial videos;Cross-functional work",
    content: `## Balancing Design, Code & Content

Week 4 was a balancing act between improving an existing system and producing educational content for end users.

### Monday, July 6 — Accounting UI Enhancements
I continued **enhancing the UI of the accounting system**, focusing on making each page in the menu **more responsive**. Responsive design isn't just about fitting screens — it's about making every interaction feel natural on any device.

### Tuesday, July 7 — Weekly Sync
I had a **meeting with the project manager** to report on the previous week's tasks. These regular check-ins kept everyone aligned and gave me a chance to raise blockers early.

### Wednesday, July 8 — Clinix+ Demo Videos
I was assigned to **create and edit a demonstration video for the company's Clinix+ application**. This required me to deeply understand the app's features so I could showcase them clearly.

### Thursday, July 9 — Tutorial Editing Continues
I continued editing the demonstration and tutorial videos, refining the script, pacing, and visual clarity. Each video had to teach a specific feature end-to-end.

### Friday, July 10 — 7 Videos Complete
By the end of the week, I had **finished a total of 7 tutorial videos**. Seeing the full set lined up was a tangible reminder of how much content a focused week can produce.

### Reflection
This week taught me that **documentation is a product too**. A great app is only as useful as the user's ability to understand it.`,
  },
  {
    slug: "week-5-payslip-fixes-and-full-stack-testing",
    title: "Week 5 — Payslip Fixes & Full-Stack Testing",
    excerpt:
      "Enhancing and testing the payslip feature, pulling a new backend, and polishing the UI across employee and payroll pages.",
    weekNumber: 5,
    startDate: "July 13, 2026",
    endDate: "July 17, 2026",
    totalHours: 40.5,
    remainingHours: 121.5,
    coverAccent: "rose",
    tags: "Payslip,Payroll,Full-Stack Testing,UI Polish",
    highlights: "Fixed payslip UI;Pulled new backend;Full-stack testing",
    content: `## Diving Deeper Into the Payroll System

Week 5 pushed me further into the company's payroll and employee management features — a domain where accuracy matters enormously.

### Monday, July 13 — Dev Sync
I met with the **company developer** to review the progress of each system. Cross-team visibility helped me understand how my frontend work fit into the bigger picture.

### Tuesday, July 14 — Payslip UI Enhancements
I continued **enhancing the UI**, with special focus on **fixing the payslip of each employee**. Payslips need to be pixel-perfect — they're legal documents that employees rely on.

### Wednesday, July 15 — Testing the Payslip
I tested the **updated UI and function of the payslip page**, making sure every value rendered correctly and every edge case behaved as expected.

### Thursday, July 16 — Pulling the New Backend
I pulled a **new updated backend** so we could proceed with **full testing between frontend and backend**. This was the moment frontend and backend had to truly talk to each other.

### Friday, July 17 — UI Polish
I spent the day **polishing the UI** to check for bugs and errors. The devil really is in the details — small visual inconsistencies can erode user trust.

### Reflection
This week reinforced that **testing is not optional**. In payroll systems especially, a small bug can have real-world consequences.`,
  },
  {
    slug: "week-6-payroll-page-and-sploop-arcade",
    title: "Week 6 — Fixing the Payroll Page & A Surprise Field Trip",
    excerpt:
      "Fixing the payroll page to be fully functional, polishing multiple payroll-related pages, and joining a business advertising event at Sploop Arcade Davao.",
    weekNumber: 6,
    startDate: "July 20, 2026",
    endDate: "July 24, 2026",
    totalHours: 40.5,
    remainingHours: 81,
    coverAccent: "violet",
    tags: "Payroll Page,Debugging,Field Event,Sploop Arcade",
    highlights: "Made payroll page functional;Joined Sploop Arcade event;Polished 3 payroll pages",
    content: `## Code, Debugging & Getting Out of the Office

Week 6 mixed deep technical work with a memorable off-site experience.

### Monday, July 20 — Progress Sync
I met with the **project manager** to review the previous week's progress. These Monday meetings became a rhythm I looked forward to — they gave the week direction.

### Tuesday, July 21 — Payroll Page Task
I was assigned to **fix the payroll page so it would be fully functional**. This was one of the more complex tasks I'd tackled, requiring careful coordination between the UI and the underlying data.

### Wednesday, July 22 — Sploop Arcade Davao
I was **invited to Sploop Arcade Davao** for a business advertising event. Stepping outside the office to see how the company markets itself gave me a new appreciation for the business side of software.

### Thursday, July 23 — Testing & Debugging
I continued the assigned task, **testing and debugging the frontend**. Each bug I squashed made the payroll page more reliable.

### Friday, July 24 — Triple Polish
I polished the UI to check for bugs and errors across **three pages**: employee, payroll processing, and payslip. Consistency across all three was the goal.

### Reflection
This week reminded me that **internships aren't just about keyboards** — they're about understanding the business and the people you build for.`,
  },
  {
    slug: "week-7-enhancements-and-ai-training",
    title: "Week 7 — Enhancements, Office Life & AI Training",
    excerpt:
      "Implementing suggestion-based website enhancements, cleaning the office, and attending company training on AI automation and quality assurance.",
    weekNumber: 7,
    startDate: "July 27, 2026",
    endDate: "July 31, 2026",
    totalHours: 40.5,
    remainingHours: 40.5,
    coverAccent: "cyan",
    tags: "Enhancements,AI Training,Quality Assurance,Office Life",
    highlights: "Implemented suggestion enhancements;Attended AI automation training;QA training",
    content: `## Learning From Suggestions & From the Company

Week 7 was about applying feedback, contributing to office life, and expanding my horizons with company training.

### Monday, July 27 — System Update & Dev Sync
I started by **updating the system** and checking for new merge updates, then met with the company developer. Staying current with merges prevented nasty conflicts later.

### Tuesday, July 28 — Notes for Enhancement
I met with the **project manager** to review the previous week's work and **took notes on enhancement suggestions**. Capturing feedback in writing made it actionable.

### Wednesday, July 29 — Implementing Suggestions
I started working on the **suggestion-based enhancements for the website**. Turning abstract feedback into concrete UI improvements is one of the most satisfying parts of frontend work.

### Thursday, July 30 — Office Life & Debugging
I helped **clean the office** — a small but meaningful reminder that everyone pitches in — then continued testing and debugging the frontend.

### Friday, July 31 — AI Automation & QA Training
I was **invited to the company training on AI automation and quality assurance**. Learning how AI is shaping QA workflows opened my eyes to where the industry is heading.

### Reflection
This week showed me that **growth comes from many sources** — feedback, training, and even the simple act of keeping a shared space tidy.`,
  },
  {
    slug: "week-8-final-merges-and-farewell",
    title: "Week 8 — Final Merges & Saying Goodbye",
    excerpt:
      "The final week: creating pull requests for the last frontend updates, resolving merge errors, and wrapping up 324 hours of internship work.",
    weekNumber: 8,
    startDate: "August 3, 2026",
    endDate: "August 7, 2026",
    totalHours: 40.5,
    remainingHours: 0,
    coverAccent: "emerald",
    tags: "Final Week,Pull Request,Merge Conflicts,Reflection",
    highlights: "Created final pull requests;Resolved merge errors;Completed 324 hours",
    content: `## The Final Stretch

Week 8 was the closing chapter of my internship — a week of final merges, last-minute fixes, and reflection on everything I'd learned.

### Monday, August 3 — Final Task Briefing
I met with the **project manager** to review the previous week's work and receive the **final task for the final week**. Knowing it was the last set of assignments made every task feel meaningful.

### Tuesday, August 4 — Final Pull Request
I **created a pull request for the merge of the new frontend update**. Submitting it felt like handing in the last page of a long, rewarding chapter.

### Wednesday, August 5 — Resolving Merge Errors
I spent the day **resolving a problem caused by an error during the merge**. Merge conflicts are frustrating, but working through them carefully is a rite of passage for any developer.

### Thursday, August 6 — One More Update
I **created and sent another pull request** for an additional frontend update. Even in the final days, there was work to be done — and I wanted to leave the codebase better than I found it.

### Friday, August 7 — Final Day
The **final day of work**. I made sure all accomplished work was complete and properly handed off. Saying goodbye to the team was bittersweet.

### Reflection
Over 8 weeks and **324 total hours**, I grew from a nervous intern into a developer who could refactor UIs, fix real bugs, edit videos, attend business events, and contribute to production code. This internship at **AQUILA Software Corporation** gave me the foundation I needed to start my career with confidence.

Thank you to my OJT Coordinator, **Virgilio F. Tuga Jr., MSCS (CAR)**, and to everyone at Aquila who mentored me along the way.`,
  },
];

async function main() {
  console.log("Seeding blog posts...");

  // Clear existing posts
  await db.blogPost.deleteMany({});

  for (const post of posts) {
    await db.blogPost.create({
      data: post,
    });
    console.log(`  ✓ Created: ${post.title}`);
  }

  console.log(`\nSeeded ${posts.length} blog posts successfully!`);
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
