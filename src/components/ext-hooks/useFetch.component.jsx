import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null)

    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(null)

    const handleDelete = (id) => {
        // const newData = data.filter(list => list.id !== id)
        console.log(url.id);
        if (url === `localhost:8000/trashed`) {
            fetch('http://localhost:8000/pending', {
            method: "POST",
            // headers: { "Content-Type": "application/json" },
            // body: JSON.stringify(list)
        }).then(() => {
            console.log('List added to pending')
        })
        } else {
            fetch(`${url}/${id}`, {
                method: "DELETE"
            })
        }


        // setData(newData)

        // fetch(`${url}/${type}/${id}`)

    }

    useEffect(() => {
        const abort = new AbortController()
        setTimeout(() => {
            fetch(url, { signal: abort.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error(`Could not get data :(`)

                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setLoading(false)
                    setErr(null)
                })
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log('aborted');
                    } else {
                        setLoading(false)
                        setErr(err.message)
                    }

                })

        }, 1000);
        return () => {
            abort.abort()
        }
    }, [url])
    return {
        data, loading, err, handleDelete
    }

}

export default useFetch;