# 🧱 Design System

#### Modular and expanded library of components created using Vite, Storybook and Typescript. Suitable for re-used UI elements in various projects.

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
|---------------------------------------|----------------------|---------------------------------------------------------------------------------|
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
| <span style="color: red;">Test</span> | `nps test`           | 🧪 Run tests using Vitest <span style="color: red;">not implemented yet!</span> |
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
| Version Patch                         | `nps version patch`  | 🔖 Bump the patch version                                                       |
| Version Minor                         | `nps version minor`  | 🆙 Bump the minor version                                                       |
| Version Major                         | `nps version major`  | 🚀 Bump the major version                                                       |
| Version Beta                          | `nps version beta`   | 🧪 Release a beta version                                                       |
| Version Alpha                         | `nps version alpha`  | 🧬 Release an alpha version                                                     |
| Version RC                            | ```nps version rc``` | 🧪 Release a release candidate version                                          |

## 📚 Usage commands

* <span style="color: green;">To run the project in development mode</span>

```bash
nps start
```

* <span style="color: green;">To run storybook</span>

```bash
nps dev
```

* <span style="color: green;">To preview the built project</span>

```bash
nps preview 
```

- <span style="color: green;">To build the project</span>

```bash
nps build
```

- <span style="color: green;">To build storybook</span>

```bash
nps buildStorybook
```

- <span style="color: green;">To format the project</span>

```bash

nps format
```

- <span style="color: green;">To lint the project</span>

```bash

nps lint
```

- <span style="color: green;">To lint the project with auto-fix</span>

```bash
nps lintFix
```

- <span style="color: red;">To run tests(not implemented yet)</span>

```bash
nps test
```

- <span style="color: green;">To clean the `dist` folder</span>

```bash
nps prebuild
```

- <span style="color: green;">To generate a shared index file</span>

```bash
nps generateIndex
```

- <span style="color: green;">To run tasks before bumping the version</span>

```bash
nps preversion
```

- <span style="color: green;">To add a changeset</span>

```bash
nps addChangeset
```

- <span style="color: green;">To use an interface for creating a git commit</span>

```bash
nps gitCommit
```

- <span style="color: green;">To bump the patch version</span>

```bash
nps version.patch
```

- <span style="color: green;">To bump the minor version</span>

```bash
nps version.minor
```

- <span style="color: green;">To bump the major version</span>

```bash
nps version.major
```

- <span style="color: green;">To release a beta version</span>

```bash
nps version.beta
```

- <span style="color: green;">To release an alpha version</span>

```bash
nps version.alpha
```

- <span style="color: green;">To release a release candidate</span>

```bash
nps version.rc
```

## 🛠 Support and Questions

### If you have any questions or suggestions for improvements, please open

### an [issue on GitHub](https://github.com/SemAntony/design-system/issues) .

### You can find the full source code of the library [here](https://github.com/SemAntony/design-system).

