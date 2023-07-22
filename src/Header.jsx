import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div className="px-2 d-flex justify-content-between">
            <div className='d-flex align-self-center'>
                <Navbar.Brand href="#home" className='custom-nav'>Buy</Navbar.Brand>
                <Navbar.Brand href="#home" className='custom-nav'>Rent</Navbar.Brand>
                <Navbar.Brand href="#home" className='custom-nav'>Sell</Navbar.Brand>
                <Navbar.Brand href="#home" className='custom-nav'>Home Loans</Navbar.Brand>
                <Navbar.Brand href="#home" className='custom-nav'>Agent Finder</Navbar.Brand>
            </div>
            <div className='d-flex align-self-center'>
                <img src="./logo.png" width={80} />
            </div>
            <div className='d-flex align-self-center'>
                <Navbar.Brand href="#home" className='custom-nav'>Manage Rental</Navbar.Brand>
                <Navbar.Brand href="#home" className='custom-nav'>Advertise</Navbar.Brand>
                <Navbar.Brand href="#home" className='custom-nav'>Sign or Join</Navbar.Brand>
                <Navbar.Brand href="#home" className='custom-nav pl-2'>Help</Navbar.Brand>
            </div>
        </div>
    )
}

export default Header
