import React, { useState } from 'react';
import robot from './robot.png';

const CreateRobot = ({ onAddRobot }) => {


    const handleSubmit = (e) => {
        e.preventDefault(); 

        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const username = e.target.username.value;

        if (name && email) {
            onAddRobot({ name, email, phone, address, username });
            e.target.reset(); // Clear the form
        } else {
            alert('Please fill out all fields.');
        }
    };

    return (
        <div className="tc">
            <h2>Create Your Own</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="pa2 ma2 ba b--green bg-lightest-blue"
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="pa2 ma2 ba b--green bg-lightest-blue"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="pa2 ma2 ba b--green bg-lightest-blue"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="pa2 ma2 ba b--green bg-lightest-blue"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="pa2 ma2 ba b--green bg-lightest-blue"
                />
                <button type="submit" className="pa3 ba b--green bg-light-green">
                    Add Robot
                </button>
                <div><img src= {robot} ></img></div>

            </form>
        </div>
    );
};

export default CreateRobot;
