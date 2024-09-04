import useFetch from "../ext-hooks/useFetch.component";
import Todo from "../todo/todo.component";


const Pending = () => {

    const {
        data: lists,
        loading,
        err,
        handleDelete
    } = useFetch('http://localhost:8000/pending')

    return (
        <div className="pending">
            {err && <div>{err}</div>}
            {loading && <div className='inline'>Loading...</div>}

            {lists && <Todo
                lists={lists}
                isNotNull={lists.length < 1 ? `You are all cought up :)` : `you have ${lists.length} pending task(s) GET JOB DONE!`}
                handleDelete={handleDelete}
                listType="pending"
            />}
        </div>);
}

export default Pending;