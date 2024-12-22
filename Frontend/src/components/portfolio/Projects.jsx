import React, { useEffect, useState } from 'react';
import Card from '../Card';
import { api_url } from '../../api/api';
import axios from 'axios';

function Projects({searchQuery}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_REACT_BACKEND_BASEURL}/projects`);
      setData(response.data);
    } catch (error) {
      console.error("Some error is present", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const filteredData = data.filter((data)=>data.title.toLowerCase().includes(searchQuery.toLowerCase()) || data.author.toLowerCase().includes(searchQuery.toLowerCase()))


  return (
    <div className="space-y-10">
      {loading && <p>Loading...</p>}
      {filteredData.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
}

export default Projects;
