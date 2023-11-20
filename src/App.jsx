import MainButton from "./components/fragments/MainButton"
import MainBoxLayout from "./components/layouts/MainBoxLayout"
import SearchBar from "./components/elements/searchbar"
import ChatBox from "./components/fragments/ChatBox"

function App() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen">
      <MainBoxLayout>
        <SearchBar />
        {Array(3).fill(0).map((d, i) => (
          <ChatBox key={i} index={i} />
        ))}
      </MainBoxLayout>
      <MainButton />
    </div>
  )
}

export default App
