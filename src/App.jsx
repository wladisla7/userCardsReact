import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard/UserCard.jsx'

const NewUser = {
  firstname: "John",
  lastname: "Doe",
  userDescription: "I am Web Developer. I love Designed new User-Interface And make Responsive in All Views",
  socialMedia: [{ socialName: "facebook" }, { socialName: "twitter" }, { socialName: "gplus" }, { socialName: "linkedin" }]
}


const NewUser2 = {
  firstname: "John",
  lastname: "Wick",
  userDescription: "I am  not Web Developer.",
  socialMedia: [/* {socialName:"facebook"} */, { socialName: "twitter" }, { socialName: "gplus" }, { socialName: "linkedin" }]
}



const NewUser3 = {
  firstname: "John",
  lastname: "Low",
  userDescription: "I am Low Developer. I dont know how make Responsive in All Views",
  socialMedia: [/* {socialName:"facebook"} */, /* {socialName:"twitter"}, {socialName:"gplus"} */, { socialName: "linkedin" }]
}

const userArray = [NewUser, NewUser2, NewUser3, NewUser3, NewUser2, NewUser];

function App() {
  const arrayJSX2 = userArray.map((user) => {
    return (
      <UserCard userData={user} />
    );
  });
  return arrayJSX2;
};


export default App;
