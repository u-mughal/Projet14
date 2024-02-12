import EmployeeTable from '../Components/EmployeeTable/EmployeeTable';

/**
 * Composant représentant la page de liste des employés.
 * Cette page affiche un titre "Current Employees" suivi d'un tableau des employés actuels.
 * @returns {JSX.Element} Composant React représentant la page de liste des employés.
 */
const List = () => {
  return (
    <div>
      {/* Titre de la page de liste des employés */}
      <h2>Current Employees</h2>
      {/* Tableau des employés */}
      <EmployeeTable />
    </div>
  );
};

export default List;
