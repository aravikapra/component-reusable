import React, { useState, useEffect }  from 'react';
import CustomNavbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import CustomJumbotron from '../components/Jumbotron.js';
import Features from '../components/Features.js';
import CustomTable from '../components/CustomTable.js';
import CustomForm from '../components/CustomForm.js';
import CustomCard from '../components/CustomCard.js';
import CustomButtons from '../components/CustomButton.js';
import CustomModal from '../components/CustomModal.js';
import { Button } from 'react-bootstrap';
import { Container, Row , Col } from 'react-bootstrap';
import LoadingBar from '../components/LoadingBar.js';

function LandingPage() {
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
  const cardsData = [
    {
      imageUrl: 'https://via.placeholder.com/400x200',
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      imageUrl: 'https://via.placeholder.com/400x200',
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      imageUrl: 'https://via.placeholder.com/400x200',
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
  ];
  const formFields = [
    {
      id: 'name',
      type: 'text',
      label: 'Name',
      placeholder: 'Enter your name',
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email address',
      placeholder: 'Enter your email',
    },
    {
      id: 'message',
      type: 'textarea',
      label: 'Message',
      placeholder: 'Enter your message',
    },
    {
      id: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
    },
  ];
  const handleSubmit = (formData) => {
    // Kirim data form ke API atau lakukan operasi lainnya
    console.log(formData);
  };
  const handleEdit = () => {
    // Logika untuk tombol Edit
    console.log('Edit button clicked');
  };

  const handleCreate = () => {
    // Logika untuk tombol Create
    console.log('Create button clicked');
  };

  const handleDelete = () => {
    // Logika untuk tombol Delete
    console.log('Delete button clicked');
  };

  const buttons = [
    { label: 'Edit', variant: 'primary', onClick: handleEdit },
    { label: 'Create', variant: 'success', onClick: handleCreate },
    { label: 'Delete', variant: 'danger', onClick: handleDelete },
  ];

  // Custom Modal
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  //custom navbar
  const customLinks = [
    { url: "#custom-home", text: "Custom Home" },
    { url: "#custom-about", text: "Custom About" },
    { url: "#custom-contact", text: "Custom Contact" },
  ];
  //loading bar
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Contoh penggunaan: Meningkatkan progress setiap 1 detik
    const interval = setInterval(() => {
      if (loadingProgress < 100) {
        setLoadingProgress((prevProgress) => prevProgress + 10);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [loadingProgress]);
  return (
    <>
       <CustomNavbar brandText="My Custom Brand" links={customLinks} />
      <CustomJumbotron></CustomJumbotron>
      <Features />

      <Container className="py-5">
        <h2 className="text-center mb-4">Featured Content</h2>
        <CustomCard cardsData={cardsData} />
      </Container>
      <Container>
      <h2 className="mb-4">Employee Data</h2>
        <CustomTable data={tableData} />
      </Container>
      <Container>
        <CustomForm formFields={formFields} onSubmit={handleSubmit} />
      </Container>
      <Container className='mt-3'>
        <Row>
          <Col className='col-2'>
          <CustomButtons buttons={buttons} />
          </Col>
        </Row>
      </Container>
      <Container className='mt-5'>
      <button className="btn btn-primary" onClick={handleShowModal}>
        Open Modal
      </button>
      <CustomModal
        show={showModal}
        onHide={handleCloseModal}
        title="Custom Modal"
        body={
          <>
          <LoadingBar progress={loadingProgress} />
          </>
        }
        footer={
          <>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseModal}>
              Save Changes
            </Button>
          </>
        }
      />
      </Container>
      <Footer></Footer>
    </>
  );
}

export default LandingPage;
