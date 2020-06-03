import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

const NotFoundPage = () => (
    <div>
       404! - <Link to="/">Go Home you're drunk</Link>
    </div>
);

export default NotFoundPage;