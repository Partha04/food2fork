import React, { Component } from 'react';
class RecipeSearch extends Component {
    state = {}
    render() {
        const {handleSubmit,handleChange}=this.props;
        return ( <React.Fragment>
            <div className="container text-center">
                <div className="col stext"><h2>Search for recipies <br/>with  
                <strong className="text-danger"> FOOD2FORK</strong></h2></div>
                <div className="input-group">
        <input type="text" 
        className="form-control"
         placeholder="chicken,potato,banana"
         id="txtSearch"
         onChange={handleChange}/>
        <div className="input-group-btn">
          <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
            Search
          </button>
            </div>
            </div></div>
        </React.Fragment> );
        }
    }

    export default RecipeSearch;