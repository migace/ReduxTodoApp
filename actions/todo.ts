export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = (text: string) => ({
        type: ADD_TODO,
        text
});

export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    id
});
