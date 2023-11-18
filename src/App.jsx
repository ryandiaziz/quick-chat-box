import Button from "./components/elements/button"
import MainButtonLayout from "./components/layouts/MainButtonLayout"

function App() {

  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen border-2 border-red-500 bg-slate-700">
      <Button />
      <MainButtonLayout />
    </div>
  )
}

export default App
