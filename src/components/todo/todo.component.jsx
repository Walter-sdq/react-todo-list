import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './todo.css'
const Todo = ({ lists, isNotNull, handleDelete,listType }) => {
   
    return (

        <div className="todo">
            <div className="todo-padd">
                <div className="todo-cont">
                    <div className="listCounter">
                        <h1> {isNotNull} </h1>
                    </div>

                    {lists.map((list) => (
                        
                        <div className="list-prev" key={list.id}>
                            <Link to={`/${listType}/${list.id}`}>
                                <div className="list-prev-inner">
                                    <h2 className="list-title">
                                        {list.title}
                                    </h2>
                                    <p className="list-details">
                                        {list.body}
                                    </p>
                                </div>  </Link>
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