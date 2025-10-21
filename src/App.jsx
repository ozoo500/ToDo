import { useState } from 'react'
import { FaPlus, FaTrash } from 'react-icons/fa'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }])
      setInput("")
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-emerald-400 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md shadow-2xl p-8 rounded-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">🌟 ToDo List</h1>

        {/* Input Section */}
        <div className="flex mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's on your mind?"
            className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-all duration-200"
            title="Add Todo"
          >
            <FaPlus />
          </button>
        </div>

        {/* Todos List */}
        <ul className="space-y-3">
          {
            todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="mr-3 h-5 w-5 accent-blue-600 cursor-pointer"
                  />
                  <span className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-600 transition"
                  title="Delete"
                >
                  <FaTrash />
                </button>
              </li>
            ))
          }
        </ul>

        {/* Empty State */}
        {todos.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No tasks yet. Add one above! 🚀</p>
        )}
      </div>
    </div>
  )
}

export default App
