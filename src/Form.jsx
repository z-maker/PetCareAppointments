import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types'
import uuid from 'uuid/dist/v4';


const Form = ({ addAppoint }) => {

    const [appoint, set_appoint] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        comments: ''
    });

    const [errors, set_errors] = useState(false)

    const { pet, owner, date, time, comments } = appoint

    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        set_appoint({
            ...appoint,
            [field]: value
        })
    }

    const submitAppoint = e => {
        e.preventDefault()

        //Validation
        if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || comments.trim() === '') {
            set_errors(true)
            return
        }

        set_errors(false)

        appoint.id = uuid()

        addAppoint(appoint)

        set_appoint({
            pet: '',
            owner: '',
            date: '',
            time: '',
            comments: ''
        })

    }

    return (
        <Fragment>
            <h2>Create appointment</h2>

            {errors ? <p className="alert-error" > All fields are required! </p> : null}

            <form onSubmit={submitAppoint} >
                <label htmlFor="">Pet Name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet name"
                    onChange={handleChange}
                    value={pet}
                />
                <label htmlFor="">Owner name</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner name"
                    onChange={handleChange}
                    value={owner}
                />
                <label htmlFor="">Date</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    placeholder="Date"
                    onChange={handleChange}
                    value={date}
                />
                <label htmlFor="">Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    placeholder="Time"
                    onChange={handleChange}
                    value={time}
                />
                <label htmlFor="">Comments</label>
                <textarea
                    className="u-full-width"
                    name="comments"
                    onChange={handleChange}
                    value={comments}
                >
                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Add appointment
                </button>
            </form>
        </Fragment>
    );
};


Form.propTypes = {
    addAppoint: PropTypes.func.isRequired
}


export default Form;