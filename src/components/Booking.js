import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../assets/styles/Booking.scss';

function Booking(){



  return (
    <form id="contact-form">
        <label>Date Of Event</label>
        <input name='on' type='date' required="required" label="Date of your event" onChange={function(e, value) {}} />
        <br/>
        <label>Hours</label>
        <input name="from" placeholder="from" label="Time Range" />
        <input name="to" placeholder="to" />
        <br/>
        <label>Location</label>
        <input name="location" label="Location"/>
        <br/>
        <label>Approx. number of Guests</label>
         <input name="Guests" type="number" label="Approx. number of guests" />
        <br/>
        <label>Tell Us About Your Event</label>
        <textarea name="details"></textarea>
        <br/>
        <label>Name:</label>
        <input name="Name"/>
        <br/>
        <label>Phone:</label>
        <input name="Phone" validate type='tel'/>
        <br/>
          <label>Email:</label>
          <input name="Email"/>
          <br/>
            <label>Company:</label>
            <input name="Company"/>
            <br/>
       <input type="submit" value="Send"/>
      </form>
  );
}



export default Booking;
