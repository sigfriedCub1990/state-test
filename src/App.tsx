import { ChangeEvent } from 'react'
import './App.css'
import { ParametersProvider } from './context/Parameters'
import { useParameters } from './context/hooks'

const Header = () => {
    const { dispatch } = useParameters()

    const handleOriginChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
        const { value } = target

        dispatch!({
            type: 'CHANGE_ORIGIN',
            value
        })
    }

    return (
        <nav>
            <select onChange={handleOriginChange}>
                <option>vlc1</option>
                <option>mad2</option>
            </select>
        </nav>
    )
}

const Home = () => {
    const { dispatch } = useParameters()

    const handleDateChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { value } = target

        dispatch!({
            type: 'CHANGE_DATE',
            value
        })
    }

    return (
        <div style={{
            marginTop: 16
        }}>
            <input type="date" onChange={handleDateChange} />
        </div>
    )
}

const Another = () => {
    const {origin, date} = useParameters()

    if (!origin || !date) return <p>Select something to start :)</p>

    return (
        <div>
            <p>Selected origin: {origin}</p>
            <p>Selected date: {date}</p>
        </div>
    )
}


function App() {
  return (
      <ParametersProvider>
          <Header />
          <Home />
          <Another />
      </ParametersProvider>
  )
}

export default App
