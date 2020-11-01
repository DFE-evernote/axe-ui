/*
 * @Author: @Guojufeng
 * @Date: 2020-11-02 00:22:37
 * @LastEditors: @Guojufeng
 * @LastEditTime: 2020-11-02 00:43:13
 * @FilePath: /Users/guojufeng/Documents/GitHub/xingorg1-ui/tests/unit/button.spec.js
 */
import { expect } from 'chai'
import GjfButton from 'packages/button'
// import {createApp} from 'vue' // '[Vue warn]: Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
import { createApp } from 'vue/dist/vue.esm-bundler.js' // 上边的代码，组件提供了template选项，但是运行时不支持，需要引入vue/dist/vue.esm-bundler.js这个文件才能渲染template
describe('button按钮测试用例', () => {
  it('是不是button按钮啊？', () => {
    /* 
    const contianer = document.createElement('div')
    const app = createApp({
      template: `<gjf-button />`,
      components: {
        'gjf-button': GjfButton
      }
    })
    app.mount(contianer)
    let html = app.$el.innerHTML // TypeError: Cannot read property 'innerHTML' of undefined 
    expect(html).to.eq('button')
    */
    const container = document.createElement('div')
    const app = createApp({
      template: `<gjfButton />`,
      components: {
        gjfButton: GjfButton
      }
    }).mount(container)
    console.log(app, 111, app.$el)
    let html = app.$el
    expect(html).to.match('button')
  })
})
