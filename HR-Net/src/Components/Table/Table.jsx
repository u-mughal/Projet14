import { useEffect, useState } from "react";
import axios from 'axios';
import DataTable from 'react-data-table-component';
import './Table.css'

const Table = () => {
  const columns = [
    {
      name: "FirstName",
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'LastName',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Department',
      selector: row => row.address.city,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: row => row.id,
      sortable: true
    },
    {
      name: 'Street',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'City',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'State',
      selector: row => row.address.city,
      sortable: true,
    },
    {
      name: 'Zip Code',
      selector: row => row.address.city,
      sortable: true,
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const data = response.data;
        setRecords(data);
        setFilterRecords(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const [records, setRecords] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]); // Utilisé pour filtrer les enregistrements

  const handleFilter = (e) => {
    const inputValue = e.target.value.toLowerCase();
    // Filtrer les enregistrements en fonction de la valeur entrée dans l'input
    const newData = filterRecords.filter(row => row.name.toLowerCase().includes(inputValue));
    setRecords(newData);
  }

  const paginationComponentOptions = {
    rowsPerPageText: 'Show entries',
    rangeSeparatorText: 'de',
    selectAllRowsItem: false,
  };

  return (
    <div className="Table__container">
      <div className="input__container">
        <label htmlFor="searchInput">Search</label>
        <input id="searchInput" type="text" onChange={handleFilter} />
      </div>
      <DataTable
        columns={columns}
        data={records}
        defaultSortFieldId={1}
        pagination
        paginationComponentOptions={paginationComponentOptions}
      />
    </div>
  );
};

export default Table;
