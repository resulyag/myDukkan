import {useState} from 'react';
import axios from 'axios';

function usePost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (url, apiData) => {
    try {
      setLoading(true);
      const {data: responseData} = await axios.post(url, apiData);
      setData(responseData);
      setLoading(false);
      console.log('try: data' + data);
      console.log('try: error' + error);
    } catch (err) {
      setError(err);
      setLoading(false);
      console.log('catch: data' + data);
      console.log('catch: error' + error);
    }
  };
  return {data, loading, error, post};
}

export default usePost;
