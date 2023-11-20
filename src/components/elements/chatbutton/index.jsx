/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ButtonShadow from '../buttonshadow'
import { setMenuChat } from '../../../states/menuSlice'
import chatActive from '../../../assets/icons/chat-active.svg'
import chat from '../../../assets/icons/chat.svg'

const ChatButton = () => {
    const dispatch = useDispatch()
    const { isChatActive, isQuickActive } = useSelector((state) => state.menu)

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

    const setQuickActive = () => {
        const wrapper = document.querySelector('#chatbuttonwrapper').classList
        wrapper.add('-translate-x-20')
    }

    const setQuickUnactive = () => {
        const wrapper = document.querySelector('#chatbuttonwrapper').classList
        wrapper.remove('-translate-x-20')
    }

    useEffect(() => {
        if (isQuickActive) {
            setQuickActive()
        } else {
            setQuickUnactive()
        }
    }, [isQuickActive])

    useEffect(() => {
        if (isChatActive) {
            setActive()
        } else {
            setUnactive()
        }
    }, [isChatActive])

    return (
        <div id='chatbuttonwrapper' className='absolute transition-all ease-in-out delay-150 duration-300 right-1'>
            <ButtonShadow id='chatshadowbutton' isActive={isChatActive} />
            <button onClick={() => dispatch(setMenuChat())} id='chatbutton' className="relative flex justify-center items-center rounded-full w-[60px] h-[60px] cursor-pointer bg-white transition-all ease-in-out duration-300">
                <img src={chat} id='imgchatbutton' className='w-2/5' alt="icon" />
            </button>
        </div>
    )
}

export default ChatButton