# 🧱 Design System

## Modular and expanded library of components created using Vite, Storybook and Typescript. Suitable for re-used UI elements in various projects

## 📚 Installation of the library

```bash
pnpm add @sem.antony/design-system
```

## 📦 installation

- Install dependencies:

```bash
pnpm install
```

- Clone template: (replace `my-lib` with your project name)

  ```bash
  npx degit https://github.com/SemAntony/desing-system my-lib
  ```

- Change directory: (replace `my-lib` with your project name)

  ```bash
  cd my-lib
  ```

- Install dependencies:

  ```bash
  pnpm i
  ```

- Run storybook:

  ```bash
  pnpm dev
  ```

| Script                                | Command              | Description                                                                     |
| ------------------------------------- | -------------------- | ------------------------------------------------------------------------------- |
| **START AND DEVELOPMENT**             |                      |                                                                                 |
| Start                                 | `nps start`          | 🚀 Start Vite dev server                                                        |
| Storybook Dev                         | `nps dev`            | 📘 Launch Storybook on port 6006                                                |
| Preview                               | `nps preview`        | 👀 Preview the built project                                                    |
| Build Storybook                       | `nps buildStorybook` | 📘 Build Storybook                                                              |
| **FORMATTING AND LINTING**            |                      |                                                                                 |
| Format                                | `nps format`         | 🎨 Format the project using Prettier                                            |
| Lint                                  | `nps lint`           | 🔍 Lint the project                                                             |
| LintFix                               | `nps lintFix`        | 🧹 Lint with auto-fix                                                           |
| **TESTING**                           |                      |                                                                                 |
| Test | `nps test`           | 🧪 Run tests using Vitest ***not implemented yet!*** |
| **BUILD AND PREPARATION**             |                      |                                                                                 |
| Prebuild                              | `nps prebuild`       | 🧨 Clean the `dist` folder before build                                         |
| Generate Index                        | `nps generateIndex`  | 📄 Generate a shared index file for components                                  |
| Build                                 | `nps build`          | 📦 Full project build: `index`, `Vite`, and `TypeScript`                        |
| **VERSIONING PROCESS**                |                      |                                                                                 |
| Preversion                            | `nps preversion`     | ⚙️ Tasks to run before bumping the version                                      |
| **COMMITS AND CHANGES**               |                      |                                                                                 |
| Add Changeset                         | `nps addChangeset`   | 📦 Add a changeset with a manual description                                    |
| Git Commit                            | `nps gitCommit`      | 📮 Use an interface for creating a git commit                                   |
| **VERSIONS AND RELEASES**             |                      |                                                                                 |
| Version Patch                         | `nps version.patch`  | 🔖 Bump the patch version                                                       |
| Version Minor                         | `nps version.minor`  | 🆙 Bump the minor version                                                       |
| Version Major                         | `nps version.major`  | 🚀 Bump the major version                                                       |
| Version Beta                          | `nps version.beta`   | 🧪 Release a beta version                                                       |
| Version Alpha                         | `nps version.alpha`  | 🧬 Release an alpha version                                                     |
| Version RC                            | `nps version.rc`     | 🧪 Release a release candidate version                                          |

## 📚 Usage commands

- To run the project in development mode

```bash
nps start
```

- To run storybook

```bash
nps dev
```

- To preview the built project

```bash
nps preview
```

- To build the project

```bash
nps build
```

- To build storybook

```bash
nps buildStorybook
```

- To format the project

```bash

nps format
```

- To lint the project

```bash

nps lint
```

- To lint the project with auto-fix

```bash
nps lintFix
```

- To run tests(not implemented yet)

```bash
nps test
```

- To clean the `dist` folder

```bash
nps prebuild
```

To generate a shared index file

```bash
nps generateIndex
```

- To run tasks before bumping the version

```bash
nps preversion
```

- To add a changeset

```bash
nps addChangeset
```

- To use an interface for creating a git commit

```bash
nps gitCommit
```

- To bump the patch version

```bash
nps version.patch
```

- To bump the minor version

```bash
nps version.minor
```

- To bump the major version

```bash
nps version.major
```

- To release a beta version

```bash
nps version.beta
```

- To release an alpha version

```bash
nps version.alpha
```

- To release a release candidate

```bash
nps version.rc
```

## 🛠 Support and Questions

### If you have any questions or suggestions for improvements, please open an [issue on GitHub](https://github.com/SemAntony/design-system/issues)

### You can find the full source code of the library [here](https://github.com/SemAntony/design-system)
