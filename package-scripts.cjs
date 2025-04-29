module.exports = {
    scripts: {
        start: {
            script: 'vite',
            description: '🚀 Запуск Vite dev-сервера',
        },
        dev: {
            script: 'storybook dev -p 6006',
            description: '📘 Запуск Storybook на порту 6006',
        },
        prebuild: {
            script: 'rm -rf dist',
            description: '🧼 Очистка директории dist перед сборкой',
        },
        generateIndex: {
            script: 'node lib/scripts/generate-index.js',
            description: '🧩 Генерация индекса компонентов',
        },
        build: {
            script: 'npm run generate-index && vite build && tsc',
            description: '📦 Сборка проекта: генерация индекса, Vite и TypeScript',
        },
        preview: {
            script: 'vite preview',
            description: '🔍 Просмотр собранного проекта',
        },
        lint: {
            script: 'eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0',
            description: '🔎 Проверка кода ESLint без авто-исправлений',
        },
        lintFix: {
            script: 'eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 --fix',
            description: '🧹 Линтинг с авто-фиксом',
        },
        buildStorybook: {
            script: 'storybook build',
            description: '🏗️ Сборка Storybook для продакшна',
        },
        version: {
            patch: {
                script: 'pnpm version patch && git commit -am "chore: bump patch version" && git push && git push --tags',
                description: '🔖 Повышение patch-версии',
            },
            minor: {
                script: 'pnpm version minor && git commit -am "chore: bump minor version" && git push && git push --tags',
                description: '🆙 Повышение minor-версии',
            },
            major: {
                script: 'pnpm version major && git commit -am "chore: bump major version" && git push && git push --tags',
                description: '📢 Повышение major-версии',
            },
            beta: {
                script: 'pnpm version prerelease --preid=beta && git commit -am "chore: bump beta version" && git push && git push --tags',
                description: '🧪 Выпуск beta prerelease-версии',
            },
            alpha: {
                script: 'pnpm version prerelease --preid=alpha && git commit -am "chore: bump alpha version" && git push && git push --tags',
                description: '⚗️ Выпуск alpha prerelease-версии',
            },
            rc: {
                script: 'pnpm version prerelease --preid=rc && git commit -am "chore: bump rc version" && git push && git push --tags',
                description: '🛠️ Выпуск release candidate (rc)',
            },
            preminorBeta: {
                script: 'pnpm version preminor --preid=beta && git commit -am "chore: bump preminor beta version" && git push && git push --tags',
                description: '🌱 Выпуск beta preminor-версии',
            }
        }
    }
}
