import React, { Fragment } from 'react'
import NavigationBar from './NavigationBar'

class App extends React.Component {
    render() {
        return (
            <div className="containter">
                <NavigationBar />
                {this.props.children}
            </div>
        );
    }
}

export default App
