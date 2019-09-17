
const INITIAL_STATE = {
    user: "Saifullah Razzaq",
    age: "20"
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CHANGE":
            return ({
                ...state,
                user: action.payload
        })
        default:
            return state
    }

}