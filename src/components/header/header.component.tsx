import logo from '../../logo.svg';
import './header.component.scss';

interface IComponentHeaderProps {
  mode?: string;
}

export function ComponentHeader(props: IComponentHeaderProps) {
  return (
    <nav className='ws-component-header navbar navbar-light bg-light'>
      <a className='navbar-brand' href="/">
        <img src={logo} width='30' height='30' className='d-inline-block align-top' alt='' />
        <span>Web Studio</span>
      </a>
    </nav>
  );
}
