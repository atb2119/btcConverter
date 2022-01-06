import React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Box,
  Button,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

const LowerContainer = () => {
  return (
    <div id="bottom">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "background.paper",
          width: "100vw",
          height: "100vh",
          margin: "0",
          padding: "0",
        }}
      >
        <table style={{ textAlign: "left" }}>
          <tbody>
            <tr>
              <td>Temporary Placeholder</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </div>
  );
};

export default LowerContainer;
