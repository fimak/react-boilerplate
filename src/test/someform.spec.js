/*eslint-disable*/
import React from 'react'
import { mount, shallow } from 'enzyme'
import {expect} from 'chai'

import SomeForm from '../components/someform'

describe('<SomeForm/>', () => {
    it('should have label', () => {
        const form = shallow(<SomeForm/>)
        expect(form.find('label'))
    })

    it('should have input field', () => {
        const form = shallow(<SomeForm/>)
        expect(form.find('input[type="text"]'))
    })

    it('should have props and state for name', () => {
        const form = shallow(<SomeForm/>)
        expect(form.props().name).to.be.defined
        expect(form.state('name')).to.be.defined
    })

    it('should have an initial name state', () => {
        const form = shallow(<SomeForm/>)
        expect(form.state('name')).to.equal('default')
    })

    it('should update the label by change the input field', () => {
        const form = mount(<SomeForm/>)
        form.find('input[type="text"]').simulate('change', {
            target: { value: 'newName' }
        })
        expect(form.state('name')).to.equal('newName')
    })
})
/*eslint-enable*/