import React from 'react'

export default function Form(props) {

    const { values, update, submit} = props

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    return (
        <form className='formContainer' onSubmit={onSubmit}>
            <div className='formInputs'>
                <label>Full Name
                    <input
                        type="text"
                        name="fullname"
                        value={values.fullname}
                        onChange={onChange}
                        placeholder="you gotta name?"
                    />
                </label>
                <label>Email
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        placeholder="email not social security"
                    />
                </label>
                <label>Position
                    <select
                        value={values.position}
                        name="position"
                        onChange={onChange}>
                        <option value="">--Select a Position--</option>
                        <option value="Initiator">INITIATOR</option>
                        <option value="Duelist">DUELIST</option>
                        <option value="Sentinel">SENTINEL</option>
                        <option value="Controller">CONTROLLER</option>
                    </select>
                </label>
                <div className='submit'>
                    <button disabled={!values.fullname || !values.email || !values.position}>
                        submit
                    </button>
                </div>
            </div>
        </form>
    )
}
