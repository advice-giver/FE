import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { register } from '../actions';
import { OnboardForm, OnboardInput, StyledLink } from './Login';

const SelectTypeButton = styled.button`
    background-color: black;
    color: #57CACA;
    border: 1px solid white;
    padding: 15px;
    cursor: pointer;
`;

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            credentials: {
                username: '',
                password: '',
                expertise: '',
                yearsOfExperience: null,
                email: ''
            },
            isTypeSelected: false
        }
    }

    handleInputChange = event => {
        if (event.target.name === "yearsOfExperience") {
            this.setState({
                credentials: {
                    ...this.state.credentials,
                    yearsOfExperience: parseInt(event.target.value)
                }
            })
        } else {
            this.setState({
                credentials: {
                    ...this.state.credentials,
                    [event.target.name]: event.target.value
                }
            })
        }
    }

    register = event => {
        event.preventDefault();
        this.props.register(this.state.credentials);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.isTypeSelected && <SelectTypeButton onClick={() => this.setState({ isTypeSelected: true, credentials: {...this.state.credentials, adviceGiver: false} })}>Seeking Advice</SelectTypeButton>}
                    {!this.state.isTypeSelected && <SelectTypeButton onClick={() => this.setState({ isTypeSelected: true, credentials: {...this.state.credentials, adviceGiver: true} })}>Giving Advice</SelectTypeButton>}
                </div>

                {this.state.isTypeSelected && <OnboardForm onSubmit={event => this.register(event)}>
                    {this.state.isTypeSelected && <OnboardInput
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.credentials.username}
                        onChange={this.handleInputChange}
                    />}
                    {this.state.isTypeSelected && <OnboardInput
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.credentials.email}
                        onChange={this.handleInputChange}
                    />}
                    {this.state.credentials.adviceGiver && <OnboardInput
                        type="text"
                        name="expertise"
                        placeholder="Expertise"
                        value={this.state.credentials.expertise}
                        onChange={this.handleInputChange}
                    />}
                    {this.state.credentials.adviceGiver && <OnboardInput
                        type="number"
                        name="yearsOfExperience"
                        placeholder="Years of Experience"
                        value={parseInt(this.state.credentials.yearsOfExperience)}
                        onChange={this.handleInputChange}
                    />}
                    {this.state.isTypeSelected && <OnboardInput
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.handleInputChange}
                    />}
                    {this.state.isTypeSelected && <OnboardInput submit type="submit" value="Register" />}
                    {this.state.isTypeSelected && <StyledLink to="/">Already have an account?</StyledLink>}
                </OnboardForm>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        registering: state.registering
    }
}

export default connect(mapStateToProps, { register })(Register);