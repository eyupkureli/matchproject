import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Header() {
   const [user, setUser] = useState('');

   useEffect(() => {
      axios.get('http://178.63.13.157:8090/mock-api/api/users')
      .then(response => setUser(`${response.data.data[0].firstName} ${response.data.data[0].lastName}`));
   }, [])


  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>B Company</h1>
        </a>
      </div>
      <div>
        <a href="#/">{user}</a>
      </div>
    </header>
  );
}
