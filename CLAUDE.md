# Design System & Figma Integration Rules

## Project Overview

**Framework**: Angular 17+ (Standalone Components)  
**Styling**: SCSS  
**Build System**: Angular CLI with Webpack  
**Package Manager**: npm  
**TypeScript Version**: 5.4.2+

---

## 1. Token Definitions

### Current Status
⚠️ **No centralized token system exists yet**

### Recommended Implementation Pattern

Create a dedicated tokens directory structure:

```
src/
├── design-tokens/
│   ├── colors.scss
│   ├── typography.scss
│   ├── spacing.scss
│   ├── shadows.scss
│   ├── breakpoints.scss
│   └── _exports.scss
└── styles/
    └── globals.scss
```

### Token Format (SCSS Variables)

**File: `src/design-tokens/colors.scss`**
```scss
// Primary Colors
$color-primary: #0066CC;
$color-primary-dark: #004FA3;
$color-primary-light: #E6F0FF;

// Semantic Colors
$color-success: #2ECC71;
$color-warning: #F39C12;
$color-error: #E74C3C;
$color-info: #3498DB;

// Neutral Colors
$color-neutral-900: #1A1A1A;
$color-neutral-800: #333333;
$color-neutral-700: #4D4D4D;
$color-neutral-600: #666666;
$color-neutral-500: #808080;
$color-neutral-400: #999999;
$color-neutral-300: #CCCCCC;
$color-neutral-200: #E6E6E6;
$color-neutral-100: #F2F2F2;
$color-white: #FFFFFF;
```

**File: `src/design-tokens/typography.scss`**
```scss
// Font Family
$font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
$font-family-mono: 'Courier New', monospace;

// Font Sizes (Base: 16px)
$font-size-xs: 0.75rem;    // 12px
$font-size-sm: 0.875rem;   // 14px
$font-size-base: 1rem;     // 16px
$font-size-lg: 1.125rem;   // 18px
$font-size-xl: 1.25rem;    // 20px
$font-size-2xl: 1.5rem;    // 24px
$font-size-3xl: 1.875rem;  // 30px
$font-size-4xl: 2.25rem;   // 36px

// Line Heights
$line-height-tight: 1.2;
$line-height-normal: 1.5;
$line-height-relaxed: 1.75;

// Font Weights
$font-weight-regular: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;

// Typography Mixins
@mixin typography-h1 {
  font-size: $font-size-4xl;
  font-weight: $font-weight-bold;
  line-height: $line-height-tight;
}

@mixin typography-h2 {
  font-size: $font-size-3xl;
  font-weight: $font-weight-bold;
  line-height: $line-height-tight;
}

@mixin typography-body {
  font-size: $font-size-base;
  font-weight: $font-weight-regular;
  line-height: $line-height-normal;
}

@mixin typography-caption {
  font-size: $font-size-sm;
  font-weight: $font-weight-regular;
  line-height: $line-height-normal;
  color: $color-neutral-600;
}
```

**File: `src/design-tokens/spacing.scss`**
```scss
// Spacing Scale (8px base unit)
$space-0: 0;
$space-1: 0.25rem;   // 4px
$space-2: 0.5rem;    // 8px
$space-3: 0.75rem;   // 12px
$space-4: 1rem;      // 16px
$space-6: 1.5rem;    // 24px
$space-8: 2rem;      // 32px
$space-10: 2.5rem;   // 40px
$space-12: 3rem;     // 48px
$space-16: 4rem;     // 64px
$space-20: 5rem;     // 80px
$space-24: 6rem;     // 96px

// Border Radius
$radius-none: 0;
$radius-sm: 0.25rem;   // 4px
$radius-md: 0.5rem;    // 8px
$radius-lg: 1rem;      // 16px
$radius-full: 9999px;
```

**File: `src/design-tokens/shadows.scss`**
```scss
// Box Shadows
$shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
$shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
$shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
$shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

**File: `src/design-tokens/breakpoints.scss`**
```scss
// Responsive Breakpoints
$breakpoint-xs: 0;
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;
$breakpoint-2xl: 1400px;

// Breakpoint Mixins
@mixin respond-sm {
  @media (min-width: $breakpoint-sm) {
    @content;
  }
}

