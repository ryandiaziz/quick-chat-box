import { useEffect } from 'react'
import { useSelector } from "react-redux"

import MainBoxLayout from "./MainBoxLayout"
import TaskBox from '../fragments/TaskBox'
import TaskHeader from '../fragments/TaskHeader'

const TaskLayout = () => {
    const { isTaskActive } = useSelector((state) => state.menu)

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
    return (
        <MainBoxLayout id={'taskbox'} className={'hidden'}>
            <TaskHeader />
            <TaskBox />
        </MainBoxLayout>
    )
}

export default TaskLayout