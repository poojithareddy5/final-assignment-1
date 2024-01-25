import { useEffect, useState } from 'react'
import jsonData from '../data.json';

export const useData = () => {
    const [data, setData] = useState();
    useEffect(() => {
        setData(jsonData)
    }, [])
    return { data };
};