@mixin respond-md {
  @media (min-width: $breakpoint-md) {
    @content;
  }
}

@mixin respond-lg {
  @media (min-width: $breakpoint-lg) {
    @content;
  }
}

@mixin respond-xl {
  @media (min-width: $breakpoint-xl) {
    @content;
  }
}

@mixin respond-2xl {
  @media (min-width: $breakpoint-2xl) {
    @content;
  }
}
```

**File: `src/design-tokens/_exports.scss`**
```scss
// Export all tokens
@import './colors.scss';
@import './typography.scss';
@import './spacing.scss';
@import './shadows.scss';
@import './breakpoints.scss';
```

### Token Usage in Components

```typescript
// component.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button class="btn btn-primary">{{ label }}</button>`,
  styleUrl: './button.component.scss',
  standalone: true
})
export class ButtonComponent {
  label = 'Click me';
}
```

```scss
// button.component.scss
@import '@design-tokens/_exports.scss';

.btn {
  padding: $space-4 $space-6;
  font-size: $font-size-base;
  font-weight: $font-weight-medium;
  border-radius: $radius-md;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &-primary {
    background-color: $color-primary;
    color: $color-white;

    &:hover {
      background-color: $color-primary-dark;
    }
  }
}
```

---

## 2. Component Library Architecture

### Directory Structure

```
src/app/
├── components/              # Reusable UI components
│   ├── button/
│   │   ├── button.component.ts
│   │   ├── button.component.html
│   │   ├── button.component.scss
│   │   ├── button.component.spec.ts
│   │   └── README.md
│   ├── card/
│   ├── form/
│   ├── modal/
│   └── navbar/
├── layouts/                 # Page layout components
│   ├── main-layout/
│   ├── auth-layout/
│   └── admin-layout/
├── features/                # Feature modules
│   ├── home/
│   ├── dashboard/
│   ├── profile/
│   └── settings/
├── shared/                  # Shared utilities and services
│   ├── services/
│   ├── pipes/
│   ├── directives/
│   └── guards/
└── design-tokens/           # Token definitions
```

### Component Template Pattern

**File: `src/app/components/button/button.component.ts`**
```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() fullWidth: boolean = false;

  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit();
    }
  }
}
```

**File: `src/app/components/button/button.component.html`**
```html
<button
  [ngClass]="[
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth && 'btn-full-width'
  ]"
  [disabled]="disabled || loading"
  (click)="onClick()"
>
  <span *ngIf="loading" class="btn-spinner"></span>
  <ng-content></ng-content>
