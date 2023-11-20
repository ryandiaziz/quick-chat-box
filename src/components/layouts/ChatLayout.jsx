import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import MainBoxLayout from './MainBoxLayout'
import SearchBar from '../elements/searchbar'
import ChatBox from '../fragments/ChatBox'

const ChatLayout = () => {
    const { isChatActive } = useSelector((state) => state.menu)

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
    return (
        <MainBoxLayout id={'chatbox'} className={'hidden'}>
            <SearchBar />
            {Array(3).fill(0).map((d, i) => (
                <ChatBox key={i} index={i} />
            ))}
        </MainBoxLayout>
    )
}

export default ChatLayout