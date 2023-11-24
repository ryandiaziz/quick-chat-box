/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"

import MainBoxLayout from "./MainBoxLayout"
import TaskBox from '../fragments/TaskBox'
import TaskHeader from '../fragments/TaskHeader'
import Loader from '../elements/loader'
import { getTodosData } from '../../states/taskSlice'

const TaskLayout = () => {
    const dispatch = useDispatch()
    const { isTaskActive } = useSelector((state) => state.menu)
    const { completeTask, unCompleteTask, isLoading } = useSelector((state) => state.task)

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
            <TaskHeader />
            {isLoading ? <Loader text={'Tasks'} />
                : <>
                    {unCompleteTask.map((todo, i) => (
                        <TaskBox
                            key={i}
                            index={i}
                            id={`uncomplete${i}`}
                            todo={todo}
                        />
                    ))}
                    {completeTask.map((todo, i) => (
                        <TaskBox
                            key={i}
                            index={i}
                            id={`complete${i}`}
                            todo={todo}
                            isComplete={true}
                        />
                    ))}
                </>
            }
        </MainBoxLayout>
    )
}

export default TaskLayout