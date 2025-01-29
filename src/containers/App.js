import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Navigation from '../components/Navigation';
import CreateRobot from '../components/CreateRobot';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            route: 'robots',
            robots: [],
            searchfield: ''
        }
    }

    updateRobotList() {
        fetch('http://localhost:3001/robots')
            .then(response => response.json())
            .then(robotList => {this.setState({ robots: robotList})}); // the result from the response 
    }

    // This function gets called when the component gets loaded (built-in React function)
    componentDidMount() {
        this.updateRobotList()
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    // OnRouteChange sets the route in the state
    onRouteChange = (route) => {
        this.setState({route: route});
      }
      
    addRobot = (newRobot) => {
        fetch("http://localhost:3001/new" , {
            // fetch('https://quiet-journey-39362-4cd96cd0dda6.herokuapp.com/image', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: newRobot.name,
                email: newRobot.email,
                phone: newRobot.phone,
                address: newRobot.address,
                username: newRobot.username
            })
        })
        .then(robotResponse => robotResponse.json())
        .then(result => {
            this.updateRobotList();
            this.setState(prevState => ({
                route: 'robots', // Redirect back to the robots page
            }));
        });
    };

    deleteRobot = (id) => {
        fetch("http://localhost:3001/delete" , {
            // fetch('https://quiet-journey-39362-4cd96cd0dda6.herokuapp.com/image', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id
            })
        })
        .then(robotResponse => robotResponse.json())
        .then(result => {
            this.updateRobotList();
        })
    };

    render() {
        const { robots, searchfield, route } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()) 
        })

        if(!robots.length) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <Navigation onRouteChange={this.onRouteChange} />
                    {
                        route === 'robots'
                        ? <div> 
                            <SearchBox onSearchChange={this.onSearchChange}/>
                            <Scroll>
                                <ErrorBoundry>
                                    <CardList robots={filteredRobots} onDeleteRobot={this.deleteRobot}/>
                                </ErrorBoundry>
                            </Scroll>
                        </div>
                        : route === 'create' ? (
                            <CreateRobot onAddRobot={this.addRobot} />
                        ) : (
                             <h1>Page Not Found</h1>
                    )}

                </div>
            )
        }
    }
}


export default App;