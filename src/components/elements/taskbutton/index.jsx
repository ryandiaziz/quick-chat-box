/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import taskActive from '../../../assets/icons/task-active.svg'
import task from '../../../assets/icons/task.svg'
import ButtonShadow from '../buttonshadow'
import { setMenuTask } from '../../../states/menuSlice'

const TaskButton = () => {
    const dispatch = useDispatch()
    const { isTaskActive, isQuickActive, isChatActive } = useSelector((state) => state.menu)

    const setActive = () => {
        const button = document.querySelector('#taskbutton').classList
        const iconImage = document.querySelector('#imgtaskbutton')
        button.add('bg-indicator-orange', 'w-[68px]', 'h-[68px]', 'translate-x-3', 'mr-3')
        button.remove('bg-white', 'w-[60px]', 'h-[60px]')
        iconImage.setAttribute('src', taskActive)
    }

    const setUnactive = () => {
        const iconImage = document.querySelector('#imgtaskbutton')
        const button = document.querySelector('#taskbutton').classList
        button.add('bg-white', 'w-[60px]', 'h-[60px]')
        button.remove('bg-indicator-orange', 'w-[68px]', 'h-[68px]', 'translate-x-3', 'mr-3')
        iconImage.setAttribute('src', task)
    }

    const setQuickActive = () => {
        const wrapper = document.querySelector('#taskbuttonwrapper').classList
        wrapper.add('-translate-x-40')
    }

    const setQuickUnactive = () => {
        const wrapper = document.querySelector('#taskbuttonwrapper').classList
        wrapper.remove('-translate-x-40')
    }

    const setChatActive = () => {
        const wrapper = document.querySelector('#taskbuttonwrapper').classList
        wrapper.add('-translate-x-44')
    }

    const setChatUnactive = () => {
        const wrapper = document.querySelector('#taskbuttonwrapper').classList
        wrapper.remove('-translate-x-44')
    }

    useEffect(() => {
        if (isQuickActive) {
            setQuickActive()
        } else {
            setQuickUnactive()
        }
    }, [isQuickActive])

    useEffect(() => {
        if (isTaskActive) {
            setActive()
        } else {
            setUnactive()
        }
    }, [isTaskActive])

    useEffect(() => {
        if (isChatActive) {
            setChatActive()
        } else {
            setChatUnactive()
        }
    }, [isChatActive])

    return (
        <div id='taskbuttonwrapper' className='absolute transition-all ease-in-out delay-150 duration-300 right-1'>
            <ButtonShadow id='taskshadowbutton' isActive={isTaskActive} />
            <button onClick={() => dispatch(setMenuTask())} id='taskbutton' className="relative flex justify-center items-center rounded-full w-[60px] h-[60px] cursor-pointer bg-white transition-all ease-in-out duration-300">
                <img src={task} id='imgtaskbutton' className='w-2/5' alt="icon" />
            </button>
        </div>
    )
}

export default TaskButton