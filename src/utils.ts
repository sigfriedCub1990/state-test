export const copyPreviousParameters = (searchParameters: URLSearchParams) => {
    const previousParameters: Record<string, string> = {}

    for(const [key, value] of searchParameters.entries()) {
        previousParameters[key] = value
    }

    return previousParameters
}

