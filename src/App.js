import { Provider } from 'react-redux';
import store from './redux/store';
import PostList from './PostList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
