import React, { Component } from 'react'
import { Card, CardGroup, Col, Container, Form, Row } from 'reactstrap';
import { FormStepper } from './items/Stepper.js';

class Job extends Component {
  componentDidMount(){
    this.props.jobDispatch.getColleges(this.props)
    this.props.jobDispatch.getJobs(this.props)
    this.props.jobDispatch.getIndustries(this.props)
  }
  render() {
    return (
      <div className="app center">
        <main className="main my-4">
          <Container>
            <Row className="justify-content-center">
              <Col md="8">
                <CardGroup>
                  <Card className="p-4">
                    <h2>ようこそAI-Recruiterへ</h2>
                    <p className="text-muted">あなたの情報をもとにおすすめの企業を抽出します</p>
                      <Form>
                        <FormStepper { ...this.props }/>
                      </Form>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </main>
        <p className="text-muted" style={{ textAlign: 'center' }}>OpenWorksのデータを参照しています https://www.vorkers.com/</p>
      </div>
    );
  }
}

export default Job;

