import { useSelector, useDispatch } from "react-redux"

import { deleteTodo } from "../../../states/taskSlice"

const DeleteButton = ({ isShow, id, index, complete }) => {
    const dispatch = useDispatch()
    const { activeTask } = useSelector((state) => state.task)
    return (
        <button onClick={() => dispatch(deleteTodo({ taskID: activeTask, todoID: id, index, complete }))} className={`absolute w-[126px] h-[43px] px-[18px] py-[15px] text-[#EB5757] border border-primary-gray rounded-[5px] flex items-center -left-20 ${!isShow && 'hidden'}`}>Delete</button>
    )
}

export default DeleteButton