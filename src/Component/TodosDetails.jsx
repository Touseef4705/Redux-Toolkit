import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router"
import { store } from '../Store/store'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faBackward } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from 'react-redux'
import { updateDescription } from '../Features/Todo/TodoSlice'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'

function Todosdetails() {
    const param = useParams()
    const userTodo = store.getState()
    const todosSelector = userTodo.todos.find((todo) => todo.text === param.text)

    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate('/')
    }

    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)

    const handleEditdesc = () => {
        const newDesc = prompt("Enter new description",  todosSelector.Description ? todosSelector.Description : "Enter a new description");
        if (newDesc !== null) {
            dispatch(updateDescription({ id: todosSelector.id, newDescription: newDesc }));
        }
    }

    return (
        <div className='bg-gray-300 p-5 rounded-md'>
            <div className="fixed text-lg text-white bg-black rounded-full p-3 px-4 cursor-pointer" onClick={handleGoBack}>
                <FontAwesomeIcon icon={faBackward} />
            </div>

            <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">{todosSelector.text}</h1>

                <ul className="list-disc pl-5">
                    <li className="text-gray-700 leading-relaxed flex justify-between items-center">
                        <span className='underline font-mono text-lg border p-2 rounded-md'>{todosSelector.Description}</span>
                        <FontAwesomeIcon
                            icon={faEdit}
                            onClick={handleEditdesc}
                            className="ml-3 text-blue-500 cursor-pointer hover:text-blue-600"
                        />
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Todosdetails