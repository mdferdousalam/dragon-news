import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNave from '../Pages/Shared/LeftSideNav/LeftSideNave';
import RightSideNav from '../Pages/Shared/RightSideNave/RightSideNav';
const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block' >
                        <LeftSideNave></LeftSideNave>
                    </Col>

                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>

                    <Col lg="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Layout;