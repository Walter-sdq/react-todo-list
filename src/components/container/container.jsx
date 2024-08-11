
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../nav/nav.component";
// import Todo from "../todo/todo.component";
import './container.css'
import '../pages/pages.css'
import Home from "../pages/home.component";
import Completed from "../pages/completed.component";
import Pending from "../pages/pending.component";
import Trashed from "../pages/trashed.component";
import Details from "../pages/todoDetails.component";
const Container = () => {

    // const itemsCheck =  function() {
    //     if (lists.length < 1) {
    //         `you have ${lists.length} task(s) on the list`
    //     } else {
    //         `you are all cought up :)`
    //     }
    // }

    const logo = 'do.'
    const home = '/'
    const completed = '/completed'
    const pending = '/pending'
    const trash = '/trashed'

    return (
        <Router>
            <div className="wrapper">
                <Nav logo={logo} home={home} completed={completed} pending={pending} trash={trash} />
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

                    <Route path='/lists/:id'>
                        <Details />
                    </Route>

                    {/* <Route path='/completed/:id'>
                        <Details/>
                    </Route> */}

                    {/* <Route path='/pending/:id'>
                        <Details/>
                    </Route>

                    <Route path='/trash/:id'>
                        <Details/>
                    </Route> */}

                </Switch>
            </div>
        </Router>
    );
}

export default Container;