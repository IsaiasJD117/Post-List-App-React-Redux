import {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from './redux/actions';

const PostList = ({ posts, loading, error, fetchPosts }) => {
    useEffect(()=> {
        fetchPosts(); 
    }, [fetchPosts]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    
    return (
        <div>
            <h1>Post List</h1>
            <button onClick={fetchPosts}>Refresh</button>
            {posts.map((post)=> (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    posts: state.posts.posts,
    loading: state.posts.loading,
    error: state.posts.error,
});

export default connect(mapStateToProps, { fetchPosts })(PostList);