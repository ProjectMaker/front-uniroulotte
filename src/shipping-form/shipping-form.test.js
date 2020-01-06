import React from 'react'
import { shallow, mount } from 'enzyme'

import ShippingForm from './shipping-form'
import { FileUploader } from './shipping-form'
describe('<ShippingForm />', () => {
  it('Should display state', () => {
    const wrapper = shallow(<FileUploader/>)
    console.log(wrapper.debug())
    expect(true).toBeTruthy()
  })
  /*
  it('Should render correctly', () => {
    const wrapper = shallow(shallow(<ShippingForm/>).get(0))
    expect(wrapper).toMatchSnapshot()
  })
  */
  /*
  it('Should call onChange props', () => {
    const onChange = jest.fn()
    const fields = {
      firstname: { error: 'blanck' },
      lastname: { error: 'blanck' },
      email: { error: 'blanck' },
      emailConfirm: { error: 'blanck' },
      phoneNumber: { error: 'blanck' },
    }
    const wrapper = shallow(shallow(<ShippingForm onChange={onChange} fields={fields} />).get(0))
    wrapper.find('[name="lastname"]').simulate('change',
      { target: { value: 'abc' } }
    )
    expect(wrapper.find('[id="lastnameError"]')).toHaveLength(1)
    console.log(wrapper.debug())
    expect(onChange).toHaveBeenCalledTimes(1)
  })
  */
  /*
  it('Should call onValid props', () => {
    let wrapper
    const onValid = jest.fn(async () => {
      await wrapper.setProps({sendingInProgress: true})
      expect(wrapper.find('button').props().disabled).toBeTruthy()
    })
    wrapper = shallow(shallow(<ShippingForm onValid={onValid} />).get(0))
    wrapper.find('button').simulate('click')
    expect(onValid).toHaveBeenCalled()
  })
  */
})
