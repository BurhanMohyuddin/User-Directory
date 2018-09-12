import React from 'react'
import './style.css';
import { Form, Field } from 'react-final-form'
const savedUSers = [];

const onSubmit = async values => {
    savedUSers.push(values);
    console.log('Array', savedUSers);
}
const required = value => (value ? undefined :
    <div className="text-danger">"Required"</div>);
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

    const Register = (props) => {
    return (

        <Form
            validate={required}
            onSubmit={props.addUser}
            render={({ handleSubmit, submitting, reset, pristine }) => (

                <form onSubmit={(event)=> {
                     handleSubmit(event)
                }} className="MyForm border border-dark">
                    <div className="form-group ">
                        <Field name="firstName" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <label><h5>First Name</h5></label>
                                    <input {...input} className="form-control" type="text" placeholder="First Name" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className="form-group tl">
                        <Field name="lastName" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <label><h5>Last Name</h5></label>
                                    <input {...input} className="form-control" type="text" placeholder="Last Name" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className="form-group tl">
                        <Field name="age" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <label><h5>Age</h5></label>
                                    <input {...input} className="form-control" type="number" placeholder="Age" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className="form-group tl">
                        <label><h5>Gender</h5></label>
                        <Field name="gender" className="form-control" component="select">
                            <option />
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </Field>
                    </div>
                    <div className="form-group tl">
                        <label><h5>Status</h5></label>
                        <div>
                            <label>
                                <Field
                                    name="status"
                                    component="input"
                                    type="radio"
                                    value="active"
                                    
                                />{' '}
                                Active
                            </label>
                            <label>
                                <Field
                                    name="status"
                                    component="input"
                                    type="radio"
                                    value="inactive"
                                />{' '}
                                Inactive
                            </label>
                        </div>

                        <div className="form-group tl">
                            <Field name="email" validate={required}>
                                {({ input, meta }) => (
                                    <div>
                                        <label><h5>Email</h5></label>
                                        <input {...input} className="form-control" type="email" placeholder="Email" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                    </div>
                    <div className="buttons form-group tl">
                        <input className="btn btn-primary " disabled={submitting || pristine} type="submit" value="Submit"/>
                        {/* <button type="submit" disabled={submitting || pristine} >
                            Submit
                    </button> */}
                    </div>
                    {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                </form>
            )}
        />
    )
}
export default Register;
