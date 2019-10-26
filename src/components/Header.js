import React from 'react';

import logo from '../assets/logo.png';
import { MdAccountCircle } from 'react-icons/md';

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Facebook" />
      <a className="profile" href="#">
        <span>Meu perfil</span>
        <MdAccountCircle color="#fff" size="1.8em" />
      </a>
    </div>
  );
}
