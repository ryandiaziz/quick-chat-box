/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import MainBoxLayout from './MainBoxLayout'
import SearchBar from '../elements/searchbar'
import ChatBox from '../fragments/ChatBox'
import Loader from '../elements/loader'
import { getRoomsData } from '../../states/chatSlice'

const ChatLayout = () => {
    const dispatch = useDispatch()
    const { isChatActive } = useSelector((state) => state.menu)
    const { rooms, isLoading } = useSelector((state) => state.chat)

    const setChatBoxActive = () => {
        const chatBox = document.getElementById('chatbox').classList
        chatBox.remove('hidden')
    }

    const setChatBoxUnactive = () => {
        const chatBox = document.getElementById('chatbox').classList
        chatBox.add('hidden')
    }

    useEffect(() => {
        if (isChatActive) {
            setChatBoxActive()
        } else {
            setChatBoxUnactive()
        }

    }, [isChatActive])

    useEffect(() => {
        if (isChatActive) {
            dispatch(getRoomsData())
        }
    }, [isChatActive])
    return (

        <MainBoxLayout id={'chatbox'} className={'hidden'}>
            <SearchBar />
            {isLoading ? <Loader text={'Chats'} />
                : rooms.map((room, i) => (
                    <ChatBox
                        key={i}
                        index={i}
                        room={room}
                    />
                ))
            }
        </MainBoxLayout>
    )
}

export default ChatLayout