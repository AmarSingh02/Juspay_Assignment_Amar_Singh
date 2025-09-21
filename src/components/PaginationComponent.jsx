import React from "react";
import { Box, Typography, Pagination } from "@mui/material";

const PaginationComponent = ({ 
  currentPage, 
  totalPages, 
  totalItems, 
  itemsPerPage, 
  onPageChange 
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mt={3}>
      <Typography variant="body2" color="text.secondary">
        Showing {startIndex + 1}-{endIndex} of {totalItems} results
      </Typography>
      
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, page) => onPageChange(page)}
        color="primary"
        size="medium"
        showFirstButton
        showLastButton
      />
    </Box>
  );
};

export default PaginationComponent;
