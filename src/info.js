import React, {Fragment} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import FormDialog from "./formDialog";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';


const Info = props => {
  const { title, ingredients } = props.dati;
  const errorData = props.errori;
  const recipeList = props.recipes;
  const { titleToModify, ingredientsToModify, load } = props.recipeToModify;

  const errore = errorData.map((item, index) => {
    return (
      <div>
        <Typography variant="h6" gutterBottom color='error' alignCenter>
          Error:
      </Typography>
      <ListItem key={index} divider={true}>
        <ListItemText primary={item} align="center" />
      </ListItem>
      </div>
    );
  });

  const finalRecipeList = recipeList.map((item, index) => {
    return (
      <ExpansionPanel align="center" key={index}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography align="center">Title: {item.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails align="center">
          <Typography>{item.ingredients} </Typography>
        </ExpansionPanelDetails>
        <IconButton aria-label="Delete" onClick={() => props.handleDelete(index)}>
          <DeleteIcon />
        </IconButton>
       
        <FormDialog
          index={index}
          handleModify={props.handleModify}
          recipeToModify={props.recipeToModify}
          modifyRecipe={props.modifyRecipe}
          handlerChange={props.handlerChange}
          modifiedTitle={props.modifiedTitle}
          modifiedIngredient={props.modifiedIngredient}
        />
      </ExpansionPanel>
    );
  });

  return (
    <Fragment>
      {(title != null) ? finalRecipeList : 
      <div>
      {errore}
      </div>}
    </Fragment>
  );
};

export default Info;
