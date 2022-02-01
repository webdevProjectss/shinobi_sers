import React from 'react'

const footer = {
    container: {
        backgroundColor: "#333333",
        borderradius: "0 !important",
        height: "auto",
        margin: '6rem auto 0rem'
    },
    copyright: {
        fontSize: "15px",
        color: "#FFFFFF",
        padding: "0px 15px ",
        textAlign: "right",
        verticalAlign: "center",
    },
}

const Footer = () => {
    return (
        <footer className="footer" style={footer.container}>
            <div style={footer.copyright} className='font'>
            © {new Date().getFullYear()}, Designed by Shinobi Sers Dev Team. All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer