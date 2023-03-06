import React from 'react';
import './App.css';
import Bar from './components/Bar/Bar'
import Constructor from './components/Constructor/Constructor'
import Display from "./components/parts/Display/Display";
import Operations from "./components/parts/Operations/Operations";
import Numbers from "./components/parts/Numbers/Numbers";
import Equality from "./components/parts/Equality/Equality";

function App() {
    return (
        <div className="app">
            <div className="content">
                <Bar/>
                <Constructor/>
                <Display/>
                <Operations/>
                <Numbers/>
                <Equality/>
            </div>
        </div>
    );
}

export default App;
