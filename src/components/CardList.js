import React from 'react';
import Card from './Card';

const CardList = ({ robots, onDeleteRobot }) => {
    return (
        <div>
         {
            robots.map((user, i) => {
                return (
                   <Card
                        key={robots[i].id} // prop
                        robot={robots[i]} // prop
                        // name={robots[i].name} // prop
                        // email={robots[i].email} // prop
                        onDeleteRobot={onDeleteRobot} // prop
                    />
                );
            })
         }
        </div>
    );
}

export default CardList;