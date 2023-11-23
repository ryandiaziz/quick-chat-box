/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"

import MainBoxLayout from "./MainBoxLayout"
import TaskBox from '../fragments/TaskBox'
import TaskHeader from '../fragments/TaskHeader'
import Loader from '../elements/loader'
import { getTodosData, updateTodoData } from '../../states/taskSlice'

const TaskLayout = () => {
    const dispatch = useDispatch()
    const { isTaskActive } = useSelector((state) => state.menu)
    const { complete, unComplete, isLoading } = useSelector((state) => state.task)

    const setTaskBoxActive = () => {
        const chatBox = document.getElementById('taskbox').classList
        chatBox.remove('hidden')
    }

    const setTaskBoxUnactive = () => {
        const chatBox = document.getElementById('taskbox').classList
        chatBox.add('hidden')
    }

    useEffect(() => {
        if (isTaskActive) {
            setTaskBoxActive()
        } else {
            setTaskBoxUnactive()
        }

    }, [isTaskActive])

    useEffect(() => {
        if (isTaskActive) {
            dispatch(getTodosData(1))
        }
    }, [isTaskActive])
    return (
        <MainBoxLayout id={'taskbox'} className={'hidden'}>
            <button onClick={() => dispatch(updateTodoData({ taskID: 1, todoID: 1 }))}>TEST</button>
            <TaskHeader />
            {isLoading ? <Loader text={'Tasks'} />
                : <>
                    {unComplete.map((todo, i) => (<TaskBox key={i} index={i} id={`uncomplete${i}`} todo={todo} />))}
                    {complete.map((todo, i) => (<TaskBox key={i} index={1} id={`complete${i}`} todo={todo} />))}
                </>
            }
        </MainBoxLayout>
    )
}

export default TaskLayout