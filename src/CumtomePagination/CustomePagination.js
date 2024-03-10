import React, { useState } from 'react';
import DataCard from './DataCard';
import { Col, Row } from 'react-bootstrap';

const CustomPagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);

  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Row className='g-2 justify-content-around'>
        {currentData.map((item, index) => (
          
          <Col xl={4} lg={4} md={5} sm={6} key={index}>
          <div className='text-center'>
          <DataCard key={item.id} CardData={item}/>
          </div>
          </Col>
          
        ))}
      </Row>
      <div className='d-flex justify-content-center my-4'>
        <button className='mx-2 btn btn-primary' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage}</span>
        <button className='mx-2 btn btn-primary' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomPagination;
