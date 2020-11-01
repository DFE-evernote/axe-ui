/*
 * @Author: @Guojufeng
 * @Date: 2020-11-01 00:12:31
 * @LastEditors: @Guojufeng
 * @LastEditTime: 2020-11-02 00:20:34
 * @FilePath: /Users/guojufeng/Documents/GitHub/xingorg1-ui/tests/unit/example.spec.js
 */
import { expect } from 'chai' // jest中的断言库
// import { shallowMount } from '@vue/test-utils' // 当前包目前不兼容vue3

describe('测试用例', () => {
  it('1+1=3吗', () => {
    expect(1 + 1).to.eq(2)
  })
})
