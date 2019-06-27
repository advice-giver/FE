import React from 'react';
import {  Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import requiresAuth from './requiresAuth';

class QuestionForm extends React.Component {
    state = {
        question:{
            user_id: 2,
            type:'select',
            title:'',
            message:'',
            private:false,
            isAnswered:false,
        }
    }

    changeHandler = e => {
        e.preventDefault();
        e.persist();
        this.setState( prevState =>({
            question:{
            ...prevState.question,
            [e.target.name]: e.target.value
            }
        }));
    }

    postQ = (e,question) => {
        e.preventDefault();
        this.props.postQ(question)
    }

    render(){
        return (
            <Form onSubmit={e => this.postQ(e, this.question)}>
                <FormGroup>
                    <Label for="questionTopic">Topic</Label>
                    <Input onChange={this.changeHandler} type="select" name="type" id="questionTopic" value={this.state.question.type}>
                        <option value='select'>Select</option>
                        <option value='Business'>Business</option>
                        <option value='Tech'>Tech</option>
                        <option value='Career'>Career</option>
                        <option value='Education'>Education</option>
                        <option value='Finance'>Finance</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="questionTitle">Title</Label>
                    <Input 
                        onChange={this.changeHandler} 
                        type="text" 
                        name="title" 
                        value={this.state.question.title} 
                        id="questionTitle" 
                        placeholder="Paraphrased version of your question"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="questionBody">Body</Label>
                    <Input 
                        onChange={this.changeHandler} 
                        type="textarea" 
                        name="message" 
                        id="questionBody" 
                        value={this.state.question.message} 
                        placeholder="Enter detailed information for potential advisors. eg: specific details"
                    />
                </FormGroup>
                <Row>
                    <Col md="10">
                        <Input addon type="checkbox"/>
                        <FormText color="muted">Check To Make Private</FormText>
                    </Col>
                    <Col>
                        <Button>Submit</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default requiresAuth(QuestionForm);