</button>
```

**File: `src/app/components/button/button.component.scss`**
```scss
@import '@design-tokens/_exports.scss';

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: $space-2;
  font-family: $font-family-base;
  font-weight: $font-weight-medium;
  border: none;
  border-radius: $radius-md;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  user-select: none;

  &:focus-visible {
    outline: 2px solid $color-primary;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  // Sizes
  &-sm {
    padding: $space-2 $space-4;
    font-size: $font-size-sm;
  }

  &-md {
    padding: $space-4 $space-6;
    font-size: $font-size-base;
  }

  &-lg {
    padding: $space-6 $space-8;
    font-size: $font-size-lg;
  }

  // Variants
  &-primary {
    background-color: $color-primary;
    color: $color-white;

    &:hover:not(:disabled) {
      background-color: $color-primary-dark;
      box-shadow: $shadow-md;
    }
  }

  &-secondary {
    background-color: $color-neutral-200;
    color: $color-neutral-900;

    &:hover:not(:disabled) {
      background-color: $color-neutral-300;
    }
  }

  &-outline {
    background-color: transparent;
    color: $color-primary;
    border: 1px solid $color-primary;

    &:hover:not(:disabled) {
      background-color: $color-primary-light;
    }
  }

  &-danger {
    background-color: $color-error;
    color: $color-white;

    &:hover:not(:disabled) {
      background-color: darken($color-error, 10%);
      box-shadow: $shadow-md;
    }
  }

  // Full Width
  &-full-width {
    width: 100%;
  }

  // Loading State
  .btn-spinner {
    width: 1em;
    height: 1em;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

### Component Documentation Pattern

**File: `src/app/components/button/README.md`**
```markdown
# Button Component

## Overview
Reusable button component with multiple variants and sizes.

## Props

### `variant`
- Type: `'primary' | 'secondary' | 'outline' | 'danger'`
- Default: `'primary'`
- Description: Button style variant

### `size`
- Type: `'sm' | 'md' | 'lg'`
- Default: `'md'`
- Description: Button size

### `disabled`
- Type: `boolean`
- Default: `false`
- Description: Disables the button

### `loading`
- Type: `boolean`
- Default: `false`
- Description: Shows loading spinner

### `fullWidth`
- Type: `boolean`
- Default: `false`
- Description: Makes button full width

## Events

### `clicked`
- Type: `EventEmitter<void>`
- Description: Emitted when button is clicked

## Usage

```html
<app-button 
  variant="primary" 
  size="lg"
  (clicked)="onButtonClick()">
  Click Me
</app-button>

<app-button 
  variant="danger"
  disabled>
  Delete
</app-button>

<app-button 
  variant="secondary"
  loading>
  Saving...
</app-button>
```

## Accessibility
- Supports keyboard navigation
- Focus indicators included
- Proper disabled states
```

---

## 3. Frameworks & Libraries

### Core Stack
```
Framework:          Angular 17.3.0 (Standalone Components)
TypeScript:         5.4.2+
Styling:            SCSS
CSS Architecture:   Component-scoped SCSS with shared tokens
Build Tool:         Angular CLI
Module System:      ES2022
Node Support:       Standalone components (no NgModules)
```

### Key Dependencies

**Angular Core**
```json
{
  "@angular/animations": "^17.3.0",
  "@angular/common": "^17.3.0",
  "@angular/compiler": "^17.3.0",
  "@angular/core": "^17.3.0",
  "@angular/forms": "^17.3.0",
  "@angular/platform-browser": "^17.3.0",
  "@angular/platform-browser-dynamic": "^17.3.0",
  "@angular/router": "^17.3.0"
}
```

### Recommended Additional Libraries

```json
{
  "@angular/cdk": "^17.3.0",         // Component dev kit (modals, dialogs)
  "@angular/material": "^17.3.0",    // Material design components (optional)
  "rxjs": "~7.8.0",                   // Reactive programming
  "tailwindcss": "^3.3.0",            // Utility-first CSS (optional alternative)
  "@types/node": "^20.0.0"            // Node types
}
```

### Recommended Dev Dependencies

```json
{
  "@angular-eslint/builder": "^17.0.0",
  "@angular-eslint/eslint-plugin": "^17.0.0",
  "@angular-eslint/eslint-plugin-template": "^17.0.0",
  "@angular-eslint/schematics": "^17.0.0",
  "@angular-eslint/template-parser": "^17.0.0",
  "eslint": "^8.0.0",
  "prettier": "^3.0.0",
  "sass": "^1.69.0"
}
```

### Build Configuration Reference

**File: `angular.json` Key Sections**
```json
{
  "projects": {
    "test-ai": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss"  // Default to SCSS for components
        }
      },
      "architect": {
        "build": {
          "options": {
            "outputPath": "dist/test-ai",
            "inlineStyleLanguage": "scss",  // SCSS processing
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": ["src/styles.scss"]   // Global styles
          }
        }
      }
    }
  }
}
```

---

## 4. Asset Management

### Asset Directory Structure

```
src/assets/
├── images/
│   ├── logo.svg
│   ├── illustrations/
│   └── icons/
├── fonts/
│   ├── Inter/
│   ├── Roboto/
│   └── Courier/
└── README.md
```

### Asset Import Patterns

**In Component Templates**
```html
<!-- Absolute path from src/ -->
<img src="assets/images/logo.svg" alt="Company Logo" />
<img src="assets/images/illustrations/empty-state.svg" alt="Empty State" />
```

**In Component Styles**
```scss
.hero {
  background-image: url('/assets/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}
```

**In TypeScript**
```typescript
import logoSvg from '@assets/images/logo.svg';

@Component({
  selector: 'app-header',
  template: `<img [src]="logoSrc" alt="Logo" />`
})
export class HeaderComponent {
  logoSrc = logoSvg;
}
```

### Asset Optimization

**Image Optimization in Build**
- Angular CLI automatically optimizes images during build
- Use `srcset` for responsive images
- Prefer SVG for icons and illustrations
- Use WebP with fallbacks for photographs

**Font Loading Pattern**
```scss
// src/styles.scss
@font-face {
  font-family: 'Inter';
  src: url('/assets/fonts/Inter/inter-variable.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto Mono';
  src: url('/assets/fonts/RobotoMono/roboto-mono-regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}

body {
  font-family: 'Inter', sans-serif;
}
```

### Asset Configuration in angular.json

```json
{
  "architect": {
    "build": {
      "options": {
        "assets": [
          "src/favicon.ico",
          {
            "glob": "**/*",
            "input": "src/assets",
            "output": "assets"
          }
        ]
      }
    }
  }
}
```

---

## 5. Icon System

### Icon Architecture

```
src/app/components/icon/
├── icon.component.ts
├── icon.component.html
├── icon.component.scss
└── icons.ts
```

### Icon Component Implementation

**File: `src/app/components/icon/icons.ts`**
```typescript
// Icon definitions and paths
export const ICONS = {
  // Navigation
  'nav-home': 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
  'nav-settings': 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.64l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.09-.47 0-.59.22L2.74 8.87c-.12.22-.07.5.12.64l2.03 1.58c-.05.3-.07.62-.07.94 0 .33.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.64l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.5-.12-.64l-2.03-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z',
  // Add more icons...
};

export type IconName = keyof typeof ICONS;
```

**File: `src/app/components/icon/icon.component.ts`**
```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICONS, IconName } from './icons';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() name!: IconName;
  @Input() size: IconSize = 'md';
  @Input() color: string = 'currentColor';

  get path(): string {
    return ICONS[this.name] || '';
  }

  get sizeValue(): number {
    return {
      xs: 16,
      sm: 20,
      md: 24,
      lg: 32,
      xl: 48
    }[this.size];
  }
}
```

**File: `src/app/components/icon/icon.component.html`**
```html
<svg
  *ngIf="path"
  [attr.viewBox]="'0 0 24 24'"
  [attr.width]="sizeValue"
  [attr.height]="sizeValue"
  [attr.fill]="color"
  class="icon"
  [ngClass]="'icon-' + size"
>
  <path [attr.d]="path"></path>
</svg>
```

**File: `src/app/components/icon/icon.component.scss`**
```scss
@import '@design-tokens/_exports.scss';

.icon {
  display: inline-block;
  flex-shrink: 0;
  vertical-align: middle;

  &-xs {
    width: $space-4;
    height: $space-4;
  }

  &-sm {
    width: $space-6;
    height: $space-6;
  }

  &-md {
    width: $space-6;
    height: $space-6;
  }

  &-lg {
    width: $space-8;
    height: $space-8;
  }

  &-xl {
    width: $space-12;
    height: $space-12;
  }
}
```

### Using Icons in Components

```html
<!-- Basic usage -->
<app-icon name="nav-home"></app-icon>

<!-- With size and color -->
<app-icon name="nav-settings" size="lg" color="var(--primary-color)"></app-icon>

<!-- In a button -->
<app-button variant="primary">
  <app-icon name="nav-home" size="sm"></app-icon>
  Home
</app-button>
```

---

## 6. Styling Approach

### SCSS Architecture

**Strategy**: Component-scoped SCSS with shared tokens and utilities

### Global Styles

**File: `src/styles.scss`**
```scss
// 1. Import tokens first
@import 'design-tokens/_exports.scss';

// 2. Reset and base styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: $font-family-base;
  font-size: $font-size-base;
  line-height: $line-height-normal;
  color: $color-neutral-900;
  background-color: $color-white;
}

// 3. Headings
h1 { @include typography-h1; }
h2 { @include typography-h2; }
h3 { font-size: $font-size-2xl; font-weight: $font-weight-bold; }
h4 { font-size: $font-size-xl; font-weight: $font-weight-semibold; }

// 4. Links
a {
  color: $color-primary;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: $color-primary-dark;
    text-decoration: underline;
  }
}

// 5. Utility classes
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 $space-4;

  @include respond-md {
    padding: 0 $space-8;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

### Component Scoped Styles

**Pattern**: Each component has its own SCSS file

```typescript
@Component({
  selector: 'app-card',
  template: `<div class="card"><ng-content></ng-content></div>`,
  styleUrl: './card.component.scss',  // Scoped to this component
  standalone: true
})
export class CardComponent {}
```

```scss
// card.component.scss
@import '@design-tokens/_exports.scss';

.card {
  background-color: $color-white;
  border: 1px solid $color-neutral-200;
  border-radius: $radius-lg;
  padding: $space-6;
  box-shadow: $shadow-sm;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: $shadow-md;
    border-color: $color-neutral-300;
  }
}
```

### SCSS Nesting and Organization

```scss
.component-name {
  // Base styles
  padding: $space-4;
  background: $color-white;

  // Child elements
  .child-element {
    margin: $space-2 0;
  }

  // Variants with &
  &--large {
    padding: $space-8;
  }

  &--dark {
    background: $color-neutral-900;
    color: $color-white;
  }

  // States
  &:hover {
    box-shadow: $shadow-md;
  }

  &:focus {
    outline: 2px solid $color-primary;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  // Responsive
  @include respond-md {
    padding: $space-8;
  }
}
```

### Responsive Design Pattern

```scss
// Mobile-first approach
.hero {
  padding: $space-4;
  font-size: $font-size-base;

  @include respond-sm {
    padding: $space-6;
    font-size: $font-size-lg;
  }

  @include respond-md {
    padding: $space-8;
    font-size: $font-size-2xl;
  }

  @include respond-lg {
    padding: $space-12;
    font-size: $font-size-3xl;
  }
}
```

### CSS Methodology

**BEM (Block Element Modifier) + SCSS nesting**

```scss
// Block
.button { }

// Element
.button__icon { }
.button__text { }

// Modifier
.button--primary { }
.button--large { }

// State
.button:disabled { }
.button.is-loading { }
```

---

## 7. Project Structure & Patterns

### Feature-Based Organization

```
src/app/
├── core/                          # Core functionality
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── api.service.ts
│   │   └── storage.service.ts
│   ├── guards/
│   │   ├── auth.guard.ts
│   │   └── role.guard.ts
│   └── interceptors/
│       └── api.interceptor.ts
│
├── shared/                        # Shared across features
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   ├── sidebar/
│   │   └── modals/
│   ├── directives/
│   │   ├── click-outside.directive.ts
│   │   └── scroll.directive.ts
│   ├── pipes/
│   │   ├── date-format.pipe.ts
│   │   └── currency.pipe.ts
│   ├── models/
│   │   └── common.models.ts
│   └── utils/
│       ├── validators.ts
│       └── helpers.ts
│
├── features/                      # Feature modules
│   ├── home/
│   │   ├── home.component.ts
│   │   ├── home.component.html
│   │   ├── home.component.scss
│   │   └── home.routes.ts
│   ├── dashboard/
│   │   ├── pages/
│   │   │   ├── overview/
│   │   │   ├── analytics/
│   │   │   └── settings/
│   │   ├── components/
│   │   │   ├── chart/
│   │   │   └── stat-card/
│   │   ├── services/
│   │   │   └── dashboard.service.ts
│   │   └── dashboard.routes.ts
│   └── auth/
│       ├── pages/
│       │   ├── login/
│       │   ├── signup/
│       │   └── reset-password/
│       ├── services/
│       │   └── auth.service.ts
│       └── auth.routes.ts
│
├── design-tokens/                 # Design system
│   ├── colors.scss
│   ├── typography.scss
│   ├── spacing.scss
│   ├── shadows.scss
│   ├── breakpoints.scss
│   └── _exports.scss
│
├── app.component.ts
├── app.routes.ts
├── app.config.ts
└── main.ts

src/
├── index.html
├── main.ts
├── styles.scss
├── assets/
│   ├── images/
│   ├── fonts/
│   └── icons/
└── favicon.ico
```

### Lazy Loading Routes

**File: `src/app/app.routes.ts`**
```typescript
import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
```

**File: `src/app/features/dashboard/dashboard.routes.ts`**
```typescript
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'overview',
        loadComponent: () => import('./pages/overview/overview.component').then(m => m.OverviewComponent)
      },
      {
        path: 'analytics',
        loadComponent: () => import('./pages/analytics/analytics.component').then(m => m.AnalyticsComponent)
      }
    ]
  }
];
```

### Service Pattern

**File: `src/app/core/services/api.service.ts`**
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${endpoint}`);
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${endpoint}`, data);
  }

  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${endpoint}`, data);
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${endpoint}`);
  }
}
```

