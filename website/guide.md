# Website Generation Guide: mrt.DISCOVERY

This document serves as a comprehensive specification for generating the **mrt.DISCOVERY** website. It outlines the technical requirements, design system, content structure, and animation logic needed to build a premium, high-impact discovery platform.

## 1. Project Overview

**mrt.DISCOVERY** is a dynamic food and travel brand. The website connects the audience with:

- **Food Discovery**: Reviews and visits to restaurants/eateries.
- **Recipes**: Home-cooked meals and recipes shared by the creators.
- **Travel**: Vlogs and travel experiences (future focus).
- **Community**: Events and giveaways.

## 2. Technical Requirements

The website must be built using the following stack to ensure performance and precise animation control:

- **Core**: Semantic **HTML5**, **CSS3** (Vanilla), and **JavaScript** (ES6+).
- **Animation Engine**: **GSAP (GreenSock Animation Platform)**.
- **Plugins**: **ScrollTrigger** (for scroll-driven interactions).
- **Constraint**: No heavy frameworks (React/Vue) unless necessary for scalability later. The current focus is on a high-performance, animation-heavy landing page.

## 3. Design System

### Color Palette

- **Primary**: **Red** (Dominant brand color).
- **Secondary**: **White** (Backgrounds, text contrast).
- **Accents**: Soft grays for shadows or subtle depth.

### Visual Style

- **Minimalist**: Clean layouts with ample whitespace.
- **Components**: Rounded corners on cards and containers.
- **Depth**: Soft, subtle shadows to lift elements off the page.
- **Typography**: Modern, bold sans-serif fonts (e.g., _Inter_, _Roboto_, or _Outfit_) to convey a premium feel.

### Motion & Interaction

- **Feel**: Highly elastic, "spring-like" animations. Elements should feel alive and responsive.
- **Easing**: Use `Elastic.easeOut` or `Back.easeOut` for entrances.

## 4. Interaction Logic (Scroll-Jacking)

The website uses a "pinned" scroll architecture:

1.  **Long Page Height**: The `<body>` or a wrapper div should be set to a large height (e.g., `5000px`) to create scrollable space.
2.  **Pinned Container**: The main visual content lives in a full-screen container that is **pinned** in place using ScrollTrigger.
3.  **Scrubbing**: User scrolling does _not_ move the page content linearly. Instead, it scrubs through a GSAP Timeline (`scrub: 1`).
4.  **Progress**: As the user scrolls down, the timeline advances, transitioning between sections (slides) using transforms, opacity fades, or scale effects.

## 5. Content Sections & Flow

The animation timeline should progress through these sections in order:

### Section 1: Hero / Brand Intro

- **Visuals**: High-impact branding (Logo: mrt.DISCOVERY).
- **Vibe**: Energetic, welcoming.

### Section 2: Food Discovery

- **Content**: "We visit restaurants and find good food."
- **Elements**:
  - Gallery or carousel of food images.
  - Restaurant names/locations.
  - "Watch Video" or "Read Review" call-to-actions.

### Section 3: Food Recipes

- **Content**: "We cook ourselves and share with you."
- **Elements**:
  - Recipe cards (Dish name, photo, difficulty/time).
  - Focus on the "Home Cooked" aspect.

### Section 4: Travel (Coming Soon)

- **Content**: Travel videos and vlogs.
- **Status**: Placeholder or "Future Adventures" teaser.
- **Visuals**: Map motifs, airplanes, or scenic shots.

### Section 5: Events & Giveaways

- **Content**: Community engagement.
- **Elements**:
  - Photos from past food events.
  - Information on active or past giveaways.

### Section 6: Connect (Socials)

# Website Generation Guide: mrt.DISCOVERY

This document serves as a comprehensive specification for generating the **mrt.DISCOVERY** website. It outlines the technical requirements, design system, content structure, and animation logic needed to build a premium, high-impact discovery platform.

## 1. Project Overview

**mrt.DISCOVERY** is a dynamic food and travel brand. The website connects the audience with:

- **Food Discovery**: Reviews and visits to restaurants/eateries.
- **Recipes**: Home-cooked meals and recipes shared by the creators.
- **Travel**: Vlogs and travel experiences (future focus).
- **Community**: Events and giveaways.

## 2. Technical Requirements

The website must be built using the following stack to ensure performance and precise animation control:

- **Core**: Semantic **HTML5**, **CSS3** (Vanilla), and **JavaScript** (ES6+).
- **Animation Engine**: **GSAP (GreenSock Animation Platform)**.
- **Plugins**: **ScrollTrigger** (for scroll-driven interactions).
- **Constraint**: No heavy frameworks (React/Vue) unless necessary for scalability later. The current focus is on a high-performance, animation-heavy landing page.

## 3. Design System

### Color Palette

- **Primary**: **Red** (Dominant brand color).
- **Secondary**: **White** (Backgrounds, text contrast).
- **Accents**: Soft grays for shadows or subtle depth.

### Visual Style

- **Minimalist**: Clean layouts with ample whitespace.
- **Components**: Rounded corners on cards and containers.
- **Depth**: Soft, subtle shadows to lift elements off the page.
- **Typography**: Modern, bold sans-serif fonts (e.g., _Inter_, _Roboto_, or _Outfit_) to convey a premium feel.

