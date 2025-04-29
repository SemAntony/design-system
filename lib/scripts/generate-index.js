import fs from 'fs'
import path from 'path'

const componentsDir = path.resolve('lib/components')
const componentFolders = fs.readdirSync(componentsDir).filter(name => {
    const fullPath = path.join(componentsDir, name)
    return fs.statSync(fullPath).isDirectory()
})

const exports = componentFolders.map(name => `export * from './${name}'`)

const indexContent = `${exports.join('\n')}\n`
const indexFilePath = path.join(componentsDir, 'index.ts')

fs.writeFileSync(indexFilePath, indexContent)

console.log('✅ index.ts успешно обновлён!')
