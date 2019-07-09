import React, { Component } from 'react';
import RecipeSearch from './recipesearch';
import Recipe from './recipe';
class Recipelist extends Component {
    
    state = {}
    render() {
        const { recipes ,handledetail,handleChange,handleSubmit} = this.props;
        return ( <
            React.Fragment >
            <RecipeSearch handleSubmit={handleSubmit} handleChange={handleChange}/ >
            <div className="container">
            <div className="col-10.mx-auto.col-md-6 text-uppercase text-center mb-3"></div>
            <h1 className="stext">Recipe list</h1>
            </div>
            
            <div className='row'>
             {
                recipes.map(recipe=>{
                    return (
                        <Recipe key={recipe.recipe_id} recipe={recipe} handledetail={()=>handledetail(0,recipe.recipe_id)}/>
                    )
                })
            }
            </div>
            </React.Fragment>
        );
    }
}

export default Recipelist;