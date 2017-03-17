import { UPDATE_VIEW } from '../actions/testaction'

const initialState = {

    changeView: false,
    value: false
}



export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_VIEW:
            console.log(action)

            return Object.assign({}, state, action.update)

        default:
            return state

    }
}