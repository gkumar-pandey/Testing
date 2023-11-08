import todoReducer from "./todo.reducer";

describe("Todo Reducer Test", () => {
  it("should add todo", () => {
    const initialState = {
      todos: [{ id: 1, text: "Learn testing", completed: false }],
    };
    const action = {
      type: "ADD_TODO",
      payload: {
        id: 2,
        text: "Learn React Redux",
        completed: false,
      },
    };

    const updatedState = todoReducer(initialState, action);

    expect(updatedState).toEqual({
      todos: [
        { id: 1, text: "Learn testing", completed: false },
        {
          id: 2,
          text: "Learn React Redux",
          completed: false,
        },
      ],
    });
  });
  it("should toggle todo ", () => {
    const initialState = {
      todos: [
        { id: 1, text: "Learn testing", completed: false },
        {
          id: 2,
          text: "Learn React Redux",
          completed: false,
        },
      ],
    };
    const action = {
      type: "TOGGLE_TODO",
      payload: {
        id: 2,
        text: "Learn React Redux",
        completed: false,
      },
    };
    const updatedState = todoReducer(initialState, action);

    expect(updatedState).toEqual({
      todos: [
        { id: 1, text: "Learn testing", completed: false },
        {
          id: 2,
          text: "Learn React Redux",
          completed: true,
        },
      ],
    });
  });
});
