import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Slides from './Slides';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            readyToAdd: false,
            successfullyInstalled: false,
            acceptedInstall: false,
            declinedInstall: false,
        };
        this.addToHome = this.addToHome.bind(this);
        this.shouldShowAddButton = this.shouldShowAddButton.bind(this);
        this.openWindowOrTab = this.openWindowOrTab.bind(this);
    }
    componentDidMount() {
        // check if user is already running app from home screen
        if (window.matchMedia('(display-mode: standalone)').matches) {
            console.log('App is already installed and running in standalone');
            this.setState({
                successfullyInstalled: true,
            });
        } else {
            window.addEventListener('beforeinstallprompt', e => {
                console.log('beforeinstallprompt has fired', e);
                // Prevent Chrome 67 and earlier from automatically showing the prompt
                e.preventDefault();
                // Stash the event so it can be triggered later.
                window.deferredPrompt = e;
                this.setState({
                    readyToAdd: true,
                });
            });
            // this event fires only when app is installed
            window.addEventListener('appinstalled', evt => {
                console.log('App was successfully installed');
                this.setState({
                    successfullyInstalled: true,
                });
            });
        }
    }
    addToHome() {
        // Show the prompt
        let { deferredPrompt } = window;
        if (deferredPrompt) {
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then(choiceResult => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                    this.setState({
                        acceptedInstall: true,
                    });
                } else {
                    console.log('User dismissed the A2HS prompt');
                    this.setState({
                        declinedInstall: true,
                    });
                }
                deferredPrompt = null;
            });
        }
    }
    shouldShowAddButton() {
        let shouldShow =
            this.state.readyToAdd &&
            !this.state.successfullyInstalled &&
            !this.state.acceptedInstall &&
            !this.state.declinedInstall;
        console.log('Should show add button', shouldShow);
        return shouldShow;
    }
    openWindowOrTab(url = window.location.href) {
        window.open(url, '_blank');
    }
    render() {
        return (
            <BrowserRouter>
            <main className="App">
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/slides" component={Slides} />
              </Switch>
            </main>
          </BrowserRouter>
        );
    }
}

export default App;
