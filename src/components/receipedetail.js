import React, { Component } from 'react';
import {recipe}  from '../tempDetails'
class RecipeDetail extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            recipe:recipe,
           // url:`https://www.food2fork.com/api/get?key=cec6877160c7f99dba3302ca3e1b47c4&rId=${this.props.id}`
        }
    }

   async componentDidMount() {
        try {
                    const data = await fetch(this.state.url);
                     const jsonData = await data.json();
                     this.setState({ recipe: jsonData.recipe })
                  } catch (error) {
                  console.log(error);
                  }
         }
    render() {
        const {image_url,
            publisher_url,
            publisher,
            source_url
            ,title,
            ingredients}=this.state.recipe;
        const {handleindex}=this.props;
        return ( <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-5 ">
                        <button type="button" 
                        className="btn btn-warning mb-5 text-capitalize"
                        onClick={()=>handleindex(1)}>back</button>
                        <img src={image_url}  className="d-block w-100" alt="food"/>
                    </div>
                 
                 <div className="col-10 mx-auto col-md-6 my-5 ">
                     <h5 className='text-uppercase'>{title}</h5>
                     <div className="h6 text-warning text-capitalize stext">provided by {publisher}</div>
                     <a href={publisher_url} target='_blank' rel="noopener noreferrer" 
                     className='btn btn-primary mt-2 text-capitalize'>
                         publisher website
                     </a>
                     <a href={source_url} target='_blank' rel="noopener noreferrer" 
                     className='btn btn-success mt-2 mx-3 text-capitalize'>
                         recipe url
                     </a>
                     <ul className="list-group mt-4">
                        <h2 className="mt-3 mb-4"> ingredients</h2>
                        {
                            ingredients.map((item,index)=>{
                                return(
                                    <li className='list-group-item stext' key={index} >
                                        {item}
                                    </li>
                                )
                            })
                        }
                     </ul>
                 </div>
                 </div>
            </div>
        </React.Fragment>); 
        }
    }

    export default RecipeDetail;