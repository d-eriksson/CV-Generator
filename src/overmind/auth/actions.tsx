import {Action} from 'overmind'

export const logIn: Action<string> = ({ state }, value) => {
    state.auth.name = value
    state.auth.isLoggedIn = true
}
export const logOut: Action = ({ state }) => {
    state.auth.name = null
    state.auth.isLoggedIn = false
}