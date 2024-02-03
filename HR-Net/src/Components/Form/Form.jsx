import { useState } from 'react';
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { states } from '@/Data/States'
import { departements } from '@/Data/Departements'
import { Modal } from 'usman-modal';

import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Form.css'

const STATES = [...new Set(states.map((state) => { return { value: state.abbreviation, label: state.name } }))];

const DEPARTEMENTS = [...new Set(departements.map((departement) => { return { value: departement.name, label: departement.name } }))];


const Form = () => {

    const [birthdate, onChangeBirthdate] = useState(undefined);
    const [startDate, setStartDate] = useState(new Date());

    const [modalIsActive, setModalIsActive] = useState(false);

    const closeModal = () => {
        setModalIsActive(false);
    };


    async function handleSubmit(e) {
        e.preventDefault()
        setModalIsActive(true)
      }

    return (
        <>
        <form className='createEmployee' onSubmit={handleSubmit} >
            
            <div className='form__field'>
                <label htmlFor='firstName'>First Name</label>
                <input type="text" name="firstName" required />
            </div>
            
            <div className='form__field'>
                <label htmlFor='lastName'>Last Name</label>
                <input type="text" name="lastName" required />
            </div>

            <div className='datepicker__container'>
                <div className='form__field'>
                    <label htmlFor='dateOfBirth'>Date of Birth</label>
                    <DatePicker
                        value={birthdate}
                        required
                        showIcon
                        dateFormat="dd/MM/yyyy"
                        selected={birthdate}
                        onChange={(date) => onChangeBirthdate(date)}
                        showYearDropdown
                        scrollableYearDropdown
                        maxDate={new Date()}
                        yearDropdownItemNumber={new Date().getFullYear() - 1900}
                    />
                </div>

                <div className='form__field'>
                    <label htmlFor='startDate'>Start date</label>
                    <DatePicker
                        value={startDate}
                        required
                        showIcon
                        showYearDropdown
                        scrollableYearDropdown
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                </div>
            </div>

            <fieldset>
                <legend>Adress</legend>

                <div className='form__field'>
                    <label htmlFor='street'>Street</label>
                    <input type="text" name="street" required />
                </div>

                <div className='form__field'>
                    <label htmlFor='city'>City</label>
                    <input type="text" name="city" required />
                </div>

                <div className='form__field'>
                    <label htmlFor='state'>State</label>
                    <Select className='select' options={STATES} required />
                </div>

                <div className='form__field'>
                    <label htmlFor='zipCode'>Zip Code</label>
                    <input type="text" name="zipCode" pattern="^[0-9]{5}(?:-[0-9]{4})?$" required />
                </div>
            </fieldset>

            <div className='form__field'>
                <label htmlFor='departement'>Departement</label>
                <Select className='select' options={DEPARTEMENTS} required />
            </div>

            <button className="openModalBtn" type="submit" >
                Save
            </button>
        </form>
        
        {modalIsActive && (
          <Modal title="Employee created" text="Well done! You've successfully created your employee" closeModal={closeModal} />
        )}
        </>
    );
};

export default Form;