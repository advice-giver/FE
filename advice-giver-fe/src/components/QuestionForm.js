import React from 'react';
import {  Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

class QuestionForm extends React.Component {
    render(){
        return (
            <Form onSubmit={e => this.props.postQ(e, this.props.question)}>
                <FormGroup>
                    <Label for="questionTopic">Topic</Label>
                    <Input onChange={this.props.changeHandler} type="select" name="type" id="questionTopic" value={this.props.question.type}>
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
                        onChange={this.props.changeHandler} 
                        type="text" 
                        name="title" 
                        value={this.props.question.title} 
                        id="questionTitle" 
                        placeholder="Paraphrased version of your question"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="questionBody">Body</Label>
                    <Input 
                        onChange={this.props.changeHandler} 
                        type="textarea" 
                        name="message" 
                        id="questionBody" 
                        value={this.props.question.message} 
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

export default QuestionForm;