### Standalone Component Pattern

```typescript
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Import child components and directives
    ButtonComponent,
    CardComponent
  ],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponent implements OnInit {
  @Input() title: string = '';

  ngOnInit(): void {
    // Component initialization
  }
}
```

---

## 8. Figma Integration Workflow

### When Implementing Figma Designs

1. **Extract Design Tokens**
   - Colors → `src/design-tokens/colors.scss`
   - Typography → `src/design-tokens/typography.scss`
   - Spacing/Sizing → `src/design-tokens/spacing.scss`
   - Shadows/Borders → `src/design-tokens/shadows.scss`

2. **Create Component Structure**
   - Identify reusable components from the design
   - Create in `src/app/components/` or feature folder
   - Follow the template pattern defined above

3. **Implement Styles**
   - Use design tokens throughout
   - Follow SCSS organization patterns
   - Ensure responsive design with breakpoints
   - Test accessibility and focus states

4. **Add Interactivity**
   - Implement @Input/@Output properties
   - Add event handlers
   - Use RxJS observables for complex state
   - Document prop requirements in README.md

5. **Testing**
   - Create .spec.ts files for unit tests
   - Test component inputs and outputs
   - Test accessibility features

### Component Implementation Checklist

- [ ] Component file created (`*.component.ts`)
- [ ] Template file created (`*.component.html`)
- [ ] Styles file created (`*.component.scss`)
- [ ] Tests file created (`*.component.spec.ts`)
- [ ] README.md documentation created
- [ ] All design tokens imported and used
- [ ] Responsive design implemented
- [ ] Accessibility features added (ARIA labels, keyboard navigation)
- [ ] Focus states and hover states styled
- [ ] Component exported in feature module/barrel file
- [ ] Standalone imports declared

