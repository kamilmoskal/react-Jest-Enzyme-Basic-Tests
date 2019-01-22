import React from 'react';
import { shallow } from 'enzyme';
import Todo from '../components/Todo';

describe('<Todo />', () => {
  const todo = shallow(<Todo />);

  it('renders without crashing', () => {
    shallow(<Todo />);
  });

  it('renders a div wrapper', () => {
    expect(todo.first().type()).toBe('div');
  });

  describe('the rendered div', () => {
      const div = () => todo.first();

      it('contains everything else that gets rendered', () => {
        expect(div().children()).toEqual(todo.children());
      });
  });

  it(`shows number of todos equal to props todos number`, () => {
    const todos = [{id:2, content:"play wideo games"}]
    const todoList = shallow(<Todo todos={todos} />);
    expect(todoList.find('p').length).toEqual(todos.length);
  });

  describe('render list of todos', () => {
    const todos = [{id:1, content:"make sandwich"},{id:2, content:"play wideo games"}] 
    const todoList = shallow(<Todo todos={todos} />);
  
    todos.forEach(todo => {
        it(`for each todo, include todo.content between <div><p>...  and todo.id as key of div`, () => {
            expect(todoList.containsMatchingElement(<div key={todo.id}><p>{todo.content}</p></div>)).toEqual(true)
        });
    });
  });

  it('shows message when there are no todos', () => {
    const todoList = shallow(<Todo todos={[]} />);
    expect(todoList.text()).toContain(`You have no todo's left!! lul`)
  });

  it(`doesn't show message when there are todos`, () => {
    const todoList = shallow(<Todo todos={[{id:1, content:"make sandwich"}]} />);
    expect(todoList.text()).not.toContain('No results!')
  });


});
