# SolarLive Design System - Theme Consistency Guide

## Brand Colors (Defined in theme.css)
- **Primary**: `#D67506` (Orange)
- **Foreground**: `#0F172A` (Dark Navy)
- **Secondary**: `#F8FAFC` (Light Gray)
- **Muted**: `#F9FAFB` (Ultra Light Gray)
- **Muted Foreground**: `#6B7280` (Medium Gray)
- **White**: `#ffffff`
- **Border**: `rgba(0, 0, 0, 0.08)`

## Typography
- **Headings**: IBM Plex Sans (`var(--font-display)`)
- **Body**: Inter (`var(--font-sans)`)
- **H1**: 40px (2.5rem), weight 600, line-height 1.2, letter-spacing -0.025em
- **H2**: 32px (2rem), weight 600, line-height 1.25, letter-spacing -0.02em
- **H3**: 24px (1.5rem), weight 600, line-height 1.35, letter-spacing -0.015em
- **Body**: 16px (1rem), line-height 1.7

## Standard Components

### 1. Hero Sections (Premium Pattern)
```tsx
<section className="bg-gradient-to-br from-foreground via-[#0A0F1E] to-foreground py-32 text-white relative overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-20" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl opacity-30" />
  </div>
  <div className="absolute inset-0 bg-[linear-gradient(rgba(214,117,6,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(214,117,6,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
  
  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
    {/* Content */}
  </div>
</section>
```

### 2. Section Label Badges
```tsx
<div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/20 to-violet-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
  <Icon className="w-3 h-3" />
  SECTION LABEL
</div>
```

### 3. Section Titles with Labels
```tsx
<div className="text-center max-w-3xl mx-auto mb-16">
  <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
    SECTION LABEL
  </p>
  <h2 className="mb-5">Section Title</h2>
  <p className="text-[16px] text-muted-foreground leading-relaxed">
    Section description
  </p>
</div>
```

### 4. Feature Cards
```tsx
<div className="bg-white border border-primary/10 rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all">
  <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-6">
    <Icon className="w-7 h-7 text-primary" />
  </div>
  <h3 className="text-[20px] font-bold text-foreground mb-4">Title</h3>
  <p className="text-[15px] text-muted-foreground leading-relaxed">Description</p>
</div>
```

### 5. Dark CTA Sections
```tsx
<section className="py-24 bg-gradient-to-br from-foreground to-[#0A0F1E] text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(214,117,6,0.15),transparent_50%)]" />
  
  <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
    {/* Content */}
  </div>
</section>
```

### 6. Icon Sizing Standards
- **Small icons (badges)**: `w-3 h-3` (12px)
- **Medium icons (feature cards)**: `w-6 h-6` or `w-7 h-7` (24-28px)
- **Large icons**: `w-8 h-8` or `w-10 h-10` (32-40px)

## Section Background Patterns
1. **White sections**: `bg-white`
2. **Light sections**: `bg-muted/30` or `bg-gradient-to-b from-muted/30 to-white`
3. **Dark sections**: `bg-gradient-to-br from-foreground to-[#0A0F1E]`
4. **Accent bars**: `bg-gradient-to-r from-primary/10 to-orange-600/10 border-y border-primary/20`

## Spacing Standards
- **Section padding**: `py-24` (96px vertical)
- **Hero padding**: `py-32` (128px vertical)
- **Container**: `max-w-7xl mx-auto px-6 lg:px-8`
- **Content width**: `max-w-3xl` or `max-w-4xl` for text-heavy sections

## Border Radius Standards
- **Cards**: `rounded-2xl` (16px)
- **Buttons**: `rounded-md` (6px)
- **Badges**: `rounded-full`
- **Icons containers**: `rounded-xl` (12px)

## Animation Standards
```tsx
// Scroll animations
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: idx * 0.1 }}

// Hover effects
hover:shadow-xl hover:border-primary/30 transition-all duration-300
```

## Button Styles
- **Primary**: Uses theme primary color automatically
- **Size large**: `size="lg"` with `className="h-12 px-10 text-[15px]"`
- **Outline**: `variant="outline"` with custom border colors

## Consistent Patterns by Page Type

### Product/Feature Pages:
1. Premium hero with gradient background
2. Key metrics/stats bar (if applicable)
3. Core capabilities section (white background)
4. Technical specs section (muted background)
5. Use cases or benefits (white background)
6. CTA section (dark gradient)

### About/Content Pages:
1. Premium hero with gradient background
2. Content sections alternating white/muted
3. Timeline or milestones (if applicable)
4. Team or values grid
5. CTA section (dark gradient)

### Resource Pages:
1. Premium hero
2. Category grid or list (white)
3. Featured content (alternating backgrounds)
4. CTA section (dark gradient)

## DO NOT USE:
- Random color values (always use theme colors)
- Inconsistent spacing (stick to py-24, py-32)
- Mixed border radius (use standards above)
- Inconsistent icon sizes
- Different gradient patterns (use approved patterns)

## Key Takeaway:
**Every page should feel like it belongs to the same premium, enterprise-grade platform with consistent visual language, spacing, and interactions.**
