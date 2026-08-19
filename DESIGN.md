# Design & Architectural Decisions

## 1. Design Direction
I wanted Tripline to feel clean and editorial. The overall visual style is minimal because the main focus should be the travel journey itself. Instead of heavy cards or drop shadows, I relied on thin borders and simple background colors. The layout uses Tailwind's spacing system to maintain a consistent rhythm. I kept the color palette tightly controlled—mostly black, white, and a dark green accent—so the actual travel content is what draws the eye.

## 2. Visual Hierarchy
I established hierarchy mostly through typography and spacing. Instead of adding a lot of visual effects, I used a clear typographic scale, contrasting large, tightly tracked headings against smaller, wider-tracked labels. The generous spacing between sections helps guide the user down the page naturally. I also made sure the product visualization and primary CTA stand out simply by giving them enough room to breathe.

## 3. Hero & Product Presentation
The hero section starts with the headline "See your whole journey before you take it" and offers a clear "Plan your journey" CTA. Instead of just writing more marketing copy, I put a live visualization of the journey timeline right below the hero text. I also built a detailed `ProductPreview` section further down. I decided to build this mockup entirely with HTML and CSS rather than using a static screenshot so it stays sharp on all screens and feels like a real app.

## 4. Journey / Timeline Design
The core idea is representing a trip visually. I used horizontal and vertical timelines connecting different nodes (like flights, hotels, and activities). For example, a line traces the route from Delhi to Jaipur, showing how the days connect. I chose a timeline format because simply listing destinations in a grid doesn't communicate how a trip actually flows. The journey itself is the product story.

## 5. Motion & Interaction
I used Framer Motion for scroll reveals and some scroll-triggered animations. I kept the movement subtle. Most elements just fade in and slide up slightly as you scroll down the page. There are also some timeline animations linked to scroll position. I didn't want the page to turn into an animation showcase, so I made sure the motion supports the journey visualization instead of distracting from it.

## 6. Smooth Scrolling
I implemented Lenis smooth scrolling using a custom `useLenis` hook. I added this because I have several scroll-linked animations (like the timeline drawing itself), and native scrolling can sometimes feel a bit rigid or jumpy during these interactions. Lenis keeps the scrolling feeling natural and fluid without taking away control from the user.

## 7. Responsive Design
The layout is responsive from mobile (tested around 390px) up to large desktop monitors (1440px). On smaller screens, the horizontal timelines and multi-column layouts stack vertically so they remain readable. I adjusted the typography scaling so the massive desktop headlines don't break awkwardly on mobile. I also made sure to hide the desktop navigation links behind a simpler mobile view and verified that the page avoids any horizontal overflow.

## 8. Dark Mode
I included a working dark mode with a toggle in the navigation bar. When active, it switches the background from a warm ivory to a deep dark color (`#0a0a0a`), and updates the text, borders, and UI elements to maintain readable contrast. I wanted it to feel like a true alternative theme rather than just an inverted color scheme.

## 9. What I Deliberately Avoided
I made a few intentional choices about what not to include. I avoided excessive gradients, heavy glassmorphism, and unnecessary 3D elements. I also didn't use a bento-grid layout, which is popular but didn't fit this project. More importantly, I avoided fake testimonials, fake user statistics, and fake company logos. I wanted the page to rely on the strength of the product idea itself.

## 10. Performance / Accessibility
I tried to keep practical performance in mind. I used semantic HTML elements where possible. For the animations, I stuck to animating properties like `transform` and `opacity`, which are cheap for the browser to render. I also made sure the text contrast is readable in both light and dark modes.

## 11. Final Design Reasoning
The main goal was to make the user understand the journey visually instead of explaining everything with text. The overall experience should naturally move the user's understanding from a single DESTINATION to a connected ROUTE, leading to the full JOURNEY, and finally visualizing the COMPLETE TRIP.
