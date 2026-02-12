# todos

# priority


# long term
12) continue after mistake in the typewritter effect..
15) sorting of projects utility... only when lots of projects will be there.


# done
1) change the theme of images to the primary or accent colors. (done)
2) add github's data for coding activity. {
  thinking of creating a backend for this.
  it will aggregate the data required by coding calender
} (done)
3) current garbage collection spike due to filter method after every click ig. XXX (read 7)
4) hydration error due to button under button. (fixed using asChild prop and accepting remaining prop in child) (done)
5) Use seperate arrays to reduce the bloat in useStarField. XXX (draw constellation will become complex and 2 seperate interfaces... and no real performance boost too so no)
6) Use Math.min(stars[i].size,stars[j].size) for opacity determinism too. (done)
7) filter is more optimally performance wise even with garbage collector overhead and atleast its constant whereas the dormant stars has no upper limit and can cause massive memory leaks. (done)
8) in useDrag if some state is not used for rendering use useRef. XXX
9) use useRef to decide whether you were dragging or not. so as to distinguish between click or drag. XXX
10) add home and reachout. (done)
11) wanted the image to pop out of the top border... have to thing about it later... current one is satisfactory.
13) routes changed by swiping is not getting reflected in navbar..(done)
14) scale down the images to be at around 100kb for loading speed.(done)
16) add the project images in project readme and use the public url available through github github pages. (done)
17) add functionality to the Reachout component. 
18) update the projectList with correct github links.
19) use cleaner image like soumyajit (done)
20) make my-images https basically setup a https certificate. (done)


CheckList before modifying with time
1) Change the about description.. route: /about (tools, status, techstack, hobbies)
2) Change the resume.   route: /resume   
3) Add projects.        route: /projects (projectList tbh nothing else)
4) perhaps stream line the process using some configs or something...
5) config.ts
6) check with the portfolio-backend1 about the returning data... anyways its general date and count.
current api returns data since 1year back the same date as today. and by default is sorted (some nuance with github but nvm).



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
