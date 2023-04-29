import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo, updateTodo, deleteTodo, getTodos } from "../../api/todosApi";
import { FaTrash, FaUpload } from 'react-icons/fa';

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('');
    const [searchTodo, setSearchTodo] = useState('');
    const queryClient = useQueryClient();

    const {data:todos, isLoading, isError,error} = useQuery({
        queryKey: ['todos'],
        queryFn: getTodos,
        select: todos => (todos.sort((a, b) => b.id - a.id)).filter((searchResult) => ((searchResult.title).toLowerCase().includes(searchTodo.toLocaleLowerCase())))
    });

    const addTodoMutation = useMutation(addTodo, {
        onSuccess: () => {
            // Invalidated cache and refetch
            queryClient.invalidateQueries('todos');
        }
    });

    const updateTodoMutation = useMutation(updateTodo, {
        onSuccess: () => {
            // Invalidated cache and refetch
            queryClient.invalidateQueries('todos');
        }
    });

    const deleteTodoMutation = useMutation(deleteTodo, {
        onSuccess: () => {
            // Invalidated cache and refetch
            queryClient.invalidateQueries('todos');
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodoMutation.mutate({
            userId: 1, 
            title: newTodo,
            completed: false
        })
        setNewTodo('');
    }

    const handleUpdate = (id) => {
        const todo = todos.find(foundTodo => foundTodo?.id === id);
        updateTodoMutation.mutate({
            ...todo, completed: !todo.completed
        })
    }

    const handleDelete = (id) => {
        const todo = todos.find(foundTodo => foundTodo?.id === id);
        deleteTodoMutation.mutate({ id: todo?.id })
    }

    const newItemSection = (
        <div className="border my-5 py-2.5 px-2.5">
            <div className="flex flex-row justify-between py-2">
                <label htmlFor="new-todo">Enter a new todo item</label>
                <input 
                    type="text" 
                    className="border rounded p-1.5 focus:outline-transparent"
                    placeholder="Search Todo"
                    value={searchTodo}
                    onChange={(e) => setSearchTodo(e.target.value)}
                />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row justify-between mt-2">
                    <div className="new-todo">
                        <input 
                            type="text" 
                            id="new-todo"
                            required
                            value={newTodo}
                            className="border focus:outline-transparent p-2 rounded-lg"
                            onChange={(e) => setNewTodo(e.target.value)}
                            placeholder="Enter new Todo"
                        />
                    </div>
                    <button type="submit" className="border rounded-lg px-4 py-2.5">
                        <FaUpload />
                    </button>
                </div>
            </form>
        </div>
    )

    let content;
    if (isLoading) {
        content = <p>Your Todos loading...</p>
    } else if (isError) {
        content = <p>{error.message}</p>
    } else {
        content = todos?.map((todo) => {
            return (
                <article key={todo?.id} className="flex flex-row justify-between border px-2 py-2">
                    <div className="pt-2 text-sm">
                        <input 
                            type="checkbox"
                            checked={todo?.completed}
                            className="mr-2"
                            onChange={() => 
                                handleUpdate(todo?.id)
                            }
                        />
                        <label htmlFor={todo?.id}>{todo?.title}</label>
                    </div>

                    <button className="border rounded-lg px-4 py-2.5" onClick={() => handleDelete(todo?.id)}>
                        <FaTrash color="red"/>
                  </button>
                </article>
            )
        })
    }

    return (
        <div className="px-10 md:container md:mx-auto md:px-0">
            {newItemSection}
            {content}
        </div>
    )
}

export default TodoList;