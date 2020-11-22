import AxeCard from 'packages/card'
import { expect } from 'chai'

import { mount } from '@vue/test-utils'

const STRING = 'string'

describe('card component', () => {
  it('use text by prop', () => {
    const wrapper = mount(AxeCard, {
      props: {
        header: STRING
      }
    })
    expect(wrapper.find('.axe-card__header').text()).to.contain(STRING)
  })

  it('header slot first', () => {
    const wrapper = mount(AxeCard, {
      props: {
        header: 'a',
        slots: {
          header: STRING
        }
      }
    })
    expect(wrapper.find('.axe-card__header').text()).to.eq('a')
  })

  it('default always shadow', () => {
    const box = mount(AxeCard)
    expect(box.find('.axe-card').classes()).to.contain('is-always-shadow')
  })

  it('set hover shadow', () => {
    const box = mount(AxeCard, {
      props: {
        shadow: 'hover'
      }
    })
    expect(box.find('.axe-card').classes()).to.contain('is-hover-shadow')
  })

  // it('bodyStyle prop', () => {
  //   const box = mount(AxeCard, {
  //     props: {
  //       bodyStyle: JSON.stringify({
  //         color: 'red'
  //       }),
  //       slots: {
  //         default: STRING
  //       }
  //     }
  //   })

  //   const styleText = box.find('.axe-card__body').attributes().style

  //   expect(styleText).to.contain('color:red;')
  // })
})
