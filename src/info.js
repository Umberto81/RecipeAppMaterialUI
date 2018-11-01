import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import FormDialog from "./formDialog";

const Info = props => {
  const { title, ingredients } = props.dati;
  const errorData = props.errori;
  const recipeList = props.recipes;
  const { titleToModify, ingredientsToModify, load } = props.recipeToModify;

  const errore = errorData.map((item, index) => {
    return (
      <ListItem key={index} divider={true}>
        <ListItemText primary={item} align="center" />
      </ListItem>
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

        <Button
          variant="outlined"
          color="secondary"
          onClick={() => props.handleDelete(index)}
        >
          Delete
        </Button>
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
    <div>
      {title != null ? finalRecipeList : null}
      <ul>{errore}</ul>
    </div>
  );
};

export default Info;
