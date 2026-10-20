import React from "react"
class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props)
        this.state={
            count:0,
            userInfo:{}
        }
        
    }
    async componentDidMount(){
        let data=await fetch('https://api.github.com/users/iamaniket58');
        let json=await data.json();
        this.setState({
            userInfo:json
        })
    }
    
    render() {
        if(this.state.userInfo=={})return <Shimmer/>
        // let {name,location}=this.props;
        let {count}=this.state;
        let {name,location,avatar_url,login}=this.state.userInfo;
        return (
            <div className="user-card">
            <h1>Count is {count}</h1>
            <img src={avatar_url}/>
            <h2>Name: {name}</h2>
            <h3>location: {location}</h3>
            <h4>Contact: {login}</h4>
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