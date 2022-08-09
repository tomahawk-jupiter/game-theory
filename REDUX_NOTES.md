# Redux Notes

## Redux

### Redux Contents

- [Store](#store)
- [Reducer](#reducer)
- [Provider](#provider)
- [Connect](#connect)
- [Map state to props](#map-state-to-props)
- [Using Dispatch](#using-dispatch)
- [Map Dispatch to Props](#map-dispatch-to-props)

### Install

    $ npm install redux react-redux

### Store

    import { createStore } from 'redux';

    const store = createStore(reducer);

You can pass in the initial state as a second argument. If using combine reducers, the state must follow the same structure.

### Reducer

This can be setup in its own file and exported for use.

    const reducer = (state = 0, action) = > {
      switch (action.type) {
        case 'INCREMENT_COUNT:
          return state + action.value;
        default:
          return state;
      }
    }

NOTE: the default state is defined as its passed in as an argument. The initial state can also be passed to the store, see [Store section](#store)

### Provider

Wrap your main app element with the Provider and pass the store as a prop.

    import { Provider } from 'react-redux';

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("app")
    );

### Connect

    import { connect } from 'react-redux';

Connect individual components. This can be done when exporting the component.

    export default connect(mapStateToProps, mapDispatchToProps)(Component);

### Map state to props

You must pass a function that returns the state to the connected component otherwise it won't receive it. It will be available from the props with the name you gave it.

You could do this:

    connect((state) => state)(Component);

The state will be in the props but will be mixed in with any normal props that component receives from parent components, thats why its good to give it a name, like so:

    const mapStateToProps = (state) => {
      return { attributes: state };
    };

    connect(mapStateToProps)(Component);

You can also pass null instead if you don't want that component to have access to state or dispatch, eg.

    connect(mapStateToProps, null)(Component);

Now in the 'connected' component the state can be accessed with attributes:

    const Component = ({ attributes }) => {}

The dispatch can also be accessed:

    const Component = ({ attributes, dispatch }) => {}

### Using Dispatch

You pass the action object to the dispatch, this updates the state:

    dispatch({ type: 'INCREMENT_COUNT', value: 2 }):

### Map Dispatch to Props

The component will receive the dispatch from the store anyway, but you can define some dispatch actions.

mapDispatchToProps can be passed to the connect function.

**This is a function that returns an action.** It can be passed to the dispatch if the action you want has a variable, if it doesn't then you don't need a function, just store the action in a variable or put it directly in the dispatch.

    const addMessage = (message) => {
        return {
            type: ‘ADD’,
            message: message
        }
    };

It can be used like the following:

    const mapDispatchToProps = (dispatch) => {
        return {
            submitNewMessage: (message) => {
                dispatch(addMessage(message))
            }
        }
    }

This is useful to define multiple dispatch actions.

### combineReducers

Splitting up the reducers, each one is called a 'slice'. It makes dealing with complex nested state simpler. The reducers only receive the parts of the state its mapped to using the key.

    import { combineReducers } from 'redux';

    const rootReducer = combineReducers({
      stateOne: reducerOne,
      stateTwo: reducerTwo
    });

The key names must match keys for the state. The state for this rootReducer would look like:

    {
      stateOne: {
        ...someStateData
      },
      stateTwo: {
        ...someStateData
      }
    }

### Local storage

This is a way to add some persistance without making a backend.

[Local Storage MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

[Redux Contents](#redux-contents)
