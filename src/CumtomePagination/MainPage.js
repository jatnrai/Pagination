import React from 'react';
import CustomPagination from './CustomePagination';
import useProductData from '../CustomHook/DataPerPage';

const MainPage = () => {
  const { pageData, error } = useProductData();

  console.log(pageData)
  console.log(error)

  return (
    <div>
      <h1>10 item per Page</h1>
      <CustomPagination data={pageData} itemsPerPage={10} />
    </div>
  );
};

export default MainPage;
