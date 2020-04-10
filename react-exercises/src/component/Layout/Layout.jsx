import React, { Fragment } from 'react';

const Layout = (props) => {

    return (
        <Fragment>
            <header>Logo, Menu</header>
            <main className='main-container'>
                { props.children }
            </main>
        </Fragment>
    )
}

export default Layout