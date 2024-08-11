import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../hooks/fetchListsData.component";

const Details = () => {
    const { id } = useParams()
    const { data: list, err, loading } = useFetch(`http://localhost:8000/lists/${id}`)
    return (
        <div className="todoDetail">
            {loading && <div>Loading...</div>}
            {err && <div>{err}</div>}
            {list && (
                <div className="details">
                    <h2 className="detail-head">
                        {list.name}
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