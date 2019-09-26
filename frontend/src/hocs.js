import React from "react"
import { Redirect } from "react-router-dom"

export function withAuth(WrappedComponent) {
    // TODO: verify if logged in
    const loggedIn = true
    if (!loggedIn) {
        return () => (<Redirect to="/login" />)
    }
    return props => (
        <WrappedComponent {...props} />
    )
}
