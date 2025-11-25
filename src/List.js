function List(props){
    //fruits.sort((a, b) => a.fruit.localeCompare(b.fruit)); //alphabet
    //fruits.sort((a, b) => b.fruit.localeCompare(a.fruit)); //reverse alphabet
    //fruits.sort((a, b) => a.fruit - b.fruit); 
    //const fruityFilter = fruits.filter(fruit => fruit.color === "yellow"); filter the fruit that is yellow

    const itemList = props.items;

    const fruitList = itemList.map(itemList => <li key={itemList.id}>
                                              {itemList.fruit}: &nbsp;  
                                              {itemList.color}, {itemList.calories}</li>);
    
    return <ol>{fruitList}</ol>;
  }
export default List; 