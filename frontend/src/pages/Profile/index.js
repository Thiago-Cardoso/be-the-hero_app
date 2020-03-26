import React from 'react';
import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { FiPower , FiTrash2 } from 'react-icons/fi';

import './styles.css';

export default function Profile() {
  return (
    <div className="profile-container">
        <header>
                <img src={logoImg} alt="Be the hero" />
                <span>Welcome, the APAD</span>

                <Link className="button" to="/incidents/new">Register new case</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
        </header>
        <h1>Cases register</h1>

        <ul>
            <li>
                <strong>CASE:</strong>
                <p>Case teste</p>
                <strong>DESCRIPTION: </strong>
                <p>Description test</p>

                <strong>VALUE:</strong>
                <p>R$ 120,00 </p>

               <button type="button">
                    <FiTrash2 size={20} color="#a8a8b3" />
               </button>
            </li>
        </ul>
    </div>
  );
}
