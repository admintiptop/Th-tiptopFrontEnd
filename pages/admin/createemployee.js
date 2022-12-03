import { useState } from "react";
import { BsFillCheckCircleFill } from 'react-icons/bs';
import SideMenu from "../../components/SideMenu";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const CreateEmployee = () => {
    const [name,setname] =useState('');
    const [email,setemail] =useState('');
    const [passportNumber,setpassportNumber] =useState();
    const [password,setpassword] =useState('');

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Employee Name is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        passportNumber: Yup.string()
            .required('PassportNumber is required')
            .matches(/^[0-9]{2}[A-z]{2}[0-9]{5}$/, 'Passport number format is invalid'),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {

      //axios call - write here
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    return ( <div>
        <div>
      <SideMenu />
      <div className="main-wrap">
        <div className="wrapSection">
          <div className="block active">
            <div className="create-employee">
              <h2>Add Employee</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Employee Name" name="name" 
                 {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`}/>
                 <div className="invalid-feedback">{errors.name?.message}</div>
                <br/>
                <input type="text" placeholder="Email" name="email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.email?.message}</div>
                <br/>
                <input type="text" placeholder="Passport Number" name="passportNumber" {...register('passportNumber')} className={`form-control ${errors.passportNumber ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.passportNumber?.message}</div>
                <br/>
                <input type="password" placeholder="Password" name="password" {...register('password')} className={`form-control ${errors.setpassword ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.password?.message}</div>
                <br/>
                <button type="submit">Add Employee</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div> );
}
 
export default CreateEmployee;