import { useState } from 'react'

const Form = () => {

    const [register, setRegister] = useState({
        userName: '',
        email: '',
        phone: '',
        password: '',
    })

    const [records, setRecords] = useState([])
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegister({ ...register, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert("Heelo")
        const newRecord = { ...setRegister, id: new Date().getTime().toString() }
        setRecords([...records, newRecord]);

        console.log(records);

        setRegister({ userName: "", email: "", phone: "", passowrd: "" })
        alert(JSON.stringify(register))


    }
    return (
        <div>
            {/* <h1>Multiple Input Form</h1>  */}
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">Full Name</label>
                    <input type="text" autoComplete='off'
                        value={setRegister.userName}
                        onChange={handleInput}
                        name='userName' id='userName' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" autoComplete='off'
                        value={setRegister.email}
                        onChange={handleInput}
                        name='email' id='email' />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" autoComplete='off'
                        value={setRegister.phone}
                        onChange={handleInput}
                        name='phone' id='phone' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" autoComplete='off'
                        value={setRegister.password}
                        onChange={handleInput}
                        name='password' id='passowrd' />
                </div>
                <button type='submit'>Registration</button>

            </form>
            <div>
                {
                    records.map((item) => {
                        const { id, userName, email, phone, password } = item;
                        return (
                            <div>
                                <p>{item.userName}</p>
                                <p>{item.email}</p>
                                <p>{item.phone}</p>
                                <p>{item.passowrd}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Form;