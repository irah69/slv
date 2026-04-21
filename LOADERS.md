# Loader Components Documentation

## Overview
Beautiful, joyful spinning loaders optimized for the Banquet Hall website with a black theme. All loaders use vibrant golden and warm colors that stand out against dark backgrounds.

## Available Loaders

### 1. **Golden Gradient Spinner** (Default Loader)
**File**: `src/components/Loader.tsx`

A smooth, elegant spinning circle with a golden gradient that matches the banquet theme perfectly.

```tsx
import Loader from '@/components/Loader';

export default function Page() {
  return <Loader />;
}
```

**Features**:
- Smooth 3-second rotation
- Golden gradient conic animation
- Inner core that glows
- Minimal and elegant
- "Loading..." text indicator

---

### 2. **Golden Gradient Variant**
**File**: `src/components/LoaderVariants.tsx`

```tsx
import { GoldenSpinner } from '@/components/LoaderVariants';

export default function Page() {
  return <GoldenSpinner />;
}
```

- Fastest performer
- Pure CSS animation
- No glow effect variant

---

### 3. **Rainbow Ring Loader**
**File**: `src/components/LoaderVariants.tsx`

```tsx
import { RainbowRingLoader } from '@/components/LoaderVariants';

export default function Page() {
  return <RainbowRingLoader />;
}
```

**Features**:
- Multicolor border ring
- Orange, pink, and cyan colors
- 2-second rotation
- Dynamic and playful

---

### 4. **Pulsing Dots Loader**
**File**: `src/components/LoaderVariants.tsx`

```tsx
import { PulsingDotsLoader } from '@/components/LoaderVariants';

export default function Page() {
  return <PulsingDotsLoader />;
}
```

**Features**:
- Three bouncing dots
- Warm gradient (orange → yellow → light yellow)
- Bouncing animation
- Cheerful and friendly

---

### 5. **Double Ring Loader**
**File**: `src/components/LoaderVariants.tsx`

```tsx
import { DoubleRingLoader } from '@/components/LoaderVariants';

export default function Page() {
  return <DoubleRingLoader />;
}
```

**Features**:
- Outer and inner rotating rings
- Counter-rotating animation
- Sophisticated appearance
- 2-second outer, 1.5-second inner rotation

---

### 6. **Loader Demo Page**
**URL**: `/loader-demo`

View all 6 loader variants in action:

```
http://localhost:3000/loader-demo
```

---

## Color Palette

All loaders use the same joyful warm color scheme:

| Color | Hex | Usage |
|-------|-----|-------|
| Golden Orange | `#fb923c` | Primary color |
| Warm Gold | `#fbbf24` | Secondary |
| Light Gold | `#fcd34d` | Accent |
| Pale Gold | `#facc15` | Tertiary |
| Pink | `#ec4899` | Rainbow ring |
| Cyan | `#06b6d4` | Rainbow ring |

---

## Usage Examples

### In a Layout with Suspense
```tsx
import { Suspense } from 'react';
import Loader from '@/components/Loader';

export default function Layout() {
  return (
    <Suspense fallback={<Loader />}>
      <YourContent />
    </Suspense>
  );
}
```

### In a Page with Loading State
```tsx
'use client';

import { useState, useEffect } from 'react';
import { GoldenSpinner } from '@/components/LoaderVariants';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <GoldenSpinner />;

  return <div>Your Content</div>;
}
```

### Customize Size
```tsx
import Loader from '@/components/Loader';

export default function Page() {
  return (
    <div style={{ transform: 'scale(0.5)' }}>
      <Loader />
    </div>
  );
}
```

---

## Technical Details

- **Animation Type**: CSS keyframes (no JavaScript animations)
- **Performance**: Highly optimized, GPU-accelerated
- **Browser Support**: All modern browsers
- **Theme**: Dark background (black) with warm colors
- **Responsive**: Works on all screen sizes

---

## Customization

To modify colors, edit the `conic-gradient` or `border-color` properties in the component styles:

```css
background: conic-gradient(
  from 0deg,
  #your-color-1 0deg,
  #your-color-2 90deg,
  #your-color-3 180deg,
  #your-color-4 270deg,
  #your-color-1 360deg
);
```

---

## Demo Page

Visit `/loader-demo` to see all loaders in action with side-by-side comparison.

