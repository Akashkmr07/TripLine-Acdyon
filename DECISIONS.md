# Decisions
## 1. Why This Approach

I chose to build the landing page around a visual scrolling timeline instead of a standard layout with isolated destination cards. The core idea of Tripline is connecting scattered travel plans into a single flow. By using a continuous line that connects flights, stays, and activities (especially in the JourneyReveal and JourneyTimeline sections), the user can immediately see how the product works just by scrolling. Representing the trip as a connected chronological journey makes the concept much easier to understand than trying to explain it with blocks of marketing text.

## 2. Time-Limit Trade-off

With the limited time available, I prioritized building a polished frontend landing page and a code-based visual mockup over creating a working travel planner backend. I focused on getting the responsive layout, the Framer Motion scroll animations, and the visual hierarchy right because those were the most important elements for demonstrating the core idea. I deliberately did not build any real application state, database, or editable drag-and-drop features. If I had more time, I would turn the static product preview into an interactive component where users could actually add, remove, or reorder destinations, and I would tie the timeline to real application state.

## 3. AI-Assisted Work
I used AI assistance mainly for implementing the dark-mode toggle logic and setting up the Framer Motion scroll reveals and scroll-triggered animations. I reviewed the generated implementation, adjusted the code to fit into my existing component structure and Tailwind config, and verified the behavior in the browser to make sure it felt right.

## 4. What I Personally Verified
Before finalizing the project, I manually checked the layout and can confirm that both the 390px mobile view and the 1440px desktop view are perfectly implemented. I verified that the animations fire correctly, the dark mode switches cleanly without breaking text readability, the timeline scales properly, and that there is absolutely no horizontal overflow on any screen size.
