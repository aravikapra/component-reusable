import React from 'react'
import NavbarSide from '../components/NavbarSide';
import { Container, Row , Col } from 'react-bootstrap';
import CustomNavbar from '../components/Navbar';
import CustomTable from '../components/CustomTable';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Dashboard() {
    const menuItems = [
        { label: 'Home', link: '/home' },
        { label: 'About', link: '/about' },
        { label: 'Services', link: '/services' },
        { label: 'Contact', link: '/contact' },
      ];
      const tableData = [
        {
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          startDate: '2011/04/25',
          salary: '$320,800',
        },
        // Tambahkan data lainnya sesuai kebutuhan
      ];
      const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Dashboard', link: '/dashboard' },
      ];
      return (
        <div>
          <CustomNavbar></CustomNavbar>
          <Container fluid>
                <Row>
                <Col md={3} lg={2} className="bg-light">
                    <NavbarSide menuItems={menuItems} />
                </Col>
                <Col md={9} lg={10} className="bg-white">
                    <h2 className="mt-3">Dashboard Content</h2>
                    <Breadcrumbs paths={breadcrumbs}></Breadcrumbs>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <CustomTable data={tableData} />
                </Col>
                </Row>
            </Container>
        </div>
      );
}