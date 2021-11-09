import React from 'react'

export default function Form(props) {

    const {submit, values, update} = props

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const name = evt.target.name;
        const {value} = evt.target;
        update(name, value);
    }

    return (
        <form className='formContainer' onSubmit={onSubmit}>
            <div className='formInputs'>
                <label>Full Name
                    <input
                        type="text"
                        name="fullname"
                        value={values.Fullname}
                        onChange={onChange}
                    />
                </label>
                <label>Email
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Position
                    <select
                        value={values.position}
                        name="position"
                        onChange={onChange}>
                        <option value="">--Select a Position</option>
                        <option value="initiator">INITIATOR</option>
                        <option value="duelist">DUELIST</option>
                        <option value="sentinel">SENTINEL</option>
                        <option value="controller">CONTROLLER</option>
                    </select>
                </label>
                <div className='submit'>
                    <button disabled={!values.Fullname || !values.email || !values.position}>
                        submit
                    </button>
                </div>
            </div>

        </form>
    )
}