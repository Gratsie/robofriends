import React from 'react';

const Card = ({robot, onDeleteRobot}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${robot.id}?200x200`} />
            <div >
                <h2>{robot.name}</h2>
                <p>{robot.email}</p>
                <button
                    className="pa2 ba b--red bg-light-red deleteButton"
                    onClick={(e) => {
                        console.log('deleting ' + robot.id);
                        onDeleteRobot(robot.id)}
                    }

                    >Delete</button>
            </div>
        </div>
    )
}

export default Card;