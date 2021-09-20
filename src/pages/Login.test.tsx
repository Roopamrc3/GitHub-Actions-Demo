import React from "react";
import '@testing-library/jest-dom'
import {fireEvent, render, screen} from "@testing-library/react";
import Login from "./Login";
import store from '../store'
import {Provider} from "react-redux";

const renderLogin = () => {
    render(
        <Provider store={store}>
            <Login/>
        </Provider>
    )
}

test('Login Test', () => {
    renderLogin();
    expect(screen.getByTestId('Login')).toBeInTheDocument();

    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();
    fireEvent.change(emailInput, {target: {value: 'roopamrulz@gmail.com'}})
    expect(emailInput).toHaveValue('roopamrulz@gmail.com');

    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();
    fireEvent.change(passwordInput, {target: {value: '$oftwares3'}})
    expect(passwordInput).toHaveValue('$oftwares3');
})