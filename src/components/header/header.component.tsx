import logo from '../../logo.svg';
export function ComponentHeader() {
    return (
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand' href="/">
                <img src={logo} width='30' height='30' className='d-inline-block align-top' alt='' />
                <span>Web Studio</span>
            </a>
        </nav>
    );
}