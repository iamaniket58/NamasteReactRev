import User from "./User.JS"
import UserClass from "./UserClass"
const About = () => {
    return(
        <div>
           <h1>About</h1>
           <h2>This is Namaste React</h2>
           <User/>
           <UserClass name={"Aniket is ehere"} location={"Bangaloree"}/>
        </div>
    )
}
export default About