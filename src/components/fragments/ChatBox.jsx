/* eslint-disable react/prop-types */
import ProfileImage from "../elements/profileimage"
import ChatTittle from "../elements/chattittle"
import PreviewName from "../elements/previewname"
import PreviewMessage from "../elements/previewmessage"
import PreviewDate from "../elements/previewdate"

const ChatBox = ({ index }) => {
    return (
        <article className={`flex py-[22px] ${index && 'border-t-2 border-primary-gray'}`}>
            <ProfileImage />
            <div className="ml-5">
                <div className="flex items-center">
                    <ChatTittle />
                    <PreviewDate />
                </div>
                <PreviewName />
                <PreviewMessage />
            </div>
        </article>
    )
}

export default ChatBox