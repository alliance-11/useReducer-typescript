import './App.css'
import { useDataContext } from './DataProvider'
import { actionIncrement, actionUpdateMsg } from './reducer'

function App() {

  const { state, dispatch } = useDataContext()

  const handleUpdateMessage = () => {
    const msgNew = prompt("New msg pleeze", state.message)
    if (!msgNew) return
    dispatch(actionUpdateMsg(msgNew))
  }

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={() => dispatch(actionIncrement())}>
          count is: {state.counter}
        </button>
        <div onClick={handleUpdateMessage}>
          Message: {state.message}
        </div>
      </header>
    </div>
  )
}

export default App
