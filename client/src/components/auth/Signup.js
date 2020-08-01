import React from 'react';
import { reduxForm, Field } from 'redux-form';

export default function Signup() {
    console.log("reduxForm")
    console.log(reduxForm)
    return (
        <form>
            <fieldset>
                <label>Email</label>
                <Field
                    name='email'
                    type='text'
                    component='input' />
            </fieldset>
            <fieldset>
                <label>Password</label>
                <Field
                    name='password'
                    type='password'
                    component='input' />
            </fieldset>
        </form>
    )
}
