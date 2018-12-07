/* @TODO
- change to use JSX inside of grocery list Component
- add items to GroceryList
  - create a GroceryInput component
    - text input
    - add button
    - accept a submit handler through props to get value from input
  - create local state in GroceryList.state.list
    - through the submit handler append to state.list
    - render GroceryItem based on state.list 
*/

class GroceryList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return React.createElement(
      'ul',
      null,
      [
        React.createElement(GroceryItem, {className: 'santaClass', name: 'candy toast'}, null),
        React.createElement(GroceryItem, {name: 'toast'}, null)
      ]
    )
  }
}

class GroceryItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    // return React.createElement('li', null, this.props.name)
    return(<h1>Hello</h1>)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.querySelector('#app')
  ReactDOM.render(
    React.createElement(GroceryList, null, null),
     appElement
   )

})
