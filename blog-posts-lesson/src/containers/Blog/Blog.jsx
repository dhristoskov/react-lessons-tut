import React from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';

//const Posts = React.lazy(() => import('./Posts/Posts'))

const Blog  = () =>  {

    return (
        <div>
            <nav>
                <ul className='settings'>
                    <NavLink exact to='/' style={{textDecoration: 'none'}}><li>Home</li></NavLink>
                    <NavLink to='/add-post' style={{textDecoration: 'none'}}><li>New Post</li></NavLink>
                </ul>
            </nav>
            <Switch>
                <Route path='/add-post' component={NewPost} />
                <Route path='/' component={Posts} />
            </Switch>
        </div>
    );
}

export default Blog;