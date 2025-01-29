import React from 'react';

const Navigation = ({ onRouteChange}) => {
            return (
                <nav style={{display: 'flex', justifyContent: 'center'}}>
                    <button 
                        onClick={() => onRouteChange('robots')}
                        style={{ marginTop: '20px', height: '50px', marginRight: '20px' }} 
                        className= "b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Robots</button>

                    <button 
                        onClick={() => onRouteChange('create')}
                        style={{ marginTop: '20px', height: '50px', marginRight: '20px' }} 
                        className= "b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Create</button>
                </nav>
            )
        }

export default Navigation;