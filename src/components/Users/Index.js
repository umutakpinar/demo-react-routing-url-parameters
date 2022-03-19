//Users
import { useEffect, useState } from "react";
import axios from "axios";
import { Router, Link } from "react-router-dom";

function Index() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(setIsLoading(false));
  }, []);

  return (
      <div className="container">
        <h2> Users</h2>
        <div className="container">
          <ul className="list-unstyled">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              users.map((user,index) => (
                <Link key={index} to={`/user/${user.id}`}>
                  <li key={index}>{user.name}</li>
                </Link>
              ))
            )}
          </ul>
        </div>
      </div>
  );
}

export default Index;
