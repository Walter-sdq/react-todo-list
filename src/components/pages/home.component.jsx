import useFetch from "../ext-hooks/useFetch.component";
import Time from "../ext-hooks/useTime.component";
import Input from "../input/input.component";
import Todo from "../todo/todo.component";

const Home = (props) => {

    const {
        data: lists,
        loading,
        err,
        completed,
        handleDelete
    } = useFetch('http://localhost:8000/lists')

    return (
        <div className="showLists">
            {err && <div>{err}</div>}
            {loading && <div className='inline'>Loading...</div>}
            {<Time currentTime />}
            {<Input />}
            {lists && (
                <Todo
                    lists={lists}
                    isNotNull={
                        lists.length < 1
                        ?
                        `You are all cought up :)`
                        :
                        `you have ${lists.length} task(s) on the list`
                    }
                    handleDelete={handleDelete}
                    listType="lists"
                    completed={completed}
                />
            )}
        </div>
    );
}

export default Home;