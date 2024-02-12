import { useState } from 'react';
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { states } from '@/Data/States'
import { departements } from '@/Data/Departements'
import { Modal } from 'usman-modal';
import { useDispatch } from "react-redux";
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import './Form.css'

const STATES = [...new Set(states.map((state) => { return { value: state.abbreviation, label: state.name } }))];

const DEPARTEMENTS = [...new Set(departements.map((departement) => { return { value: departement.name, label: departement.name } }))];


const Form = () => {

    const dispatch = useDispatch();

    const schema = yup.object().shape({
        firstname: yup.string().required("Please enter the employee firstname").min(2).max(30),
        lastname: yup.string().required("Please enter the employee lastname").min(2).max(30),
        birthdate: yup.date(),
        startdate: yup.date(),
        street: yup.string().required("Please insert the employee street adress"),
        city: yup.string().required("Please insert the employee city adress"),
        zipcode: yup.number().positive().integer().required("Please enter the employee ZIP code"),
    });

    const [modalIsActive, setModalIsActive] = useState(false);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedDepartment, setSelectedDepartment] = useState(null);

    const handleStateChange = (selectedOption) => {
        setSelectedState(selectedOption);
    };
    
    
    const handleDepartmentChange = (selectedOption) => {
        setSelectedDepartment(selectedOption);
    };

    const closeModal = () => {
        setModalIsActive(false);
    };

    const { register, handleSubmit, control, reset, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmit = (data) => {
        data.state = selectedState;
        data.department = selectedDepartment;
        data.startdate = new Date(data.startdate).toLocaleDateString('zh-Hans-CN');
        data.birthdate = new Date(data.birthdate).toLocaleDateString('zh-Hans-CN');
        console.log(data);
        setModalIsActive(true);
        reset({ firstname: "", lastname: "", birthdate: "", startdate: "", department: "Sales", street: "", city: "", state: "Alabama", zipcode: "" });
        dispatch({ type: 'employees/addEmployee', payload: data });
    }
    

    return (
        <>
        
        <form className='createEmployee' onSubmit={handleSubmit(onSubmit)} noValidate>
            
            <div className='form__field'>
                <label htmlFor='firstname'>First Name</label>
                <input type="text" name="firstName" id="firstname" {...register("firstname")} required />
                <p className='error'>{errors.firstname?.message}</p>
            </div>
            
            <div className='form__field'>
                <label htmlFor='lastname'>Last Name</label>
                <input type="text" name="lastName" id="lastname" {...register("lastname")} required />
                <p className='error'>{errors.lastname?.message}</p>
            </div>

            <div className='datepicker__container'>
                <div className='form__field'>
                    <label htmlFor='birthdate'>Date of Birth</label>
                    <Controller
                        name="birthdate"
                        id="birthdate"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <DatePicker
                            type="date"
                            showIcon
                            dateFormat="dd/MM/yyyy"
                            showYearDropdown
                            scrollableYearDropdown
                            placeholderText="Click to select a date"
                            onChange={(date) => {
                                onChange(date);
                                console.log(date);
                            }}
                            onBlur={onBlur}
                            selected={value}
                            yearDropdownItemNumber={new Date().getFullYear() - 1900}
                            />
                        )}
                    />
                    <p className='error'>{errors.birthdate?.message}</p>
                </div>

                <div className='form__field'>
                    <label htmlFor='startdate'>Start date</label>
                    <Controller
                        name="startdate"
                        id="startdate"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <DatePicker
                            type="date"
                            showIcon
                            dateFormat="dd/MM/yyyy"
                            showYearDropdown
                            scrollableYearDropdown
                            placeholderText="Click to select a date"
                            onChange={(date) => {
                                onChange(date);
                                console.log(date);
                            }}
                            onBlur={onBlur}
                            selected={value}
                            yearDropdownItemNumber={new Date().getFullYear() - 1900}
                            todayButton="Today"
                            />
                        )}
                    />
                    <p className='error'>{errors.startdate?.message}</p>
                </div>
            </div>

            <fieldset>
                <legend>Adress</legend>

                <div className='form__field'>
                    <label htmlFor='street'>Street</label>
                    <input type="text" name="street" id="street" {...register("street")} required />
                    <p className='error'>{errors.street?.message}</p>
                </div>

                <div className='form__field'>
                    <label htmlFor='city'>City</label>
                    <input type="text" name="city" id="city" {...register("city")} required />
                    <p className='error'>{errors.city?.message}</p>
                </div>

                <div className='form__field'>
                    <label htmlFor='state'>State</label>
                    <Select
                        className='select'
                        options={STATES}
                        name="state"
                        inputId="state"
                        value={selectedState}
                        onChange={handleStateChange}
                    />
                    <p className='error'>{errors.state?.message}</p>
                </div>

                <div className='form__field'>
                    <label htmlFor='zipcode'>Zip Code</label>
                    <input type="text" name="zipcode" id="zipcode" {...register("zipcode")} required />
                    <p className='error'>{errors.zipcode?.message}</p>
                </div>
            </fieldset>

            <div className='form__field'>
                <label htmlFor='department'>Departement</label>
                <Select
                    className='select'
                    options={DEPARTEMENTS}
                    name="department"
                    inputId="department"
                    value={selectedDepartment}
                    onChange={handleDepartmentChange}
                />
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