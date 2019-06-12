# Redux-A CRUD Example
[https://codeburst.io/redux-a-crud-example-abb834d763c9](https://codeburst.io/redux-a-crud-example-abb834d763c9)

## Redux Store Explaination
The entire state of our application lives inside an object called the store. In order to update the state we need to dispatch an action. Actions are nothing but Javascript objects with a type property which describes the event taking place. Events can be anything from updating counters to adding posts like we have seen above. Once the action has been dispatched, it is received by the reducer. The reducer takes in the current state of the application and the dispatched action and produces the next state of the application based on action.type.

For our React application to use the Redux store, we use the Provider component provided by the react-redux library and put it as the root of all the components.

In order to access our Redux store within our React components we use the special connect() function. This function gives us access to dispatch and when we pass in mapStateToProps it gives us access to the state. mapStateToProps is a function that takes in the state of our application as a parameter and returns an object with keys of that object becoming the props of the component so that whenever we use this.props.key_name we get back the state we need.
