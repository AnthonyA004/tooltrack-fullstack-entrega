---
name: Precision Utility
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf4'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dde9ff'
  surface-container-highest: '#d5e3fd'
  on-surface: '#0d1c2f'
  on-surface-variant: '#444653'
  inverse-surface: '#233144'
  inverse-on-surface: '#ebf1ff'
  outline: '#757684'
  outline-variant: '#c4c5d5'
  surface-tint: '#3755c3'
  primary: '#00288e'
  on-primary: '#ffffff'
  primary-container: '#1e40af'
  on-primary-container: '#a8b8ff'
  inverse-primary: '#b8c4ff'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#611e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#872d00'
  on-tertiary-container: '#ffa583'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c4ff'
  on-primary-fixed: '#001453'
  on-primary-fixed-variant: '#173bab'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb59a'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#802a00'
  background: '#f8f9ff'
  on-background: '#0d1c2f'
  surface-variant: '#d5e3fd'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  gutter: 20px
  margin: 24px
---

## Brand & Style

This design system is built for ToolTrack, a tool management system that prioritizes efficiency, precision, and technical reliability. The brand personality is industrious yet sophisticated, catering to professionals who value order and clarity in complex workflows.

The design style follows a **Corporate / Modern** approach with a "Technical Edge." It leverages high-density layouts, subtle structural lines, and generous whitespace to ensure data is digestible and actions are unambiguous. The aesthetic is intentionally understated to allow the utility of the tools and inventory to take center stage, evoking a sense of calm control and professional mastery.

## Colors

The palette is rooted in functional professionalism. 

- **Primary (Deep Blue):** Used for critical actions, navigation states, and primary buttons. It signals stability and authority.
- **Secondary (Teal):** Applied to success states, active status indicators, and subtle highlights to provide a refreshing contrast to the cooler blues and grays.
- **Neutral (Slate Gray):** The foundation for text hierarchies and iconography. Using slate instead of pure black maintains a modern, "tech-first" feel.
- **Backgrounds:** Utilize a very light slate tint to reduce eye strain while maintaining high contrast with white surface containers.

## Typography

The typography system utilizes **Inter** for its exceptional legibility and neutral, systematic appearance. To reinforce the technical nature of "tool management," **JetBrains Mono** is introduced for labels, serial numbers, and metadata, providing a distinctive "data-driven" character.

- **Headlines:** Use tight tracking and semi-bold weights to create a strong visual anchor.
- **Body:** Optimized for readability with a slightly increased line height (1.5x).
- **Labels:** Monospaced fonts should be used for status badges, IDs, and technical specifications to differentiate dynamic data from static UI text.

## Layout & Spacing

The design system employs a **Fluid Grid** model with a 12-column structure for desktop and a 4-column structure for mobile. 

- **The 4px Rule:** All spacing and sizing increments must be multiples of 4px to ensure perfect alignment and visual rhythm.
- **Content Density:** The system leans towards a "Moderate-to-High" density. Information is packed efficiently but separated by subtle `1px` borders and intentional margins to prevent overcrowding.
- **Breakpoints:**
  - **Mobile:** < 600px (16px margins, 12px gutters)
  - **Tablet:** 600px - 1024px (24px margins, 16px gutters)
  - **Desktop:** > 1024px (Max-width 1440px, 20px gutters)

## Elevation & Depth

To maintain a "clean and precise" aesthetic, this design system avoids heavy shadows. Depth is communicated through:

- **Tonal Layering:** Surfaces are layered using subtle shifts in background color (e.g., a white card on a light slate background).
- **Low-Contrast Outlines:** Instead of shadows, use `1px` solid borders (Slate-200) to define element boundaries.
- **Interactive Depth:** Only the most critical interactive elements (like primary modals) utilize an **Ambient Shadow**: a very soft, highly diffused 10% opacity shadow with no vertical offset, creating a slight "lift" without looking heavy.
- **Active States:** Subtle inset shadows or 2px stroke increases denote pressed or active states.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding takes the "edge" off the industrial aesthetic, making the software feel modern and accessible while retaining a structured, geometric feel.

- **Small Components (Buttons, Inputs, Chips):** Use a `4px` (0.25rem) radius.
- **Large Components (Cards, Modals):** Use an `8px` (0.5rem) radius to create a softer container for dense information.
- **Status Indicators:** Small circles or semi-rounded badges are used for quick visual scanning of tool health.

## Components

- **Buttons:** Primary buttons use the Deep Blue background with white text. Secondary buttons use a Slate-100 background or a simple border.
- **Input Fields:** Precise 1px borders. Focused states utilize a 2px Deep Blue border. Labels are positioned above the field using the JetBrains Mono font for a technical feel.
- **Cards:** White backgrounds with a 1px Slate-200 border. No shadow by default. Headers within cards should have a subtle bottom border to separate titles from content.
- **Chips/Badges:** Used for status (e.g., "In Use", "Maintenance"). Teal is reserved for positive/active states. Use a light background tint with a darker text color for high legibility.
- **Data Tables:** High-density rows with `1px` horizontal dividers only. Alternating row stripes (zebra striping) should be used in very large datasets to maintain tracking.
- **Tool Status Bar:** A persistent accent bar at the top or side of a component using the Teal palette to highlight "Ready" or "Online" status.