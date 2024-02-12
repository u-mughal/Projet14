import { useState } from "react";
import DataTable from 'react-data-table-component';
import mockEmployees from '@/Data/Mockemployee.json'
import { useSelector } from 'react-redux';
import './Table.css'

const Table = () => {

  const reduxEmployees = useSelector((state) => state.employees);
  const employees = [...mockEmployees, ...reduxEmployees];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = () => {
    if (searchTerm === '') {
      return employees;
    }
    const term = searchTerm.toLowerCase();
    return employees.filter((employee) => {
      // Convertir les champs "department" et "state" en chaînes de caractères pour la recherche
      const departmentValue = employee.department.label.toLowerCase();
      const stateValue = employee.state.label.toLowerCase();
  
      // Créer un tableau de toutes les valeurs à rechercher
      const employeeData = [
        ...Object.values(employee).map((value) =>
          typeof value === 'string' ? value.toLowerCase() : ''
        ),
        departmentValue,
        stateValue,
      ];
  
      return employeeData.some((data) => data.includes(term));
    });
  };

  const columns = [
    { name: 'First Name', selector: (row) => row.firstname, sortable: true },
    { name: 'Last Name', selector: (row) => row.lastname, sortable: true },
    { name: 'Start Date', selector: (row) => row.startdate, sortable: true },
    { name: 'Department', selector: (row) => row.department.label, sortable: true },
    { name: 'Date of Birth', selector: (row) => row.birthdate, sortable: true },
    { name: 'Street', selector: (row) => row.street, sortable: true },
    { name: 'City', selector: (row) => row.city, sortable: true },
    { name: 'State', selector: (row) => row.state.label, sortable: true },
    { name: 'Zip Code', selector: (row) => row.zipcode, sortable: true },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const customPaginationOptionsPerPage = [10, 25, 50, 100];

  const paginationComponentOptions = {
    rowsPerPageText: 'Show entries',
    rangeSeparatorText: 'of',
    selectAllRowsItem: false,
  };

  return (
    <div className="Table__container">
      <div className="input__container">
        <label htmlFor="searchInput">Search</label>
        <input id="searchInput" type="text" onChange={handleSearch} />
      </div>
      <DataTable
        columns={columns}
        data={filteredData()}
        defaultSortFieldId={1}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        paginationRowsPerPageOptions={customPaginationOptionsPerPage} 
      />
    </div>
  );
};

export default Table;
