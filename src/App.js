import React, { Component } from 'react';
import recipes from './tempList.js'
import Recipelist from './components/recipelist';
import RecipeDetail from './components/receipedetail'
import './App.css';
const k_ey = 'cec6877160c7f99dba3302ca3e1b47c4';

const searchurl = `https://www.food2fork.com/api/search?key=${k_ey}&q=chicken%20breast&page=2`;

class App extends Component {
    state = {
        recipes: recipes,
        url: searchurl,
        base_url:`https://www.food2fork.com/api/search?key=${k_ey}&q=chicken%20breast&page=2`,
        details_id: 35345,
        pageIndex:1,
        search:'',
        query:'&q='
    }

     async getRecipes() {
         try {
            const data = await fetch(this.state.url);
             const jsonData = await data.json();
             this.setState({ recipes: jsonData.recipes })
          } catch (error) {
          console.log(error);
          }
      }

     componentDidMount() {
         this.getRecipes()
     }
displaypage=(index)=>
{
    switch(index)
    {
        default:
        case 1:
            return(<Recipelist 
                recipes = { this.state.recipes } 
                handledetail={this.handledetail }
                handleChange={this.state.handleChange}
                handleSubmit={this.handleSubmit}/>  )
        case 0:
            return(<RecipeDetail id = { this.state.details_id } handleindex={this.handleindex}/> )    
    }
}

handleindex=(index)=>{
    this.setState({
        pageIndex:index
    })}
handledetail=(index,id)=>{
    this.setState({
        pageIndex:index,
        details_id:id
    })
}    

handleChange=(e)=>{
this.setState(
    {
        search:e.target.value,
    }
);
console.log(this.search);
}
handleSubmit=(e)=>{
    e.preventDefault();
    const {base_url,query,search}=this.state;
    this.setState(()=>{
        return{url:`${base_url}${query}${search}`,search:""};
    },

    ()=>{this.getRecipes();})
}
    render() {
        //console.log(this.state.recipes);
        return ( < React.Fragment >

             <div className = 'text-center' >
             {this.displaypage(this.state.pageIndex)}
            </div> 
            </React.Fragment >
          
        );
    
    }
}
export default App;