import axios from 'axios';
import { useEffect, useState } from 'react';

const FetchUserData = (token) => {
     const [Data, setData] = useState(null);
     useEffect(() => {
          async function getData(){
               try {
                    const res = await axios({
                         method: 'get',
                         url: 'http://ec2-16-171-60-144.eu-north-1.compute.amazonaws.com:4000/user/',
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });
                    console.log(res.data)
                   setData(res.data);
               } catch (error) {
                    console.log(error);
               }
          }
          
          if (token) {
               getData();
          }
     }, [token, setData]);

     return Data
};

export default FetchUserData