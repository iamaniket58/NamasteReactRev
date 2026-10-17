import React from "react"
class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props)
        this.state={
            count:0
        }
        
    }
    render() {
        let {name,location}=this.props;
        let {count}=this.state;
        return (
            <div className="user-card">
            <h1>Count is {count}</h1>
            <h2>Name: {name}</h2>
            <h3>location: {location}</h3>
            <h4>Contact: @Aniket58</h4>
            <button onClick={() => {
                this.setState({
                    count:count+1
                })
            }}>Update Count</button>
        </div>
        )
    }
}
export default UserClass