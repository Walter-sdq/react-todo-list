import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(
        // [
        //     {
        //         name: "reminder",
        //         body: "first thing this morning is to have a positive mindset1",
        //         id: 1
        //     },
        //     {
        //         name: "reminder",
        //         body: "first thing this morning is to have a positive mindset1",
        //         id: 2
        //     },
        //     {
        //         name: "reminder",
        //         body: "first thing this morning is to have a positive mindset1",
        //         id: 3
        //     },
        //     {
        //         name: "reminder",
        //         body: "first thing this morning is to have a positive mindset1",
        //         id: 4
        //     },
        //     {
        //         name: "reminder",
        //         body: "first thing this morning is to have a positive mindset1",
        //         id: 5
        //     },
        //     {
        //         name: "reminder",
        //         body: "first thing this morning is to have a positive mindset1",
        //         id: 6
        //     },
        //     {
        //         name: "reminder",
        //         body: "first thing this morning is to have a positive mindset1",
        //         id: 7
        //     },
        //     {
        //         name: "reminder",
        //         body: "first thing this morning is to have a positive mindset1",
        //         id: 8
        //     },
        //     {
        //         name: "reminder",
        //         body: "first thing this morning is to have a positive mindset1",
        //         id: 9
        //     },
        //     {
        //         name: "reminder",
        //         body: "first thing this morning is to have a positive mindset1",
        //         id: 10
        //     }
        // ]

        null
    )

    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(null)
    const handleDelete = (id) => {
        const newData = data.filter(list => list.id !== id)
        setData(newData)
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