import React, { Component } from 'react'
import { Card, CardBody, CardGroup, Col, Container, Form, InputGroup, Row } from 'reactstrap';
import { FormStepper } from './items/Stepper.js';

class Job extends Component {
  componentDidMount(){
    this.props.applicantDispatch.getColleges(this.props)
    this.props.applicantDispatch.getOccupations()
  }
  render() {
    return (
      <div className="app center">
        <main className="main" style={{ marginTop:'20px' }}>
          <Container>
            <Row className="justify-content-center">
              <Col md="8">
                <CardGroup>
                  <Card className="p-4">
                    <h2>就活AI</h2>
                    <p className="text-muted">Welcome to Job Hunting AI!</p>
                      <Form>
                        <FormStepper { ...this.props }/>
                      </Form>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    );
  }
}

export default Job;

