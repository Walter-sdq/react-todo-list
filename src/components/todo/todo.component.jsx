import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './todo.css'
const Todo = ({ lists, isNotNull, handleDelete}) => {
    // function check() {
    //     if (lists.lenght < 1) {
    //         `you have ${lists.length} task(s) on the list`
    //     } else {
    //         `you are all cought up :)`
    //     }
    // }


    return (

        <div className="todo">
            <div className="todo-padd">
                <div className="todo-cont">
                    <div className="listCounter">
                        <h1> {isNotNull} </h1>
                    </div>

                    {lists.map((list) => (

                        <div className="list-prev" key={list.id}>
                            <div className="list-prev-inner">
                                <Link to={`/lists/${list.id}`}>
                                    <h2 className="list-title">
                                        {list.name}
                                    </h2>
                                    <p className="list-details">
                                        {list.body}
                                    </p>
                                </Link>
                            </div>
                            <div className="chk-btn">
                                <i className="fas fa-check done" title='Done'></i>
                                <i className="fas fa-delete-left delete" title='Delete' onClick={() => handleDelete(list.id)} ></i>
                            </div>
                        </div>
                    )

                    )}

                </div>
            </div>

        </div >
    );
}

export default Todo;