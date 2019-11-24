import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import renderer from "react-test-renderer";
import Form from '../components/form.js';
import TypedRow from '../components/typedRow.js';
import Modal from '../components/modal.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Our components are functioning', () => {
  it('Form renders', () => {
    let app = mount(<Form />);
    let formInput = app.find('form');
    expect(formInput).toBeDefined();
    expect(app.state('todo')).toBe('');
  });

  it('TypedRow renders', () => {
    let app = mount(
      <TypedRow
        value={{ todo: 'write something', name: 'KMA', due: '' }}
        id={'id'}
        onEdit={null}
        onDelete={null}
      />
    );
    let container = app.find('typedrow');
    expect(container).toBeDefined();
    expect(app.state('isComplete')).toBe(false);
  });

  it('Modal renders', () => {
    let app = mount(<Modal />);
    let container = app.find('button');
    expect(container).toBeDefined();
  });
});
