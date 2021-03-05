import React, { Fragment, useEffect, useState } from "react";
import Appoint from "./Appoint";
import Form from "./Form";

function App() {

  let startAppoints = JSON.parse(localStorage.getItem("appoints"))
  if(!startAppoints){
    startAppoints = []
  }


  const [appointments, set_appointments] = useState(startAppoints);

  useEffect(() => {
    let startAppoints = JSON.parse(localStorage.getItem("appoints"))
    if(startAppoints){
      localStorage.setItem('appoints',JSON.stringify(appointments))
    }else{
      localStorage.setItem('appoints',JSON.stringify([]))
    }
    return () => {
      
    }
  }, [appointments])

  const addAppoint = (appoint) => {
    set_appointments([...appointments, appoint]);
  };

  const removeAppoint = id => {
    const appoints = appointments.filter(appoint=>appoint.id !== id)
    set_appointments(appoints)
  }

  const title = appointments.length > 0 ? "Appointments" : "Empty list"

  return (
    <Fragment>
      <h1>Appointments</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form addAppoint={addAppoint} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {
              appointments.map(appoint=>(
                <Appoint key={appoint.id} appoint={appoint} removeAppoint={removeAppoint} />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
