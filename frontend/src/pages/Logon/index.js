import React from 'react';
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  return (
    <div className="logon-container">
       <section className="form">
            <img src={logoImg} alt="Be The Hero"/>

            <form>
                <h1>Log in</h1>
                <input placeholder="Your Id"/>
                <button className="button" type="submit">Enter</button>

                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041" />
                I don't have a registration
                </Link>
            </form>
       </section>
       <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}
