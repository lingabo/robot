import React, { useEffect, useState } from "react";

import "./App.css";
import Titre from "./component/Titre";
import SearchRobot from "./component/SearchRobot";
import Cards from "./component/Cards";

function App() {
  const [users, setUsers] = useState([]);
  const [listRobots, setListobots] = useState([]);
  const [Loading, setLoading] = useState(true);

  const image = "https://robohash.org/";

  const requeteUsers = `https://jsonplaceholder.typicode.com/users`;

  useEffect(() => {
    try {
      fetch(requeteUsers).then((res) => {
        res.json().then(function (data) {
          let NewRobot = data.map((user) => {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              address: user.address,
              image: image + user.id,
              website: user.website,
              company: user.company,
            };
          });
          setUsers(NewRobot);
          setListobots(NewRobot);
        });
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  let fetchSearch = (e) => {
    let query = e.target.value.toLowerCase();
    trouveRobots(query);
    setLoading(false);

  };
  let trouveRobots = (value) => {
    try {
      let regexp = new RegExp(value, "");
      let newRobotFilter = users.filter((element) => {
        return regexp.test(element.name.toLowerCase());
      });
      setListobots(newRobotFilter);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Titre />
      <SearchRobot onChange={fetchSearch} />
      <div className="">
        <Cards listRobots={listRobots} Loading={Loading} />
      </div>
    </div>
  );
}
export default App;
