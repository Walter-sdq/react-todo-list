import useFetch from "../ext-hooks/fetchListsData.component";
import Time from "../ext-hooks/useTime.component";
import Todo from "../todo/todo.component";
// import 
const Home = (props) => {

    const {
        data: lists,
        loading,
        err,
        handleDelete
    } = useFetch('http://localhost:8000/lists')

    return (
        <div className="showLists">
            {err && <div>{err}</div>}
            {loading && <div className='inline'>Loading...</div>}
            {<Time currentTime />}
            {lists && <Todo
                lists={lists}
                isNotNull={lists.length < 1 ? `You are all cought up :)` : `you have ${lists.length} task(s) on the list`}
                handleDelete={handleDelete}
            />}
        </div>
    );
}

export default Home;