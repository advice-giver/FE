import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { login } from '../actions';
import { connect } from 'react-redux';

export const OnboardForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    padding: 25px 25px 25px 25px;
    background-color: black;
    border: 1px solid #266265;
    border-radius: 4px;
    margin: auto;
`;

export const OnboardInput = styled.input`
    outline: none;
    border: 1px solid #266265;
    font-size: 0.9rem;
    padding: 12px 6px;
    border-radius: 6px;
    margin-bottom: 15px;
    color: #266265;

    :placeholder {
        font-size: 0.9rem;
    }

    ${props =>
    props.submit && css`
        background-color: #57CACA;
        color: black;
        font-weight: 600;
        border: 1px solid white;
        cursor: pointer;
    `}
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #57CACA;
`;

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleInputChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    login = event => {
        event.preventDefault();
        this.props.login(this.state.credentials);
    }

    render() {
        return (
            <OnboardForm onSubmit={event => this.login(event)}>
                <OnboardInput
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.credentials.username}
                    onChange={this.handleInputChange}
                />
                <OnboardInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.credentials.password}
                    onChange={this.handleInputChange}
                />
                <OnboardInput submit type="submit" value="Login" />
                <StyledLink to="/register">Don't have an account yet?</StyledLink>
            </OnboardForm>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggingIn: state.loggingIn
    }
}

export default connect(mapStateToProps, { login })(Login);