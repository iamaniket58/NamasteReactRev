import React from "react"
import ReactDOM from "react-dom/client"

// const heading = React.createElement('div', { id: 'parent' }, React.createElement('div', { id: 'child' }, [React.createElement('h1', {}, "Helo Netesting"), React.createElement('h1', {}, "Helo drerr")]));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// const heading=React.createElement('h1',{},"Hi From React Element");

const jsxHeading = <h1>Hi from JSX Heading</h1>;
// function HeadingFom() {
//     return <h1>lalalalalalalsaal</h1>
// }
const Title = () => { return <h1>This is Title</h1> }
const HeadngComponent = () => {

    return (<div> <Title />
        <h1>This is Heading Component s</h1>
    </div>)
}
// const HeadngComponent1 = () => <h1>This is heading Component</h1>
// const HeadngComponent2 = () => (
//     <>
//         <h1>This is heading Component</h1>
//         <h1>Heyy</h1>
//     </>
// )
// const HeadngComponent3 = () => (
//     <div>
//         <h1>This is heading Component</h1>
//         <h1>Heyy</h1>
//     </div>
// )

// console.log(heading);
// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadngComponent />)