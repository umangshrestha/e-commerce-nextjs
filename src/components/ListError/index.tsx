// import ErrorIcon from "@mui/icons-material/Error";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function ListError({ errors }: { errors?: string[] }) {
  if (!errors?.length) {
    return null;
  }
  return (
    <List>
      {errors.map((error) => (
        <ListItem key={error} sx={{ p: 0 }}>
          <ListItemIcon>{/* <ErrorIcon color="error" /> */}</ListItemIcon>
          <ListItemText color="error" primary={error} />
        </ListItem>
      ))}
    </List>
  );
}
