/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

import taskActive from '../../../assets/icons/active-task.png'
import task from '../../../assets/icons/task.png'
import ButtonShadow from '../buttonshadow'

const TaskButton = () => {
    const [isActive, setIsActive] = useState(false)

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

    useEffect(() => {
        if (isActive) {
            setActive()
        } else {
            setUnactive()
        }
    }, [isActive])

    return (
        <div>
            <ButtonShadow id='taskshadowbutton' isActive={isActive} />
            <button onClick={() => setIsActive(!isActive)} id='taskbutton' className="relative flex justify-center items-center rounded-full w-[60px] h-[60px] cursor-pointer bg-white transition-all ease-in-out delay-150 duration-300">
                <img src={task} id='imgtaskbutton' className='w-2/5' alt="icon" />
            </button>
        </div>
    )
}

export default TaskButton