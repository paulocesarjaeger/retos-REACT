import React, {useState,useEffect} from 'react';

const useFetchUser = (url)=>{
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            }catch(error){
                console.error(`Error fetching data: `,error);
            }finally{
                setLoading(false);
            };
        }; 
        fetchData();
    },[url]);
    return {data,loading};
};

export default useFetchUser;