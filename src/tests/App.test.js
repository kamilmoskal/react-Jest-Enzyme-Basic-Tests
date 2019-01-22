import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Todo from '../components/Todo';
import AddTodo from '../components/AddTodo';

describe('<App />', () => {
  let appWrapper;
  let appInstance;
  const app = shallow(<App />);

  beforeEach(() => {
    appWrapper = app;
    appInstance = appWrapper.instance();
  });

  afterEach(() => {
    appWrapper = undefined;
    appInstance = undefined;
  });
  

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders a div wrapper', () => {
    expect(appWrapper.first().type()).toBe('div');
  });

  describe('the rendered div', () => {
      const div = () => appWrapper.first();

      it('contains everything else that gets rendered', () => {
        expect(div().children()).toEqual(appWrapper.children());
      });
  });

  it('renders <Todo /> inside', () => {
    expect(appWrapper.find(Todo).length).toBe(1);
     //expect(app.containsMatchingElement(<Todo />)).toEqual(true);
  });

  it('renders <AddTodo /> inside', () => {
    expect(appWrapper.find(AddTodo).length).toBe(1);
    //expect(app.containsMatchingElement(<AddTodo />)).toEqual(true);
  });

  describe('the rendered <Todo />', () => {
    const todo = () => appWrapper.find(Todo);

    it('receives state.todos as a "todos" prop', () => {
      expect(todo().prop('todos')).toEqual(appWrapper.state('todos'));
    });
    it('receives this.deleteTodo as "deleteTodo" prop', () => {
      expect(todo().prop('deleteTodo')).toEqual(
        appInstance.deleteTodo,
      );
    });
  });

  describe('the rendered <AddTodo />', () => {
    const addtodo = () => appWrapper.find(AddTodo);

    it('receives this.AddTodo as "AddTodo" prop', () => {
      expect(addtodo().prop('AddTodo')).toEqual(
        appWrapper.AddTodo,
      );
    });
  });

  describe('the deleteTodo method', () => {
    // Symulowany event, który mógłby trafić do metody z komponentu Todo
    const event = { target: { value: 1 } }; 
    let setDeleteTodoSpy;
    beforeEach(() => {
      // Metoda jest.spyOn pozwala śledzić wywołania funkcji,
      // dzięki niej dowiemy się czy deleteTodo props wywołał callback w this.deleteTodo w App.js.
      setDeleteTodoSpy = jest.spyOn(appInstance, 'deleteTodo');
      appInstance.deleteTodo(event);
    });

    afterEach(() => {
      setDeleteTodoSpy = undefined;
    });
    
    it('calls callback', () => {
      expect(setDeleteTodoSpy).toHaveBeenCalledTimes(1);
    }); 
  });

  describe('the addTodo method', () => {
    const event = { target: { value: 'throw litter' } }; 
    let setAddTodoSpy;
    beforeEach(() => {
      setAddTodoSpy = jest.spyOn(appInstance, 'addTodo');
      appInstance.addTodo(event);
    });

    afterEach(() => {
      setAddTodoSpy = undefined;
    });
    
    it('calls callback', () => {
      expect(setAddTodoSpy).toHaveBeenCalledTimes(1);
    }); 
  });

});
