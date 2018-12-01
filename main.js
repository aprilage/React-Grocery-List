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
