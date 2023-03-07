import React from 'react';
import './App.css';
import Bar from './components/Bar/Bar'
import Constructor from './components/Constructor/Constructor'
import PartsContainer from "./components/parts/PartsContainer";
function App() {
    return (
        <div className="app">
            <div className="content">
                <Bar/>
                <PartsContainer/>
                <Constructor/>
            </div>
        </div>
    );
}

export default App;
