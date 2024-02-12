import { configureStore, createSlice } from "@reduxjs/toolkit"

// Définition du slice pour gérer les employés
const employeesSlice = createSlice({
    name: "employees", // Nom du slice
    initialState: [], // État initial : tableau vide d'employés
    reducers: {
        // Action pour ajouter un employé au tableau d'employés
        addEmployee: (state, action) => {
            state.push(action.payload); // Ajout de l'employé à l'état
        }
    }
})

// Export des actions du slice
export const { addEmployee } = employeesSlice.actions;

// Configuration du magasin principal
export const mainStore = configureStore({
    reducer: {
        employees: employeesSlice.reducer // Utilisation du reducer du slice pour gérer les employés
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Utilisation du middleware par défaut
    devTools: true, // Activation des outils de développement Redux
})