---

## 9. SCSS Import Aliasing

Add path alias in `tsconfig.json` for easier imports:

```jsonc
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@app/*": ["src/app/*"],
      "@components/*": ["src/app/components/*"],
      "@shared/*": ["src/app/shared/*"],
      "@features/*": ["src/app/features/*"],
      "@design-tokens/*": ["src/design-tokens/*"],
      "@assets/*": ["src/assets/*"]
    }
  }
}
```

Then use in components:
```scss
@import '@design-tokens/_exports.scss';
@import '@shared/styles/mixins.scss';
```

---

## 10. Performance & Build Optimization

### Bundle Analysis
```bash
npm run build -- --stats-json
npx webpack-bundle-analyzer dist/test-ai/stats.json
```

### Component Lazy Loading
```typescript
// Lazy load component on demand
loadComponent() {
  import('./heavy-component/heavy.component').then(m => {
    // Use component
  });
}
```

### OnPush Change Detection
```typescript
@Component({
  selector: 'app-optimized',
  changeDetection: ChangeDetectionStrategy.OnPush,
  ...
})
```

---

## Quick Reference: Token Usage

```scss
// Colors
background: $color-primary;
color: $color-neutral-900;
border: 1px solid $color-neutral-300;

// Typography
@include typography-h1;
font-size: $font-size-lg;
font-weight: $font-weight-semibold;
line-height: $line-height-normal;

// Spacing
padding: $space-4 $space-6;
margin: $space-8 0;
gap: $space-2;

// Shadows
box-shadow: $shadow-md;

// Responsive
@include respond-md {
  padding: $space-8;
}

// Radius
border-radius: $radius-lg;
```

---

## Summary

This design system provides:
- ✅ Centralized token management (colors, typography, spacing, shadows)
- ✅ Reusable component library with clear patterns
- ✅ SCSS organization with mobile-first responsive design
- ✅ Feature-based folder structure
- ✅ Standalone Angular components (v17+)
- ✅ Asset management and optimization
- ✅ Icon system with component wrapper
- ✅ Clear documentation and implementation patterns
- ✅ Figma-to-code workflow guidelines

Use this as a reference when implementing any new features or components from Figma designs.
