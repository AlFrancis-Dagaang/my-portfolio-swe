# Al Francis Daga-ang — Portfolio

Personal portfolio website of Al Francis Daga-ang, a Software and Cloud Engineer specializing in full-stack development and cloud architectures.

🔗 **Live Site:** [alfrancisdagaang-dev.vercel.app](https://alfrancisdagaang-dev.vercel.app)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Email:** Resend
- **Linting:** Biome
- **Package Manager:** pnpm
- **Deployment:** Vercel

---

## Features

- Server Components with Metadata API (title, description, Open Graph)
- Dynamic routes for individual project pages (`/projects/[slug]`)
- Contact form with Server Actions, `useActionState`, and `useFormStatus`
- `loading.tsx` skeleton UI on all major routes
- `error.tsx` boundaries with reset functionality
- Dark mode toggle — Tailwind v4 `dark:` variant, persisted via `localStorage` with system preference fallback
- All images via `next/image`
- Custom Tailwind v4 `@theme` color tokens
- Responsive design — mobile first

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, tech stack, featured projects, CTA |
| `/about` | About — bio, skills, experience timeline, education |
| `/projects` | Projects list with category filter |
| `/projects/[slug]` | Individual project detail page |
| `/contact` | Contact form with Resend email delivery |

---

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm

### Environment Variables

Create a `.env.local` file in the project root:

```bash
RESEND_API_KEY=re_your_api_key_here
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

> Get your Resend API key at [resend.com](https://resend.com)

### Run Locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## Project Structure

```
app/
  (home)/         # Home page route group
  about/          # About page
  projects/
    (overview)/   # Projects list
    [slug]/       # Individual project
  contact/        # Contact page
  globals.css     # Tailwind v4 theme tokens + global styles
components/
  about/          # About page components
  contact/        # Contact form components
  home/           # Home page sections
  layout/         # Navbar, Footer, Container
  project/        # Project card and grid
  ui/             # Shared UI (Button, Dash)
data/             # JSON data files (projects, experience, certifications)
lib/              # Utility functions (projects, theme)
types/            # TypeScript interfaces
```

See [ARCHITECTURE.md](./ARCHITECTURE.md) for a detailed breakdown of technical decisions.

---

## Environment Variables Reference

| Variable | Description | Required |
|---|---|---|
| `RESEND_API_KEY` | Resend API key for contact form email delivery | Yes |
| `NEXT_PUBLIC_BASE_URL` | Base URL for metadata and API calls | Yes |