
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
    const logo = 'Todo.'
    const home = '/'
    const completed = '/completed'
    const pending = '/pending'
    const trash = '/trashed'

    return (
        <Router>
            <div className="wrapper">

                <Nav logo={logo} home={home} completed={completed} pending={pending} trash={trash} />
                
                <Switch >

                    <Route  exact path="/">
                        <Home />
                    </Route>

                    <Route  exact path='/completed'>
                        <Completed />
                    </Route>

                    <Route  exact path='/pending'>
                        <Pending />
                    </Route>

                    <Route  exact path='/trashed'>
                        <Trashed />
                    </Route>

                    <Route path='/lists/:id'>
                        <Details type='lists' />
                    </Route>

                    <Route path='/completed/:id'>
                        <Details type='completed' />
                    </Route>

                    <Route path='/pending/:id'>
                        <Details type='pending' />
                    </Route>

                    <Route path='/trashed/:id'>
                        <Details type='trashed' />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default Container;