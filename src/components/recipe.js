import React, { Component } from 'react';

class Recipe extends Component {
    
    state = {}
    render() {
        const {image_url,title,source_url,publisher,recipe_id}=this.props.recipe;
        const {handledetail}=this.props;
        return ( <React.Fragment>
            <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
                <div className="card">
                    <img src={image_url} className='img-card-top' alt="recipes" style={{height:"18rem"}}/>
                    <div className="card-body text-capitaize">
                        <h6 className="">{title}</h6>
                        <h6 className="text-warning">
                            Provided by {publisher}
                        </h6>
                    </div>
                    <div className="card-footer">
                        <button type='button'
                         className='btn btn-primary text-capitalize mx-5' 
                         onClick={handledetail}>details</button>
                        <a href={source_url} 
                        className="btn btn-success text-capitalize"
                         target='_blank'  
                         rel="noopener noreferrer">recipe url</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
        ); 
    }
}

export default Recipe;