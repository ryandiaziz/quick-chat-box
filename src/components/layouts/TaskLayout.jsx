import { useEffect } from 'react'
import { useSelector } from "react-redux"

import MainBoxLayout from "./MainBoxLayout"

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
            <h1 className="text-center font-bold text-5xl">TASK</h1>
        </MainBoxLayout>
    )
}

export default TaskLayout