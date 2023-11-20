import MainButton from "./components/fragments/MainButton"
import ChatLayout from "./components/layouts/ChatLayout"
import TaskLayout from "./components/layouts/TaskLayout"

function App() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen">
      <ChatLayout />
      <TaskLayout />
      <MainButton />
    </div>
  )
}

export default App
