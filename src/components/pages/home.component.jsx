import useFetch from "../hooks/fetchListsData.component";
import Todo from "../todo/todo.component";
// import { useState, useEffect } from "react";
const Home = (props) => {

    const {
        data:lists,
        loading,
        err,
        handleDelete
    } = useFetch('http://localhost:8000/lists')

    return (
        <div className="showLists">
            {err && <div>{err}</div>}
            {loading && <div className='inline'>Loading...</div>}
            {lists && <Todo
                lists={lists}
                isNotNull={lists.length < 1 ? `You are all cought up :)` : `you have ${lists.length} task(s) on the list`}
                handleDelete={handleDelete}
            />}
        </div>
    );
}

export default Home;