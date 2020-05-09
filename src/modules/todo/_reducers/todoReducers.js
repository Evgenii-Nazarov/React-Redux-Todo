const initialState = {
  todoList: [
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
    { id: 3, name: 'Task 3' },
    { id: 4, name: 'Task 4' },
    { id: 5, name: 'Task 5' },
    { id: 6, name: 'Task 6' },
    { id: 7, name: 'Task 7' },
  ],
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return {
        ...state,
      };

      case 'TODO_ADD':
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default todo;
