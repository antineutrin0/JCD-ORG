import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import committeeData from "./committee.json";

export default function CommeteePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("");
  const [districtFilter, setDistrictFilter] = useState("");
  const [filteredCommittees, setFilteredCommittees] = useState([]);

  const { catagory } = useParams();

  const handleOpenFilter = () => setFilterDialogOpen(true);
  const handleCloseFilter = () => setFilterDialogOpen(false);

  const handleSearch = () => {
    const filtered = committeeData.filter((committee) => {
      return (
        (catagory ? committee.category === catagory : true) &&
        committee.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categoryFilter ? committee.category === categoryFilter : true) &&
        (divisionFilter ? committee.division === divisionFilter : true) &&
        (districtFilter ? committee.district === districtFilter : true)
      );
    });
    setFilteredCommittees(filtered);
    handleCloseFilter(); // Close the filter dialog after search
  };

  useEffect(() => {
    handleSearch(); // Initial filtering on load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, catagory]);

  const uniqueCategories = [...new Set(committeeData.map((c) => c.category))];
  const uniqueDivisions = [...new Set(committeeData.map((c) => c.division).filter(Boolean))];
  const uniqueDistricts = [...new Set(committeeData.map((c) => c.district).filter(Boolean))];

  return (
    <div className="p-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-6 uppercase text-center pt-6">{catagory}</h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-6 flex gap-4 items-center"
      >
        <TextField
          label="Search Committee By Name"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outlined" color="primary" onClick={handleOpenFilter}>
          Filters
        </Button>
      </motion.div>

      <Dialog open={filterDialogOpen} onClose={handleCloseFilter} fullWidth maxWidth="sm">
        <DialogTitle>Filter Committees</DialogTitle>
        <DialogContent dividers>
          <FormControl fullWidth margin="normal">
            <InputLabel>Category</InputLabel>
            <Select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              {uniqueCategories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Division</InputLabel>
            <Select value={divisionFilter} onChange={(e) => setDivisionFilter(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              {uniqueDivisions.map((div) => (
                <MenuItem key={div} value={div}>
                  {div}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>District</InputLabel>
            <Select value={districtFilter} onChange={(e) => setDistrictFilter(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              {uniqueDistricts.map((dist) => (
                <MenuItem key={dist} value={dist}>
                  {dist}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFilter}>Cancel</Button>
          <Button onClick={handleSearch} variant="contained" color="primary">
            Search
          </Button>
        </DialogActions>
      </Dialog>

      <TableContainer className="shadow-md rounded-lg">
        <Table className="min-w-full">
          <TableHead>
            <TableRow>
              <TableCell className="text-lg font-semibold">Committee Name</TableCell>
              <TableCell align="right" className="font-semibold">
                Explore
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCommittees.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell align="right">
                  <Link
                    to={`/committee/${item.category}/${item.name}`}
                    className="hover:text-green-700 transition-all"
                  >
                    Visit
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
