import React from 'react'
import PropTypes from 'prop-types'
import About from "../pages/about";

const Layout = () => {
    return (
        <div className="layout-component">
            {/*<Navigation />*/}
            <About/>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
