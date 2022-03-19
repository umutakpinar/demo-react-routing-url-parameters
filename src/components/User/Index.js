//User
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";

function Index() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      console.log(res.data);
      return setUser(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h2>User {id}</h2>
      <p>User id : {user.id}</p>
      <p>User id : {user.name}</p>
      <p>User email : {user.email}</p>
    </div>
  );
}

export default Index;
