import React, { useEffect, useState } from 'react';
import axios from 'axios';

function About(props) {
  const [counter, setCounter] = useState(0);
  const [types, setTypes] = useState();

  useEffect(() => {
  console.log('useEffect');

      axios.get('/ws/rest/tasks')
      .then(res => {
          console.log(res);
          setTypes(res.data);
      }).catch(error => {
          console.log(error);
      });

  },[])


  return (
    // <h3>Requested Param: {props.match.params.id}</h3>
    <>
      <h3>About</h3>
      <p>Contenido del about</p>
    </>
  );
}

export default About;