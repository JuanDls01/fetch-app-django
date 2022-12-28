import React, { useState } from "react";
import postData, { User } from "./utils/postData";

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcyMzU1NTU1LCJpYXQiOjE2NzIyMzU1NTUsImp0aSI6ImNlYzA4ZjQyOWFmNDQ1NzhhYTc5ZjViOTFmMzUzMmYyIiwidXNlcl9pZCI6MTcsImVtYWlsIjoiYWRtaW5fb3JnQGNyb21iaWUuZGV2In0.pls_8AaM468I7_ywiCFF1QTWQWuBW-XcsyvqDr8VMHk";

const url = "http://127.0.0.1:8000/users/1/";

const App: React.FC = () => {
  const handleGetUsers = async () => {
    postData(url, token)
      .then((response) => console.log(response))
      .catch((err) => alert(`Ups ${err} error`));
  };

  return (
    <div>
      <button onClick={handleGetUsers}>button</button>
    </div>
  );
};

export default App;
