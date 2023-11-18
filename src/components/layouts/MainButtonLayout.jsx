import QuickButton from "../elements/quickbutton"
import TaskButton from "../elements/taskbutton"
import ChatButton from "../elements/chatbutton"

const MainButtonLayout = () => {
    return (
        <div className="flex gap-5 flex-row-reverse items-center fixed bottom-10 right-10">
            <QuickButton />
            <ChatButton />
            <TaskButton />
        </div>
    )
}

export default MainButtonLayout