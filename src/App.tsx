import React, { useState } from "react";
import postData from "./utils/postData";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcyMzU1NTU1LCJpYXQiOjE2NzIyMzU1NTUsImp0aSI6ImNlYzA4ZjQyOWFmNDQ1NzhhYTc5ZjViOTFmMzUzMmYyIiwidXNlcl9pZCI6MTcsImVtYWlsIjoiYWRtaW5fb3JnQGNyb21iaWUuZGV2In0.pls_8AaM468I7_ywiCFF1QTWQWuBW-XcsyvqDr8VMHk";

const url = "http://127.0.0.1:8000/users/1/";

type Users = {
  id: number;
  firstName: string;
  organization: string;
  group: string;
  email: string;
};

const App: React.FC = () => {
  const [users, setUsers] = useState<Users[]>();

  const handleGetUsers = async () => {
    postData(url, token)
      .then((response) => {
        const usersInfo = response.results.map((userData) => {
          return {
            id: userData.id,
            firstName: userData.first_name,
            organization: userData.organization
              ? userData.organization.name
              : "null",
            group: userData.group ? userData.group.name_group : "null",
            email: userData.email,
          };
        });
        setUsers(usersInfo);
      })
      .catch((err) => alert(`Ups ${err} error`));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {users && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell align="left">Organization</TableCell>
                <TableCell align="left">Group</TableCell>
                <TableCell align="left">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.firstName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.firstName}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {user.organization}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {user.group}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {user.email}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <button
        className="bg-sky-500 hover:bg-sky-700 rounded-lg p-2 text-white"
        onClick={handleGetUsers}
      >
        button
      </button>
    </div>
  );
};

export default App;
