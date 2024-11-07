import { PropsWithChildren, useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import { Payload, State } from "./types";
import { defaultState, ParametersContext } from "./hooks";


const stateReducer = (state: State, action: Payload) => {
    switch (action.type) {
        case 'CHANGE_DATE': {
            return {
                ...state,
                date: action.value
            }
        }
        case 'CHANGE_ORIGIN': {
            return {
                ...state,
                origin: action.value
            }
        }
        default: {
            return state
        }
    }
}

export const ParametersProvider = ({ children }: PropsWithChildren) => {
    const [, setSearchParameters] = useSearchParams()
    const [state, dispatch] = useReducer(stateReducer, defaultState)

    useEffect(() => {
        if (!state.date) {
            return setSearchParameters({ origin: state.origin })
        }
        setSearchParameters(state)
    }, [state, setSearchParameters])

    return (
        <ParametersContext.Provider value={{...state, dispatch}}>
            {children}
        </ParametersContext.Provider>
    )
}

