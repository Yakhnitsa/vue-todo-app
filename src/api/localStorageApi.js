let todoId = 0;

const todos = [];

const people = [];

const places = [];

export default {
    addTodo(todo){
        if(todo.id > 0){
            const index = todos.findIndex(item => item.id === todo.id);
            if(index !== -1) todos.splice(index,1,todo);
        }
        else{
            todo.id = ++todoId;
            todos.push(todo);
        }
        return todo;
    },
    deleteTodo(todo){
        const index = todos.findIndex(item => item.id === todo.id);
        if(index !== -1) todos.splice(index,1);
    },
    addPeople(person){
        //TODO Проверить на дубликат
        people.push(person);
    },
    addPlace(place){
        // TODO проверить на дубликат
        places.push(place);
    }

}
