/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { updateTodoData } from "../../../states/taskSlice"

const TaskCheck = ({ checkID, uncheckID, isCheck, index, id }) => {
    const dispatch = useDispatch()
    const { activeTask } = useSelector((state) => state.task)

    const setCheck = () => {
        const iconCheck = document.getElementById(checkID).classList
        const iconUncheck = document.getElementById(uncheckID).classList
        iconUncheck.add('hidden')
        iconCheck.remove('hidden')
    }

    const setUncheck = () => {
        const iconCheck = document.getElementById(checkID).classList
        const iconUncheck = document.getElementById(uncheckID).classList
        iconUncheck.remove('hidden')
        iconCheck.add('hidden')
    }

    const checkHandler = () => {
        dispatch(updateTodoData({ taskID: activeTask, todoID: id, complete: isCheck, index }))
    }

    useEffect(() => {
        if (isCheck) {
            setCheck()
        } else {
            setUncheck()
        }
    }, [isCheck])

    return (
        <div onClick={checkHandler} id="checkIconWrapper" className="mr-5">
            <svg id={checkID} className="hidden" width="25" height="25" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M29.5089 4.52631H8.38607C6.72642 4.52631 5.36853 5.8842 5.36853 7.54385V28.6667C5.36853 30.3263 6.72642 31.6842 8.38607 31.6842H29.5089C31.1685 31.6842 32.5264 30.3263 32.5264 28.6667V7.54385C32.5264 5.8842 31.1685 4.52631 29.5089 4.52631ZM29.5089 28.6667H8.38607V7.54385H29.5089V28.6667ZM25.8576 11.4365L27.985 13.5789L15.9148 25.6491L9.87975 19.6291L12.0222 17.5018L15.9148 21.3793L25.8576 11.4365Z" fill="#828282" />
            </svg>
            <svg id={uncheckID} className="" width="25" height="25" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.54391 4.52631H28.6667C30.3264 4.52631 31.6843 5.8842 31.6843 7.54385V28.6667C31.6843 30.3263 30.3264 31.6842 28.6667 31.6842H7.54391C5.88426 31.6842 4.52637 30.3263 4.52637 28.6667V7.54385C4.52637 5.8842 5.88426 4.52631 7.54391 4.52631ZM28.6667 28.6667V7.54385H7.54391V28.6667H28.6667Z" fill="#828282" />
            </svg>
        </div>
    )
}

export default TaskCheck