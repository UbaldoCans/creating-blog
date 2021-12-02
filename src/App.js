import React, { useState, useEffect } from 'react'

import './App.css';
import firebase from './libs/firebase'

import PostForm from './Components/PostForm'

import { Col, Row, Container, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

function App() {
  const [postsCollection, setPostsCollection] = useState({})

  useEffect(() => {
    fetch("https://blog-con-react-default-rtdb.firebaseio.com/")
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setPostsCollection(json)
      })
  }, [])

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col xs="12" md="6">
            <PostForm />
          </Col>
          <Col xs="12" md="6">
            <Row>
              {
                Object.keys(postsCollection).map(post => {
                  let { title, content, cover } = postsCollection[post]
                  return (
                    <Col xs="12" md="6">
                      <Card>
                        <CardImg top width="100%" src={ cover } alt="Card image cap" />
                        <CardBody>
                          <CardTitle tag="h5">{ title }</CardTitle>
                          <CardText>{ content }</CardText>
                        </CardBody>
                      </Card>
                    </Col>

                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;