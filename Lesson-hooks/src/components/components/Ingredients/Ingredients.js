import React,{ useCallback, useReducer }   from 'react';
import axios from '../../axios'

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';


//Reducer state manipulation
const ingredientsReducer = ( state, action) => {
  switch(action.type){
    case 'GET':
      return action.ingredients;
    case 'ADD':
      return [...state, action.ingredients]
    case 'DEL':
      return state.filter(ing => ing.id !== action.id);
    default:
      throw new Error('Something went wrong!');
  }
};


//Reducer http manipulation
const httpReducer = ( httpState, action) => {
  switch(action.type){
    case 'SEND':
      return { loading:true, error: null};
    case 'RES':
      return { ...httpState, loading:false};
    case 'ERROR':
      return { loading:false, error: action.error};
    case 'CLEAR':
      return {...httpState, error: null};  
    default:
      throw new Error('Somehting went wrong!')
  }
}

const Ingredients = () => {

  const [ ingredients, dispatch ] = useReducer(ingredientsReducer, [])
  const [ httpState, dispatchHttp ] = useReducer(httpReducer, { loading: false, error: null})

  const addIngredientsHandler = useCallback((ingredients) => {
      dispatchHttp({type: 'SEND'});
      axios.post('/ingredients.json', ingredients)
           .then( res => {  
            dispatchHttp({type: 'RES'}); 
             dispatch({type:'ADD', ingredients:{ id: res.data.name, ...ingredients}});   
           }).catch(err => {
            dispatchHttp({type: 'ERROR', error: err.message}); 
           })
  }, [])
  
  const removeIngredientHAndler = useCallback((id) => {
      dispatchHttp({type: 'SEND'});
      axios.delete(`/ingredients/${id}.json`)
            .then(res => {  
              dispatchHttp({type: 'RES'});  
              dispatch({type: 'DEL', id: id});             
            }).catch(err => {
              dispatchHttp({type: 'ERROR', error: err.message});
            })
  }, [])

  const filterIngredientsHandler = useCallback((filterIngredients) => {
      dispatch({type: 'GET', ingredients: filterIngredients});
  }, [])

  const clearErrorHandler = () => {
    dispatchHttp({type: 'CLEAR'});
  }

  return (
    <div className="App">
      {httpState.error && <ErrorModal onClose={clearErrorHandler}>{httpState.error}</ErrorModal>}
      <IngredientForm 
      loading={httpState.loading}
      addIngredients={addIngredientsHandler} />

      <section>
        <Search search={filterIngredientsHandler} />
        <IngredientList ingredients={ingredients} 
        onRemoveItem={removeIngredientHAndler}/>
      </section>
    </div>
  );
}

export default Ingredients;
