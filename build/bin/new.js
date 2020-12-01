'use strict'
const path = require('path'),
  fs = require('fs'),
  fileSave = require('file-save'),
  uppercamelcase = require('uppercamelcase')
process.on('exit', code => {
  console.log(code)
})
// 检测参数
if (process.argv.length < 3) {
  // 不传组件名，真是罪过～ 直接杀死！
  console.assert(
    process.argv.length >= 3,
    '[组件名]必填 - Please enter new component name'
  )
  console.log(
    '------------------------------------------------------------------'
  )
  process.exit(
    '小石头吐槽：god！你不传组件名，想要创建个寂寞吗？！耗子尾汁～🙄️🙄️🙄️'
  )
}

const compName = process.argv[2],
  compChineseName = process.argv[3] || compName, // 获取传进来的组件中文名
  compNameCameraCase = uppercamelcase(compName), // 大驼峰
  compNameCameraCaseAxe = `Axe${compNameCameraCase}`, // Axe大驼峰
  compPath = path.resolve(__dirname, '../../packages/', compName)
console.log(compPath)

// 检测重名
const componentsList = require('../../components.json')
if (componentsList[compName]) {
  console.log(
    '❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤❤️❤'
  )
  process.exit(
    '小石头温馨提醒：组件名重了，可能这个组件已经有了，你先核实下吧😓😓😓'
  )
}

// components.json登记组件
componentsList[compName] = `./packages/${compName}/index.js`
fileSave(path.resolve(__dirname, '../../components.json'))
  .write(JSON.stringify(componentsList, null, '  '), 'utf-8')
  .end('\n')

// packages入口index.js增加组件 - 根据build/build-entry.js自动生成

// index.scss文件
const scssEntryPath = path.join(__dirname, '../../styles/index.scss')
const scssEntryCont = `${fs.readFileSync(
  scssEntryPath
)}@import "./${compName}.scss";`
fileSave(scssEntryPath)
  .write(scssEntryCont, 'utf-8')
  .end('\n')

// 文本填写内容
const compEntryFileCont = `import ${compNameCameraCase} from './src/${compName}.vue'
import 'style/${compName}.scss'

${compNameCameraCase}.install = app => {
  app.component(${compNameCameraCase}.name, ${compNameCameraCase})
}

export default ${compNameCameraCase}`,
  compMainFileCont = `<template>
  <div class="axe-${compName}">
  </div>
</template>

<script>
export default {
  name: '${compNameCameraCaseAxe}'
}
</script>`,
  compCssFileCont = `@import './mixins/mixins';

@include Block(${compName}) {
  // 组件样式代码写在这里边，写之前将这句注释删掉
}`,
  compTestFileCont = `import { expect } from 'chai'
import ${compNameCameraCaseAxe} from 'packages/${compName}'
import { createApp } from 'vue/dist/vue.esm-bundler.js'
describe('${compName}测试用例', () => {
  it('是不是${compName}啊？', () => {
    const container = document.createElement('div')
    const app = createApp({
      template: '<axe${compNameCameraCase} />',
      components: {
        axe${compNameCameraCase}: ${compNameCameraCaseAxe}
      }
    }).mount(container)
    let html = app.$el
    expect(html).to.match('${compName}')
  })
})`,
  compEntryFiles = [
    {
      fileName: 'index.js',
      content: compEntryFileCont
    },
    {
      fileName: `src/${compName}.vue`,
      content: compMainFileCont
    },
    {
      fileName: path.join('../../styles', `${compName}.scss`),
      content: compCssFileCont
    },
    {
      fileName: path.join('../../tests/unit', `${compName}.spec.js`),
      content: compTestFileCont
    },
    {
      fileName: path.join('../../docs/', compName, 'index.md'),
      content: `## ${compName} ${compChineseName}`
    }
  ]
// 批量创建相关文件
compEntryFiles.forEach(file => {
  fileSave(path.join(compPath, file.fileName))
    .write(file.content, 'utf-8')
    .end('\n')
})

// DONE
console.log(
  '🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉'
)
console.log('小石头投来敬佩的目光：组件新建流程成功啦！赶紧去大展拳脚吧!👍👍👍')