### Motion & Interaction

- **Feel**: Highly elastic, "spring-like" animations. Elements should feel alive and responsive.
- **Easing**: Use `Elastic.easeOut` or `Back.easeOut` for entrances.

## 4. Interaction Logic (Scroll-Jacking)

The website uses a "pinned" scroll architecture:

1.  **Long Page Height**: The `<body>` or a wrapper div should be set to a large height (e.g., `5000px`) to create scrollable space.
2.  **Pinned Container**: The main visual content lives in a full-screen container that is **pinned** in place using ScrollTrigger.
3.  **Scrubbing**: User scrolling does _not_ move the page content linearly. Instead, it scrubs through a GSAP Timeline (`scrub: 1`).
4.  **Progress**: As the user scrolls down, the timeline advances, transitioning between sections (slides) using transforms, opacity fades, or scale effects.

## 5. Content Sections & Flow

The animation timeline should progress through these sections in order:

### Section 1: Hero / Brand Intro

- **Visuals**: High-impact branding (Logo: mrt.DISCOVERY).
- **Vibe**: Energetic, welcoming.

### Section 2: Food Discovery

- **Content**: "We visit restaurants and find good food."
- **Elements**:
  - Gallery or carousel of food images.
  - Restaurant names/locations.
  - "Watch Video" or "Read Review" call-to-actions.

### Section 3: Food Recipes

- **Content**: "We cook ourselves and share with you."
- **Elements**:
  - Recipe cards (Dish name, photo, difficulty/time).
  - Focus on the "Home Cooked" aspect.

### Section 4: Travel (Coming Soon)

- **Content**: Travel videos and vlogs.
- **Status**: Placeholder or "Future Adventures" teaser.
- **Visuals**: Map motifs, airplanes, or scenic shots.

### Section 5: Events & Giveaways

- **Content**: Community engagement.
- **Elements**:
  - Photos from past food events.
  - Information on active or past giveaways.

### Section 6: Connect (Socials)

- **Links**:
  - [YouTube Channel](https://www.youtube.com/channel/UCO2yqd_Hbs1hkmPJ6oLwygQ)
  - [Instagram (@mrt.discovery)](https://www.instagram.com/mrt.discovery/tagged/)
  - [TikTok (@mrt.discovery)](https://www.tiktok.com/@mrt.discovery)
- **Layout**: Large, interactive social icons. Footer information.

## 6. Generated Assets

Use these high-quality generated assets for the respective sections:

| Section             | Asset                                                                                                                                                  | Description                            |
| :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------- |
| **Hero Background** | ![Hero Background](file:///C:/Users/Henry%20Choo/.gemini/antigravity/brain/28e89a6f-8b76-4b2f-8250-6a91c3332ee4/mrt_hero_background_1765881663040.png) | Abstract red/white wave pattern.       |
| **Food Discovery**  | ![Food Discovery](file:///C:/Users/Henry%20Choo/.gemini/antigravity/brain/28e89a6f-8b76-4b2f-8250-6a91c3332ee4/mrt_food_discovery_1765881681983.png)   | Spread of delicious Asian street food. |
| **Recipes**         | ![Cooking Recipe](file:///C:/Users/Henry%20Choo/.gemini/antigravity/brain/28e89a6f-8b76-4b2f-8250-6a91c3332ee4/mrt_cooking_recipe_1765881702616.png)   | Top-down view of cooking preparation.  |
| **Travel**          | ![Travel Vlog](file:///C:/Users/Henry%20Choo/.gemini/antigravity/brain/28e89a6f-8b76-4b2f-8250-6a91c3332ee4/mrt_travel_vlog_1765881722832.png)         | Scenic landscape with travel gear.     |

## 7. Implementation Prompt (for AI/Developer)

_Use this prompt to generate the code:_

> "Create a single-page website for 'mrt.DISCOVERY' using HTML, CSS, and GSAP with ScrollTrigger.
>
> **Design**:
>
> - Theme: Red and White. Minimalist, rounded cards, soft shadows.
> - Font: Modern Sans-Serif.
>
> **Assets**:
>
> - Hero Background: `mrt_hero_background.png`
> - Food Image: `mrt_food_discovery.png`
> - Recipe Image: `mrt_cooking_recipe.png`
> - Travel Image: `mrt_travel_vlog.png`
>
> **Structure**:
>
> - Create a `div` with `height: 5000px` to enable scrolling.
> - Create a fixed/pinned full-screen container for content.
>
> **Animation**:
>
> - Use a GSAP Timeline linked to the scroll (`scrub: 1`).
> - Animate 5 sections (Hero, Food Discovery, Recipes, Travel, Events/Socials) entering and exiting the screen.
> - Use elastic/spring easing for element entrances.
>
> **Sections**:
>
> 1. **Hero**: Brand Logo over the abstract background.
> 2. **Food Discovery**: Cards showing restaurant reviews with the food image.
> 3. **Recipes**: Cards showing home-cooked meals with the cooking image.
> 4. **Travel**: Placeholder for travel videos using the travel image.
> 5. **Socials**: Links to YouTube, Instagram, TikTok (use FontAwesome icons).
>
> Ensure the code is responsive and handles the scroll-scrubbing smoothly."
