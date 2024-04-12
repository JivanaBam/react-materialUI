import React from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const MuiButton = () => {
  return (
    <div>
      <div>
        <h1>Variant</h1>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </div>

      <div>
        <h1>Color</h1>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
      </div>

      <div>
        <h1>Button with Icon and Text</h1>
        <Button variant="contained" startIcon={<SendIcon />}>
          Sendmail
        </Button>
        <Button variant="contained" endIcon={<EditIcon />} color="secondary">
          Edit
        </Button>
      </div>

      <div>
        <h1>Icon Button</h1>
        <Button>
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default MuiButton;
