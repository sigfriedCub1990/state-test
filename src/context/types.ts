export type State = {
    origin: string
    date?: string
}

export type ProvidedValues = State & {
    dispatch?: React.Dispatch<Payload>
}

export type Payload = {
    type: string
    value: string
}


