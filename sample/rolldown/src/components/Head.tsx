//import { Routes, Route, Link } from 'react-router-dom';
import {Link } from 'react-router-dom';
//
function Page() {
    return (
    <div>
        <a href="/">[ Home ]</a>
        <a href="/about">&nbsp; [ about ]</a>
        <a href="/test">&nbsp; [ test ]</a>
        <hr />
    </div>
    );
}
export default Page;
/*
<a href="/contact">&nbsp; [ contact ]</a>
<Link to="/test1">&nbsp; [ test1 ]</Link>
*/