/**
 * Created by mitchell_verter on 12/19/16.
 */

const toggleTodo = (todo) => {

}

const testToggleTodo = () => {
    const todoBefore = {
        id: 0,
        text: 'Learn redux',
        completed: false
    };
    const todoAfter = {
        id: 0,
        text: 'Learn redux',
        completed: true
    }
    deepFreeze(todoBefore);

    expect(
        toggleTodo(todoBefore)
    ).toEqual(todoAfter)
};

testToggleTodo();

console.log("All tests passed")

const toggleTodo = (todo) -> {
    return Object.assign({}, todo, {
        completed: !todo.completed
    })
}

