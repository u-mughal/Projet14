import EmployeeForm from "../Components/EmployeeForm/EmployeeForm";

/**
 * Composant représentant la page d'accueil de l'application.
 * Cette page affiche un titre "Create Employee" suivi d'un formulaire pour créer un nouvel employé.
 * @returns {JSX.Element} Composant React représentant la page d'accueil.
 */
const Home = () => {
    return (
        <>
            {/* Titre de la page d'accueil */}
            <h2>Create Employee</h2>
            {/* Formulaire de création d'employé */}
            <EmployeeForm />
        </>
    );
};

export default Home;
