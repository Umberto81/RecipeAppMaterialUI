import React, { Component } from "react";
import Info from "./info";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  buttonPadding: {
    padding: '20px',
    fontSize: '12px',
  },
});


class Form extends Component {
  state = {
    recipes: [],
    title: "",
    ingredients: "",
    recipe: {},
    errori: [],
    errorTitle: false,
    errorIngredients: false,
    recipeToModify: {},
    modifiedTitle: "",
    modifiedIngredient: ""
  };

  handlerChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  /*check if an object is empty */
  isEmpty = obj => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };
  /*delete recipe */
  handleDelete = index => {
    const copy = this.state.recipes;
    for (let i in copy) {
      if (index == [i]) {
        this.state.recipes.splice(index, 1);
        break;
      }
    }
    this.setState({
      recipes: copy
    });
  };

  /**selecet therecipe to modify */
  handleModify = index => {
    const copy = this.state.recipes;

    for (let i in copy) {
      if (index == [i]) {
        const data = {
          titleToModify: copy[i].title,
          ingredientsToModify: copy[i].ingredients,
          load: true,
          index: index
        };
        this.setState({
          recipeToModify: data
        });
      }
    }
  };
  /**aggiustareeeeeeeeeeeeeeeeeeeeeeeeeeeeee */
  modifyRecipe = index => {
    const copy = this.state.recipes;
    const errors = [];

    for (let i in copy) {
      if (index == [i]) {
        const dati = {
          title: this.state.modifiedTitle,
          ingredients: this.state.modifiedIngredient
        };
        copy.splice(index, 1, dati);
        this.setState({
          recipes: copy
        });
      }
    }
  };

  /*submit form button for recipes */
  handleSubmit = e => {
    e.preventDefault();
    const copy = this.state.recipes;
    const errors = [];
    const dati = {
      title: this.state.title,
      ingredients: this.state.ingredients
    };

    if (dati.title.length < 4) {
      errors.push("The title must be at least 4 characters long");
      this.setState({ errorTitle: true });
    }
    if (dati.ingredients.length < 4) {
      errors.push("The ingredients must be at least 4 characters long");
      this.setState({ errorIngredients: true });
    }

    if (this.isEmpty(errors)) {
      copy.push(dati);
      this.setState({
        recipes: copy,
        recipe: dati,
        title: "",
        ingredients: "",
        errori: [],
        errorTitle: false,
        errorIngredients: false
      });
    } else {
      this.setState({
        errori: errors,
        recipe: ""
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            required={true}
            error={this.state.errorTitle}
            label="Title"
            value={this.state.title}
            onChange={this.handlerChange}
            margin="normal"
            name="title"
            margin="dense"
            
          />
          <br />
          <TextField
            required={true}
            error={this.state.errorIngredients}
            label="Ingredients"
            value={this.state.ingredients}
            onChange={this.handlerChange}
            margin="normal"
            name="ingredients"
            margin="normal"
            multiline
            rows={4}
          />
          <br />
          <Button type="submit" variant="outlined" color="primary"
            className={classes.buttonPadding}

          >
            Submit Recipe
          </Button>
        </form>
        <br />
        <Info
          dati={this.state.recipe}
          errori={this.state.errori}
          recipes={this.state.recipes}
          handleDelete={this.handleDelete}
          handleModify={this.handleModify}
          recipeToModify={this.state.recipeToModify}
          modifyRecipe={this.modifyRecipe}
          handlerChange={this.handlerChange}
          modifiedRecipe={this.state.modifiedRecipe}
          modifiedTitle={this.state.modifiedTitle}
          modifiedIngredient={this.state.modifiedIngredient}
        />
      </div>
    );
  }
}
export default withStyles(styles)(Form);