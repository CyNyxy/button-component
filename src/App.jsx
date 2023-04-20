import Button from "./stories/Button/Button"

function App() {

  return (
    <div className="App">
      <Button
        color={"default"}
        variant={"default"}
        size={"lg"}
        iconStart={"add"}
        label={"Button"}
        disabled
      />
    </div>
  )
}

export default App;
