1. Vite + Tailwind error (“module is not defined”)
   Promp : "Tailwind isn't loading on Vite. I keep getting ‘module is not defined in ES module scope’. Why is postcss.config.js breaking?
   Context: PostCSS config needed ESM syntax instead of CommonJS.
   Part helped: Tailwind setup.

2. Shadcn alias error
   Promp : "Why does Shadcn keep failing with ‘No import alias found’? I'm using Vite and multiple tsconfig files. What alias should I actually add?"
   Context: Shadcn wouldn’t initialize because alias wasn’t defined properly.
   Part helped: UI setup.

3. Axios “Error: canceled”
   Promp: "DetailPage keeps showing ‘Error: canceled’. I think axios aborts the request when switching pages fast. How do I ignore this cancel error?"
   Context: AbortController triggered axios cancel during debounce + navigation.
   Part helped: Detail slice error handling.

4. Old results flashing before new search
   Promp: "When typing, old results still show for a moment before new ones load. How do I clear results immediately during loading?"
   Context:Needed to reset results inside pending state.
   Part helped: Search UX.

5. CardAnime UI improvement
   Promp: "make my CardAnime look more modern, Something like hover effect, score badge, nicer layout?"
   Context:Needed a reusable and good-looking card component.
   Part helped: Anime card component.

6. Reset results when search input is cleared
   Promp: "When I delete my search input, the old results still stay on the screen.
   How do I clear the results when the query becomes empty?"
   Context: SearchPage didn’t reset results when query = "" because useEffect only fetches when length >= 2. Needed a clearResults reducer and a condition to reset on empty query.
   Part helped: Search reset behavior.

7. Create README
   Promp : help me create a clean, professional README for my React assessment project? It should include installation steps, features, tech stack, demo link, and submission checklist
   Context: I needed a professional README that follows typical coding test standards and clearly explains the structure, setup, and requirements of the project.
   Part helped: Documentation (README.md).

8. React Router DOM types causing Vercel build failure
   Promp : Vercel fails to build my project with a lot of TypeScript errors like match not exported, Redirect not found, and Switch not found. I'm using react-router-dom v7 but I keep getting old v5 type definitions. How do I fix this?
   Context: The build failed on Vercel because @types/react-router-dom and @types/react-router were installed accidentally, which are meant for React Router v5. React Router v6+ already includes types, so installing the old ones created conflicts and caused the build to fail.
   Part helped: Deployment build fix (removing outdated type packages to resolve TypeScript conflicts).
