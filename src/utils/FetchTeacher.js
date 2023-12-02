import axios from 'axios';
import { useEffect, useState } from 'react';

const FetchTeacher = (token) => {
     const [teacherData, setTeacherData] = useState(null);
     useEffect(() => {
          async function getData(){
               try {
                    const res = await axios({
                         method: 'get',
                         url: 'http://ec2-16-171-60-144.eu-north-1.compute.amazonaws.com:4000/teacher/',
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });
                   setTeacherData(res.data);
               } catch (error) {
                    console.log(error);
               }
          }
          
          if (token) {
               getData();
          }
     }, [token, setTeacherData]);

     return teacherData
};

export default FetchTeacher