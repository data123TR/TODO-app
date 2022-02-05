import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import EducationalComponent from './components/EducationalComponent';
import { Col, Nav, Row } from 'react-bootstrap';
import EducationalTable from './components/EducationalTable';
import './App.css';

export default function App() {
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>


      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first" className='heading'><h4>Educational Data </h4></Nav.Link>

                <EducationalComponent />
              </Nav.Item>
            </Nav>
          </Col>

        </Row>
      </Tab.Container>

    </div>
  );
}



