import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./component/Home.js"
import Header from "./component/Header.js"
import StudentDetail from "./component/StudentDetail.js"
import StudentDetails from "./component/StudentDetails.js"
import UpdateStudent from "./component/Pages/UpdateStudent.js"
import NewStudent from "./component/Pages/NewStudent.js"
import SingleStudent from "./component/Partial/SingleStudent.js"
import Contact from "./component/Pages/Contact.js"
import About from "./component/Pages/About.js"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/student/get" component={StudentDetails} />
        <Route exact path="/student/gets/:id" component={SingleStudent} />
        <Route exact path="/student/get/:keyword" component={StudentDetail} />
        <Route exact path="/student/update/:id" component={UpdateStudent} />
        <Route exact path="/student/create" component={NewStudent} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
