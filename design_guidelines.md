# Design Guidelines for Keren Zhang's Resume Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern professional portfolio sites like Linear and Notion for clean, content-focused design with subtle interactive elements.

## Core Design Elements

### Color Palette
- **Primary Brand**: #2b2e77 (Deep Blue) - Used for headers, navigation, and primary text
- **Accent Color**: #f29a76 (Warm Coral) - Used sparingly for CTAs, hover states, and highlights
- **Supporting Colors**: 
  - Text: 220 15% 20% (Dark gray for body text)
  - Background: 0 0% 98% (Off-white primary background)
  - Subtle Background: 220 20% 96% (Light gray for sections)
  - Border: 220 10% 85% (Light borders and dividers)

### Typography
- **Primary Font**: Inter (Google Fonts) - Clean, professional sans-serif
- **Hierarchy**: 
  - H1: 2.5rem, bold (Name/main headers)
  - H2: 1.75rem, semibold (Section titles)
  - H3: 1.25rem, medium (Subsection titles)
  - Body: 1rem, regular (Standard text)
  - Small: 0.875rem (Supporting text, dates)

### Layout System
**Tailwind Spacing**: Primary units of 4, 6, 8, 12, 16
- Consistent padding: p-6 for cards, p-8 for main sections
- Margins: mb-8 between sections, mb-4 between elements
- Grid gaps: gap-6 for card layouts

### Component Library

#### Navigation
- Fixed top navigation with transparent background and subtle shadow on scroll
- Logo/name on left, centered dropdown menu items
- Dropdown menus with smooth fade animations and subtle shadows
- Active states using the accent color

#### Cards & Sections
- Clean white cards with subtle shadows (shadow-sm)
- Rounded corners (rounded-lg)
- Consistent padding and hover effects
- Skills displayed as rounded tags with light backgrounds

#### Buttons
- Primary: Solid coral (#f29a76) background
- Secondary: Outline style with deep blue border
- Download button prominently placed with icon
- Subtle hover states with slight scale and shadow changes

#### Content Organization
- Hero section with centered layout
- Two-column layout for skills and contact information
- Timeline-style layout for education and experience sections
- Clean typography hierarchy with proper spacing

### Animations
- **Minimal and Purposeful**: 
  - Subtle fade-in animations for page load
  - Smooth dropdown menu transitions (200ms ease)
  - Gentle hover effects on interactive elements
  - No distracting or complex animations

### Responsive Design
- Mobile-first approach
- Navigation collapses to hamburger menu on mobile
- Single-column layout on smaller screens
- Maintain readability and touch-friendly interactions

### Professional Aesthetic
- Emphasis on whitespace and clean lines
- Content-focused design that lets information breathe
- Subtle use of the coral accent color to avoid overwhelming
- Professional typography and spacing throughout
- Clear visual hierarchy guiding the user's attention

### Images
No large hero images required. This is a text-focused professional resume site that relies on clean typography and layout rather than imagery. Any icons should be simple line icons in the primary brand color.