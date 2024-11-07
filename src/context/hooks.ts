import { createContext, useContext } from "react"
import { ProvidedValues, State } from "./types"

export const defaultState: State = {
    origin: 'vlc1',
    date: undefined
}

export const ParametersContext = createContext<ProvidedValues>(defaultState)

export const useParameters = () => {
    const { origin, date, dispatch } = useContext(ParametersContext)

    return {
        origin,
        date,
        dispatch
    }
}
