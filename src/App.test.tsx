import { describe, it, expect } from "vitest";
import { addTodo, editTitle, removeTodo, toggleTodo } from "./App";

// Todo App:
// Add todo ✅
// Remove todo ✅
// Complete todo ✅
// Edit todo ✅
// Get all completed todos
// Get all incomplete todos

// What is a todo?
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

describe("addTodo", () => {
  it("add a todo", () => {
    const todos: Todo[] = [
      {
        id: 1,
        title: "Buy milk",
        completed: false,
      },
      {
        id: 2,
        title: "Cook dinner",
        completed: false,
      },
    ];

    const result = addTodo(todos, "Learn TDD");

    const expectedResult = [
      {
        id: 1,
        title: "Buy milk",
        completed: false,
      },
      {
        id: 2,
        title: "Cook dinner",
        completed: false,
      },
      {
        id: 3,
        title: "Learn TDD",
        completed: false,
      },
    ];

    expect(result).toMatchObject(expectedResult);
  });
});

describe("removeTodo", () => {
  it("removes a todo successfully if it exists", () => {
    const todos: Todo[] = [
      {
        id: 1,
        title: "Buy milk",
        completed: false,
      },
      {
        id: 2,
        title: "Cook dinner",
        completed: false,
      },
    ];

    const result = removeTodo(todos, 1);

    const expectedResult = [
      {
        id: 2,
        title: "Cook dinner",
        completed: false,
      },
    ];

    expect(result).toMatchObject(expectedResult);
  });

  it("returns the same todos if the id does not exist", () => {
    const todos: Todo[] = [
      {
        id: 1,
        title: "Buy milk",
        completed: false,
      },
      {
        id: 2,
        title: "Cook dinner",
        completed: false,
      },
    ];

    const result = removeTodo(todos, 1123456);

    const expectedResult = [
      {
        id: 1,
        title: "Buy milk",
        completed: false,
      },
      {
        id: 2,
        title: "Cook dinner",
        completed: false,
      },
    ];

    expect(result).toMatchObject(expectedResult);
  });
});

describe("toggleTodo", () => {
  it("toggles a todo completeness if it exists", () => {
    const todos: Todo[] = [
      {
        id: 1,
        title: "Buy milk",
        completed: false,
      },
      {
        id: 2,
        title: "Cook dinner",
        completed: false,
      },
    ];

    const result = toggleTodo(todos, 1);

    const expectedResult = [
      {
        id: 1,
        title: "Buy milk",
        completed: true,
      },
      {
        id: 2,
        title: "Cook dinner",
        completed: false,
      },
    ];

    expect(result).toMatchObject(expectedResult);
  });

  it("returns the same todos if the id does not exist", () => {
    const todos: Todo[] = [
      {
        id: 1,
        title: "Buy milk",
        completed: false,
      },
      {
        id: 2,
        title: "Cook dinner",
        completed: false,
      },
    ];

    const result = toggleTodo(todos, 123456);

    const expectedResult = [
      {
        id: 1,
        title: "Buy milk",
        completed: false,
      },
      {
        id: 2,
        title: "Cook dinner",
        completed: false,
      },
    ];

    expect(result).toMatchObject(expectedResult);
  });
});

describe("editTitle", () => {
  it(`edits a todo's title if id exists`, () => {
    const todos: Todo[] = [
      {
        id: 1,
        title: "Buy milk",
        completed: false,
      },
      {
        id: 2,
        title: "Cook dinner",
        completed: false,
      },
    ];

    const result = editTitle(todos, 1, "Hello!");

    const expectedResult = [
      {
        id: 1,
        title: "Hello!",
        completed: false,
      },
      {
        id: 2,
        title: "Cook dinner",
        completed: false,
      },
    ];

    expect(result).toMatchObject(expectedResult);
  });

  it(`returns the same todos if id does not exist`, () => {
    const todos: Todo[] = [
      {
        id: 1,
        title: "Buy milk",
        completed: false,
      },
      {
        id: 2,
        title: "Cook dinner",
        completed: false,
      },
    ];

    const result = editTitle(todos, 112345, "Hello!");

    const expectedResult = [
      {
        id: 1,
        title: "Buy milk",
        completed: false,
      },
      {
        id: 2,
        title: "Cook dinner",
        completed: false,
      },
    ];

    expect(result).toMatchObject(expectedResult);
  });
});
