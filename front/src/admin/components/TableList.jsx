import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

export const TableList = ({ rows, columns }) => {
  return (
    <TableContainer component={Paper} sx={{ padding: "10px" }}>
      <Table
        sx={{ minWidth: 400, maxWidth: 700, margin: "auto" }}
        aria-label="simple table"
        border="1"
        padding="3"
        margin="3"
      >
        <TableHead sx={{ backgroundColor: "#70B38D", borderRadius: "20px" }}>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                keSy={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth, width: column.maxWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {
            return (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {row.map((item, index) => {
                  return (
                    <TableCell
                      align="center"
                      key={index}
                      sx={
                        index === row.length - 1
                          ? {
                              display: "flex",
                              justifyContent: "space-around",
                              columnGap: "10px",
                            }
                          : {}
                      }
                    >
                      {index === row.length - 1 ? (
                        <>
                          <Button
                            variant="contained"
                            sx={{ backgroundColor: "#70B38D", color: "white" }}
                          >
                            Editar
                          </Button>
                          <Button
                            variant="contained"
                            sx={{ backgroundColor: "#EC7179", color: "white" }}
                          >
                            Eliminar
                          </Button>
                        </>
                      ) : (
                        item
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
