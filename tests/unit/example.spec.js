/*
 * @Author: @Guojufeng
 * @Date: 2020-11-01 00:12:31
 * @LastEditors: @Guojufeng
 * @LastEditTime: 2020-11-01 11:12:09
 * @FilePath: /Users/guojufeng/Documents/GitHub/xingorg1-ui/tests/unit/example.spec.js
 */
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
