const { series } = require('nps-utils');

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
            description: '🧨 Очистка папки dist перед сборкой',
        },
        generateIndex: {
            script: 'node lib/scripts/generate-index.js',
            description: '📄 Генерация общего index-файла для компонентов',
        },
        build: {
            script: series(
                'nps generateIndex',
                'vite build',
                'tsc'
            ),
            description: '📦 Сборка проекта (index, vite, tsc)',
        },
        preview: {
            script: 'vite preview',
            description: '👀 Просмотр собранного проекта',
        },
        lint: {
            script: 'eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0',
            description: '🔍 Линтинг проекта',
        },
        lintFix: {
            script: 'eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 --fix',
            description: '🧹 Линтинг с авто-фиксом',
        },
        buildStorybook: {
            script: 'storybook build',
            description: '📘 Сборка Storybook',
        },
        addChangeset: {
            script: 'git add . && read -p "Введите комментарий к коммиту: " msg && git commit -m "$msg"',
            description: '📦 Добавление изменений с ручным комментарием',
        },
        versionUpdate: {
            script: `
    determine_commit_type() {
      changes=$(git diff --name-only --cached)
      if echo "$changes" | grep -q "src/"; then
        echo "feat: новые функции или изменения в исходных файлах"
      elif echo "$changes" | grep -q "test/"; then
        echo "test: изменения в тестах"
      elif echo "$changes" | grep -q "fix"; then
        echo "fix: исправления багов"
      else
        echo "chore: коммит изменений"
      fi
    }

    commit_type=$(determine_commit_type)
    echo "Предложенный комментарий: $commit_type"
    read -p "Если хотите изменить комментарий, введите новый, иначе нажмите Enter для использования предложенного: " user_commit_message
    commit_message="\${user_commit_message:-$commit_type}"

    git add .
    git commit -m "$commit_message"
    pnpm version $1
    git push git@github.com:SemAntony/design-system.git
    git push git@github.com:SemAntony/design-system.git --tags
  `.trim().replace(/\n\s+/g, ' && '),
            description: 'Обновление версии с коммитом и пушем в удалённый репозиторий',
        },

        version: {
            patch: {
                script: 'nps versionUpdate -- patch',
                description: '🔖 Повышение patch-версии',
            },
            minor: {
                script: 'nps versionUpdate -- minor',
                description: '🆙 Повышение minor-версии',
            },
            major: {
                script: 'nps versionUpdate -- major',
                description: '🚀 Повышение major-версии',
            },
            beta: {
                script: 'nps versionUpdate -- prerelease --preid=beta',
                description: '🧪 Выпуск beta-версии',
            },
            alpha: {
                script: 'nps versionUpdate -- prerelease --preid=alpha',
                description: '🧬 Выпуск alpha-версии',
            },
            rc: {
                script: 'nps versionUpdate -- prerelease --preid=rc',
                description: '🚀 Выпуск rc-версии',
            },
        },
    },
};
