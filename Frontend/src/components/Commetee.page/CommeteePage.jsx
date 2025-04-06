import React, { useState } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Link } from "react-router";
import { motion } from "framer-motion";

const universities = [
  { name: "Dhaka University", id: 1 },
  { name: "Jahangirnagar University", id: 2 },
  { name: "Rajshahi University", id: 3 },
  { name: "Chittagong University", id: 4 },
  { name: "Khulna University", id: 5 },
  { name: "Shahjalal University of Science and Technology", id: 6 },
  { name: "Bangladesh University of Engineering and Technology", id: 7 },
  { name: "North South University", id: 8 },
  { name: "BRAC University", id: 9 },
  { name: "University of Science and Technology Chittagong", id: 10 },
];

export default function CommeteePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUniversities = universities.filter((university) =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-6">University Committee</h1>
      
      {/* Search Bar with Hover Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <TextField
          label="Search Committee"
          variant="outlined"
          fullWidth
          className="hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </motion.div>

      <TableContainer className="shadow-md rounded-lg">
        <Table className="min-w-full" aria-label="university chapters table">
          <TableHead>
            <TableRow>
              <TableCell className="font-semibold">Name</TableCell>
              <TableCell align="right" className="font-semibold">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUniversities.map((university) => (
             
              <TableRow>
              <TableCell  align="left" className="font-semibold">{university.name}</TableCell>
              <TableCell align="right" className="font-semibold"><Link
                      to={`/committee/${university.id}`} // Ensure the link directs to the correct page
                      className=" hover:text-green-700 transition-all"
                    >
                      Visit
                    </Link></TableCell>
                
            </TableRow>
                
            
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
