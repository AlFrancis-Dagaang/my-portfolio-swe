# Portfolio Architecture — Al Francis Dagaang
> Personal portfolio website for a Software Engineer & Cloud Enthusiast.
> Stack: Next.js 16 · React 19 · Tailwind v4 · TypeScript (strict) · Vercel

---

## Table of Contents
1. [Tech Stack](#tech-stack)
2. [Folder Structure](#folder-structure)
3. [Pages & Routes](#pages--routes)
4. [Component Architecture](#component-architecture)
5. [Data Layer](#data-layer)
6. [Types](#types)
7. [Server Actions](#server-actions)
8. [Styling System](#styling-system)
9. [Images & Assets](#images--assets)
10. [MVP Feature Checklist](#mvp-feature-checklist)
11. [Constraints & Rules](#constraints--rules)
12. [Deployment](#deployment)

---

## Tech Stack

| Area            | Tool / Version              | Notes                                      |
|-----------------|-----------------------------|--------------------------------------------|
| Framework       | Next.js 16 (App Router)     | `app/` directory only — no `pages/`        |
| UI Library      | React 19                    | Server Components by default               |
| Styling         | Tailwind CSS v4             | `@import "tailwindcss"` — no config file   |
| Language        | TypeScript (strict mode)    | No `any`, no `@ts-ignore`                  |
| Package Manager | pnpm                        | No npm/yarn                                |
| Linter          | Biome                       | `pnpm check` must pass with zero errors    |
| Deployment      | Vercel                      | Auto-deploy on push to `main`              |

---

## Folder Structure

```
my-portfolio-swe/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout — Navbar + Footer, Metadata API
│   ├── page.tsx                  # Home page (Server Component)
│   ├── globals.css               # Tailwind v4 @import + @theme tokens
│   ├── not-found.tsx             # Global 404 page
│   │
│   ├── about/
│   │   ├── page.tsx              # About Me page (Server Component)
│   │   └── loading.tsx           # Skeleton UI
│   │
│   ├── projects/
│   │   ├── page.tsx              # Projects list (Async Server Component)
│   │   ├── loading.tsx           # Skeleton UI
│   │   └── [slug]/
│   │       ├── page.tsx          # Individual project (Dynamic route)
│   │       ├── loading.tsx       # Skeleton UI
│   │       └── error.tsx         # Error boundary ("use client")
│   │
│   └── contact/
│       └── page.tsx              # Contact form (Client Component)
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx            # Reusable button with variants
│   │   ├── Badge.tsx             # Tech stack / category pill
│   │   └── Card.tsx              # Generic card wrapper
│   │
│   ├── layout/
│   │   ├── Navbar.tsx            # Top nav with logo + links
│   │   ├── Footer.tsx            # GitHub · LinkedIn links
│   │   └── Container.tsx         # Max-width wrapper
│   │
│   ├── project/
│   │   └── ProjectCard.tsx       # Single project card (title, tags, link)
│   │
│   ├── contact/
│   │   ├── ContactForm.tsx       # "use client" — useActionState()
│   │   └── SubmitButton.tsx      # "use client" — useFormStatus()
│   │
│   └── sections/                 # Home page sections
│       ├── Hero.tsx              # Name, title, CTA, profile image
│       ├── TechStack.tsx         # Skill badges row
│       ├── FeaturedProjects.tsx  # 3-card preview grid
│       └── ContactCTA.tsx        # "Let's work together" banner
│
├── data/                         # Static JSON data files
│   ├── projects.json
│   ├── skills.json
│   ├── certifications.json
│   ├── education.json
│   └── leadership.json
│
├── lib/
│   ├── projects.ts               # getProjects(), getProjectBySlug()
│   └── utils.ts                  # cn() classname helper, formatDate()
│
├── actions/
│   └── contact.ts                # Server Action for contact form
│
├── types/
│   ├── project.ts                # Project, ProjectTag interfaces
│   └── contact.ts                # ContactFormState interface
│
├── public/
│   ├── images/
│   │   ├── profile/profile.png
│   │   ├── projects/             # Per-project screenshots
│   │   └── certifications/       # AWS badge images
│   ├── resume/resume.pdf
│   └── og-image.png
│
├── biome.json
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Pages & Routes

### `app/page.tsx` — Home
- **Type:** Server Component
- **Metadata:** `title`, `description`, `openGraph` via Metadata API
- **Sections rendered:** `<Hero>`, `<TechStack>`, `<FeaturedProjects>`, `<ContactCTA>`
- **Data:** Reads top 3 projects from `data/projects.json` via `lib/projects.ts`

```tsx
// app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Al Francis Dagaang — Software Engineer",
  description: "...",
  openGraph: { ... },
};

export default async function HomePage() {
  const featured = await getFeaturedProjects(); // reads JSON, no fetch needed
  return (
    <>
      <Hero />
      <TechStack />
      <FeaturedProjects projects={featured} />
      <ContactCTA />
    </>
  );
}
```

---

### `app/about/page.tsx` — About Me
- **Type:** Server Component
- **Sections:** Bio text, Skills badges, Experience timeline, Education, Certifications, Leadership
- **Data:** `certifications.json`, `education.json`, `leadership.json`
- **loading.tsx:** Skeleton cards for each section

---

### `app/projects/page.tsx` — Projects List
- **Type:** Async Server Component
- **Data:** Reads all projects from `lib/projects.ts` → `data/projects.json`
- **UI:** Grid of `<ProjectCard>` components
- **Filter tabs:** "All", "Web", "Cloud", "Data", "REST API", "Mobile" — rendered client-side with `useState`
- **loading.tsx:** Grid of skeleton cards

```tsx
// app/projects/page.tsx
export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectGrid projects={projects} />; // ProjectGrid is "use client" for filter state
}
```

---

### `app/projects/[slug]/page.tsx` — Individual Project
- **Type:** Async Server Component
- **Dynamic route:** `await params` to get `slug`
- **Not found:** Calls `notFound()` if slug doesn't match any project
- **Renders:** Title, description, tech stack badges, GitHub + Live Demo links
- **loading.tsx:** Skeleton for project detail
- **error.tsx:** `"use client"` — friendly message + Reset button

```tsx
// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
```

---

### `app/contact/page.tsx` — Contact
- **Type:** Server Component wrapper → renders `<ContactForm>` (Client Component)
- **Form behavior:** `useActionState()` + Server Action in `actions/contact.ts`
- **Submit button:** `useFormStatus()` for pending/loading state
- **States:** idle → pending → success / error

---

## Component Architecture

### `"use client"` Components (only these need the directive)

| Component | Why Client |
|---|---|
| `ContactForm.tsx` | `useActionState()` |
| `SubmitButton.tsx` | `useFormStatus()` |
| `ProjectGrid.tsx` (inline in projects page) | Filter `useState` |
| `error.tsx` | Required by Next.js error boundary |

> ⚠️ All other components are Server Components by default. Do NOT add `"use client"` unless required.

---

### UI Components

**`Button.tsx`**
```tsx
interface ButtonProps {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}
```

**`Badge.tsx`**
```tsx
interface BadgeProps {
  label: string;
  variant?: "default" | "outline";
}
```

**`Card.tsx`**
```tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
}
```

---

### `ProjectCard.tsx`
```tsx
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  slug: string;
}
```

---

## Data Layer

### `data/projects.json`
```json
[
  {
    "slug": "project-alpha",
    "title": "Project Alpha",
    "description": "...",
    "tags": ["Cloud", "Next.js", "TypeScript"],
    "techStack": ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    "githubUrl": "https://github.com/...",
    "liveDemoUrl": "https://...",
    "featured": true,
    "category": "Cloud"
  }
]
```

### `data/skills.json`
```json
["Next.js", "React", "TypeScript", "Tailwind CSS", "Git", "AWS"]
```

### `data/certifications.json`
```json
[
  {
    "id": "aws-cloud-practitioner",
    "title": "AWS Certified Cloud Practitioner",
    "issuer": "Amazon Web Services",
    "year": 2024,
    "badgeImage": "/images/certifications/aws-cloud-practitioner.png"
  }
]
```

### `data/education.json`
```json
[
  {
    "degree": "BS Computer Science",
    "school": "University Name",
    "startYear": 2021,
    "endYear": 2025,
    "details": ["Detail 1", "Detail 2"]
  }
]
```

### `data/leadership.json`
```json
[
  {
    "role": "Leadership Role",
    "org": "Organization",
    "startYear": 2021,
    "endYear": 2025,
    "details": "Description"
  }
]
```

---

### `lib/projects.ts`
```ts
import projects from "@/data/projects.json";
import type { Project } from "@/types/project";

export async function getProjects(): Promise<Project[]> {
  return projects as Project[];
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return (projects as Project[]).filter((p) => p.featured).slice(0, 3);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return (projects as Project[]).find((p) => p.slug === slug);
}
```

---

## Types

### `types/project.ts`
```ts
export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
  category: "Web" | "Cloud" | "Data" | "REST API" | "Mobile";
}
```

### `types/contact.ts`
```ts
export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
}
```

---

## Server Actions

### `actions/contact.ts`
```ts
"use server";

import type { ContactFormState } from "@/types/contact";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validate
  if (!name || !email || !message) {
    return { status: "error", message: "All fields are required." };
  }

  // TODO: Send email via Resend or Nodemailer
  // await sendEmail({ name, email, message });

  return { status: "success", message: "Message sent! I'll get back to you soon." };
}
```

### `components/contact/ContactForm.tsx`
```tsx
"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/actions/contact";
import { SubmitButton } from "./SubmitButton";

const initialState = { status: "idle" as const };

export function ContactForm() {
  const [state, action] = useActionState(submitContactForm, initialState);

  return (
    <form action={action}>
      <input name="name" type="text" required />
      <input name="email" type="email" required />
      <textarea name="message" required />
      <SubmitButton />
      {state.status === "success" && <p>{state.message}</p>}
      {state.status === "error" && <p>{state.message}</p>}
    </form>
  );
}
```

### `components/contact/SubmitButton.tsx`
```tsx
"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}
```

---

## Styling System

### Tailwind v4 Setup (`globals.css`)
```css
@import "tailwindcss";

@theme {
  /* Custom color tokens — REQUIRED by MVP */
  --color-brand: #c0392b;        /* Red accent used in hero name */
  --color-brand-dark: #96281b;
  --color-surface: #f9f9f9;
  --color-muted: #6b7280;

  /* Custom font */
  --font-sans: "Inter", sans-serif;
}
```

> ✅ At least one `--color-*` token in `@theme` used in a component is an **MVP requirement**.

### Rules
- No `tailwind.config.js` — Tailwind v4 uses `@theme` in CSS only
- No `style={{}}` inline objects
- Responsive: mobile-first with `sm:`, `md:`, `lg:` breakpoints
- Dark mode: stretch goal — use `dark:` variant + `localStorage`

---

## Images & Assets

- All images use `next/image` — **no raw `<img>` tags** (Biome will catch violations)
- All `next/image` must have `alt`, `width`, `height` props
- Profile image: `public/images/profile/profile.png`
- OG image: `public/og-image.png` (used in Metadata API)

```tsx
import Image from "next/image";

<Image
  src="/images/profile/profile.png"
  alt="Al Francis Dagaang"
  width={400}
  height={400}
  priority  // add for above-the-fold images
/>
```

---

## MVP Feature Checklist

| # | Feature | File | Status |
|---|---------|------|--------|
| 1 | Home page — Server Component + Metadata API | `app/page.tsx` | ☐ |
| 2 | About page — shared layout + loading skeleton | `app/about/page.tsx` | ☐ |
| 3 | Projects list — Async SC + ProjectCard grid | `app/projects/page.tsx` | ☐ |
| 4 | Individual project — dynamic route + notFound() | `app/projects/[slug]/page.tsx` | ☐ |
| 5 | Contact form — useActionState + Server Action | `app/contact/page.tsx` | ☐ |
| 6 | error.tsx — "use client" + Reset button | `app/projects/[slug]/error.tsx` | ☐ |
| 7 | loading.tsx × 2 — meaningful skeleton UI | `about/`, `projects/` | ☐ |
| 8 | All images via next/image — no raw img tags | all components | ☐ |
| 9 | Tailwind v4 @theme token — custom --color-* | `globals.css` | ☐ |
| 10 | Deployed to Vercel — live public URL | Vercel dashboard | ☐ |

### Stretch Goals
| Feature | Notes |
|---------|-------|
| Dark mode toggle | `dark:` Tailwind variant + `localStorage` |
| Blog / Writing section | MDX or JSON, dynamic routes |
| Page transitions | CSS `@starting-style` or Framer Motion |

---

## Constraints & Rules

### Must Use
- `app/` directory (App Router) — never `pages/`
- Server Components by default — `"use client"` only when needed
- `useActionState()` for forms — never `fetch()` from a Client Component to an API route
- `useFormStatus()` for submit button pending state
- `next/image` for all images
- `pnpm` as package manager
- TypeScript strict mode — no `any`, no `@ts-ignore`
- `pnpm check` (Biome) — zero errors before submitting

### Must NOT Use
- `pages/` directory
- `tailwind.config.js`
- Inline `style={{}}` objects
- Raw `<img>` tags
- `npm install` or `yarn add`
- `eslint` or `prettier` (Biome handles both)
- `useState(loading)` to track form submission (use `useFormStatus` instead)

### Pre-submission Commands
```bash
pnpm check           # Biome — must pass with zero errors
pnpm tsc --noEmit    # TypeScript — must pass with zero errors
pnpm build           # Build — must succeed locally before pushing
```

---

## Deployment

1. Push repo to GitHub (public or shared with mentor)
2. Connect repo to [Vercel](https://vercel.com)
3. Set framework preset to **Next.js**
4. Auto-deploys on every push to `main`
5. Verify live URL is publicly accessible (no login required)

### Environment Variables (if needed)
```
# .env.local (never commit to git)
CONTACT_EMAIL=yourname@email.com
# Add Resend API key here if using email sending
RESEND_API_KEY=re_...
```

---

## Submission Checklist

- [ ] `pnpm check` passes — zero Biome errors
- [ ] `pnpm tsc --noEmit` passes — zero TS errors
- [ ] `pnpm build` succeeds locally
- [ ] Live Vercel URL is public
- [ ] GitHub repo is public or shared with mentor
- [ ] All 10 MVP features present
- [ ] No raw `<img>` tags (`grep -r "<img" src/` returns nothing)
- [ ] No `pages/` directory
- [ ] Contact form submits without crashing
- [ ] `loading.tsx` has meaningful skeleton UI (not just a spinner)
