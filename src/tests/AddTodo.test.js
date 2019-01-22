import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from '../components/AddTodo';
import App from '../App';

describe('<AddTodo />', () => {
  let addtodoWrapper;
  let addtodoInstance;
  const addtodo = shallow(<AddTodo />);

  beforeEach(() => {
    addtodoWrapper = addtodo;
    addtodoInstance = addtodoWrapper.instance();
  });

  afterEach(() => {
    addtodoWrapper = undefined;
    addtodoInstance = undefined;
  });
  

  it('renders without crashing', () => {
    shallow(<AddTodo />);
  });

  it('renders a div wrapper', () => {
    expect(addtodoWrapper.first().type()).toBe('div');
  });

  describe('the rendered div', () => {
      const div = () => addtodoWrapper.first();

      it('contains everything else that gets rendered', () => {
        expect(div().children()).toEqual(addtodoWrapper.children());
      });
  });

  it('state.content changing equal to input', () => {
    const event = { target: { value: 'masdmasf' } }; 
    addtodoWrapper.find('input').simulate('change', event)
    expect(addtodoInstance.state.content).toEqual(event.target.value);
  });

  
});
