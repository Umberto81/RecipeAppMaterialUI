import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
        /*
        *this function gives the recipe index to this modal
         */
        this.props.handleModify(this.props.index);
    };

    handleClose = () => {
        this.setState({ open: false });
        /**insert function to update recipes */
        this.props.modifyRecipe(this.props.index);
    };

    

    render() {
        
        const { titleToModify, ingredientsToModify, load, index } = this.props.recipeToModify;
        return (
            <div>
                <Button onClick={this.handleClickOpen} 
                    variant="outlined" color="primary" 
                >
                
                Modify</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Recipe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        Modify here you recipe
            </DialogContentText>
                        <form>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="title"
                            label="Title"
                            type="text"
                            fullWidth
                            defaultValue={titleToModify}
                                onChange={this.props.handlerChange}
                                name='modifiedTitle'


                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="ingredients"
                            label="ingredients"
                            type="text"
                            fullWidth
                                defaultValue={ingredientsToModify}
                                onChange={this.props.handlerChange}
                                name='modifiedIngredient'


                        />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
            </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Submit modification
            </Button>
            
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
