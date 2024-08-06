
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../nav/nav.component";
// import Todo from "../todo/todo.component";
import './container.css'
import '../pages/pages.css'
import Home from "../pages/home.component";
import Completed from "../pages/completed.component";
import Pending from     "../pages/pending.component";
import Trashed from "../pages/trashed.component";
const Container = () => {

    // const itemsCheck =  function() {
    //     if (lists.length < 1) {
    //         `you have ${lists.length} task(s) on the list`
    //     } else {
    //         `you are all cought up :)`
    //     }
    // }
    return (
        <Router>
            <div className="wrapper">
                <Nav />
                <Switch >

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path='/completed'>
                        <Completed />
                    </Route>

                    <Route path='pending'>
                        <Pending />
                    </Route>

                    <Route path='trashed'>
                        <Trashed />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default Container;