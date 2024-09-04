import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../ext-hooks/useFetch.component";

const Details = ({type}) => {
    const { id } = useParams()
    const { data: list, err, loading } = useFetch(`http://localhost:8000/${type}/${id}`)
    return (
        <div className="todoDetail">
            {loading && <div>Loading...</div>}
            {err && <div>{err}</div>}
            {list && (
                <div className="details">
                    <h2 className="detail-head">
                        {list.title}
                    </h2>
                    <p className="detail-body">
                        {list.body}
                    </p>
                </div>

            )}

        </div>
    );
}

export default Details;