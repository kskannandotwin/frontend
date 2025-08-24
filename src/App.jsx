import './App.css'

function App() {
  return (
    <>
      <Text display="Hello" />
      <Text display="World" />
    </>
  )
}

function Text({ display }) {
  return (
    <div>
      {display}
    </div>
  )
}

export default App
