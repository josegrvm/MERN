import React from "react";
import Block from "./block";
import Footer from "./footer";


function Content() {
    return (
    <>
        <div className="content">
            <Block />
            <Block />
            <Block />
            <Footer />
        </div>
    </>
    );
}

export default Content;