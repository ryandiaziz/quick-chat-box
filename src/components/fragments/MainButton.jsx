import QuickButton from "../elements/quickbutton"
import TaskButton from "../elements/taskbutton"
import ChatButton from "../elements/chatbutton"

const MainButton = () => {
    return (
        <div className="flex gap-5 flex-row-reverse items-center fixed bottom-10 right-10">
            <ChatButton />
            <TaskButton />
            <QuickButton />
        </div>
    )
}

export default MainButton