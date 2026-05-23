<!-- BEGIN:nextjs-agent-rules -->
# Next.js Production Engineering Rules

This is NOT the Next.js you know.

This version may contain breaking changes in:
- APIs
- Routing
- Rendering behavior
- Server/Client component boundaries
- File conventions
- Data fetching patterns
- Caching rules
- Metadata handling
- Build/runtime behavior

Before writing or modifying code:
- ALWAYS read the relevant documentation from:
  `node_modules/next/dist/docs/`
- ALWAYS check for deprecations and newer patterns
- NEVER assume older Next.js conventions are valid

---

# Code Quality Standards (MANDATORY)

You are building a production-ready static website using:
- Next.js
- TypeScript
- Tailwind CSS

The website must be:
- Clean
- Maintainable
- Reusable
- Scalable
- Accessible
- Optimized
- Easy to update

Never generate quick hacks, placeholder architecture, or low-quality code.

---

# Architecture Rules

## Components
- Always create reusable components
- Avoid duplicated UI logic
- Keep components small and composable
- Extract repeated sections into shared components
- Prefer composition over large monolithic components
- Use proper prop typing with TypeScript
- Avoid deeply nested JSX