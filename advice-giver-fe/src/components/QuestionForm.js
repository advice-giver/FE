import React from 'react';
import {  Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

class QuestionForm extends React.Component {
    render(){
        return (
            <Form>
                <FormGroup>
                    <Label for="questionTopic">Topic</Label>
                    <Input type="select" name="topic" id="questionTopic">
                        <option>Business</option>
                        <option>Tech</option>
                        <option>Career</option>
                        <option>Education</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="questionTitle">Title</Label>
                    <Input type="text" name="title" id="questionTitle" placeholder="Paraphrased version of your question"/>
                </FormGroup>
                <FormGroup>
                    <Label for="questionBody">Body</Label>
                    <Input type="textarea" name="body" id="questionBody" placeholder="Enter detailed information for potential advisors. eg: specific details"/>
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