/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

import chatActive from '../../../assets/icons/active-chat.png'
import chat from '../../../assets/icons/chat.png'
import ButtonShadow from '../buttonshadow'

const ChatButton = () => {
    const [isActive, setIsActive] = useState(false)

    const setActive = () => {
        const iconImage = document.querySelector('#imgchatbutton')
        const button = document.querySelector('#chatbutton').classList
        button.add('bg-indicator-blue', 'w-[68px]', 'h-[68px]', 'translate-x-3', 'mr-3')
        button.remove('bg-white', 'w-[60px]', 'h-[60px]')
        iconImage.setAttribute('src', chatActive)
    }

    const setUnactive = () => {
        const iconImage = document.querySelector('#imgchatbutton')
        const button = document.querySelector('#chatbutton').classList
        button.add('bg-white', 'w-[60px]', 'h-[60px]')
        button.remove('bg-indicator-blue', 'w-[68px]', 'h-[68px]', 'translate-x-3', 'mr-3')
        iconImage.setAttribute('src', chat)
    }

    // const activeHandler = () => {
    //     setIsActive(!isActive)
    //     if (isActive) {
    //         setActive()
    //     } else {
    //         setUnactive()
    //     }
    // }

    useEffect(() => {
        if (isActive) {
            setActive()
        } else {
            setUnactive()
        }
    }, [isActive])

    return (
        <div>
            <ButtonShadow id='chatshadowbutton' isActive={isActive} />
            <button onClick={() => setIsActive(!isActive)} id='chatbutton' className="relative flex justify-center items-center rounded-full w-[60px] h-[60px] cursor-pointer bg-white transition-all ease-in-out delay-150 duration-300">
                <img src={chat} id='imgchatbutton' className='w-2/5' alt="icon" />
            </button>
        </div>
    )
}

export default ChatButton