import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const FormInput = props => {
  const { errorTitle, title, errorIngredients, ingredients } = props.stateData;

  return (
    <form onSubmit={props.handleSubmit}>
      <TextField
        required={true}
        error={errorTitle}
        label="Title"
        value={title}
        onChange={props.handlerChange}
        margin="normal"
        name="title"
        margin="dense"
        fullWidth="true"
        variant="outlined"
      />
      <br />
      <TextField
        required={true}
        error={errorIngredients}
        label="Ingredients"
        value={ingredients}
        onChange={props.handlerChange}
        margin="normal"
        name="ingredients"
        margin="normal"
        multiline
        rows={4}
        fullWidth="true"
        variant="outlined"
      />
      <br />
      <Button type="submit" variant="outlined" size="small" color="primary">
        Submit Recipe
      </Button>
    </form>
  );
};

export default FormInput;
