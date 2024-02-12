import { useState } from "react";
import DataTable from 'react-data-table-component';
import mockEmployees from '@/Data/Mockemployee.json'
import { useSelector } from 'react-redux';
import './EmployeeTable.css'

/**
 * Composant de la table des employés.
 * @returns {JSX.Element} Composant React représentant la table des employés.
 */
const Table = () => {
  // Utilisation de Redux pour récupérer les données des employés
  const reduxEmployees = useSelector((state) => state.employees);
  const employees = [...mockEmployees, ...reduxEmployees];

  // État local pour la recherche
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Fonction pour filtrer les données en fonction du terme de recherche.
   * @returns {Array} Tableau des employés filtrés.
   */
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

  // Colonnes de la table
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

  /**
   * Fonction pour gérer la recherche.
   * @param {Object} event - L'événement onChange.
   */
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  // Options de pagination personnalisées
  const customPaginationOptionsPerPage = [10, 25, 50, 100];

  const paginationComponentOptions = {
    rowsPerPageText: 'Show entries',
    rangeSeparatorText: 'of',
    selectAllRowsItem: false,
  };

  // Rendu de la table des employés
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
