import React, { useState } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import committee from "./committee.json"; // Adjust the path as necessary
export default function CommeteePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const {catagory} = useParams();

   const filteredCommittees = committee.filter(
    (committee) => committee.category === catagory? committee.name.toLowerCase().includes(searchTerm.toLowerCase()): false
  );

  return (
    <div className="p-6 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-6 uppercase text-center pt-6">{catagory}</h1>
      
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
              <TableCell className="text-2xl font-semibold">List of Committee</TableCell>
              <TableCell align="right" className="font-semibold">Explore</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCommittees.map((item) => (
             
              <TableRow>
              <TableCell  align="left" className="font-semibold">{item.name}</TableCell>
              <TableCell align="right" className="font-semibold"><Link
                      to={`/committee/${item.category}/${item.name}`} // Ensure the link directs to the correct page
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
