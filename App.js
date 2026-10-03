import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement('div', { id: 'parent' }, React.createElement('div', { id: 'child' }, [React.createElement('h1', {}, "Helo Netesting"), React.createElement('h1', {}, "Helo drerr")]));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);