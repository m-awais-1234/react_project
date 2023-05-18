
import React from "react";
import { Form, Formik } from "formik";

function Forms(){
    return (
        <div>
        <Formik 
        initialValues={{email:"", password:""}}
        onsubmit={(values) => console.log(values)}>
        {({values, setFeildValue, handleChange})=>(
            <Form>
                <label htmlFor="email">Email Address</label>
                <input 
                id="email"
                name = "email"
                type="email"
                onChange={handleChange}
                value={values.email}
                 />
                 <button type="submit">Submit</button>
            </Form>
        )}

        </Formik>
        </div>
    )
}

export default Forms;