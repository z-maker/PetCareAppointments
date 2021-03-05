import React from 'react'
import PropTypes from 'prop-types'

const Appoint = ({appoint, removeAppoint}) => {
    return (
        <div className="cita">
            <p>Pet: <span>{appoint.pet}</span></p>
            <p>Owner:<span>{appoint.owner}</span></p>
            <p>Date<span>{appoint.date}</span></p>
            <p>Time<span>{appoint.time}</span></p>
            <p>Comments<span>{appoint.comments}</span></p>
            <button 
            onClick={()=>removeAppoint(appoint.id)}
            className="button eliminar u-full-width">
                Delete
            </button>
        </div>
    )
}

Appoint.propTypes = {
    appoint: PropTypes.object.isRequired,
    removeAppoint: PropTypes.func.isRequired
}

export default Appoint
