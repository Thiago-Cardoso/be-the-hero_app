import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

 import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
  return (
   <div className="new-incident-container">
       <div className="content">
           <section>
                <img src={logoImg} alt="Be The Hero" />

                <h1>Register new case</h1>
                <p>Describe the case in detail to find a hero to solve this.</p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041" />
                     back to home
                </Link>
           </section>
             <form>
                <input placeholder="Title of Case" />
                <textarea  placeholder="Description" />
                <input  placeholder="Value in real" />
               <button className="button" type="submit">Register</button>
            </form>
       </div>
   </div>
  );
}
