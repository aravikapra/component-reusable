import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net'; // Import DataTables
import 'datatables.net-bs5'; // Import DataTables Bootstrap 5 integration

function CustomTable({ data }) {
  const tableRef = useRef();

  useEffect(() => {
    // Initialize DataTables
    $(tableRef.current).DataTable({
      paging: true, // Menambahkan halaman
      searching: true, // Menambahkan pencarian
      ordering: true, // Menambahkan pengurutan
      responsive: true, // Membuat tabel responsif
      info: true, // Menampilkan informasi jumlah data
    });

    return () => {
      // Destroy the DataTables when unmounting the component
      // eslint-disable-next-line react-hooks/exhaustive-deps
      $(tableRef.current).DataTable().destroy();
    };
  }, [data]);

  return (
    <table ref={tableRef} className="table table-striped table-bordered" style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.position}</td>
            <td>{item.office}</td>
            <td>{item.age}</td>
            <td>{item.startDate}</td>
            <td>{item.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomTable;
