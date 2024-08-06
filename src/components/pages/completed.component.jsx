import useFetch from "../hooks/fetchListsData.component";
import Todo from "../todo/todo.component";



const Completed = () => {
    const {
        data: lists,
        loading,
        err,
        handleDelete
    } = useFetch('http://localhost:8000/completed')

    return (
        <div className="completed">
            {err && <div>{err}</div>}
            {loading && <div className='inline'>Loading...</div>}

            {lists && <Todo
                lists={lists}
                isNotNull={lists.length < 1 ? `You are all cought up :)` : `you have ${lists.length} completed task(s) GOOD JOB!`}
                handleDelete={handleDelete}
            />}
        </div>
    );
}

export default Completed;