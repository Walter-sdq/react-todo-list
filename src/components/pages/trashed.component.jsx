import useFetch from "../ext-hooks/useFetch.component";
import Todo from "../todo/todo.component";


const Trashed = () => {

    const {
        data: lists,
        loading,
        err,
        handleDelete
    } = useFetch('http://localhost:8000/trashed')

    return (
        <div className="trashed">
            {err && <div>{err}</div>}
            {loading && <div className='inline'>Loading...</div>}

            {lists && <Todo
                lists={lists}
                isNotNull={lists.length < 1 ? `You are all cought up :)` : `you have ${lists.length} completed task(s)`}
                handleDelete={handleDelete}
                listType="trashed"
            />}
        </div>);
}

export default Trashed;