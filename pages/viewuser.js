import Link from "next/link";
import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const ViewUser = () => {

    const [editboxOpen, SetEditboxOpen] =useState(0);

  return (
      <div>
        <header>
          <div className="container">
            <div className="logo">
              <img src="/logo.svg" alt="" />
            </div>
            <div className="links">
              <Link href="#" className="active">
                HOME
              </Link>
              <Link href="#">legal notice contest</Link>
            </div>
            <div className="dd">
              <button>
                <i className="uil uil-user"></i> user name
              </button>
              <i className="uil uil-align-center-alt menu"></i>
            </div>
          </div>
        </header>
        <div className="modal">
          <div className="result">
            <h3>
              You win prize 5 <span>Prize name</span>
            </h3>
            <button>View prize</button>
          </div>
        </div>
        <section id="user-dashboard">
          <div className="container">
          
          <div className="block active">
          <Modal toggle={() => SetEditboxOpen(!editboxOpen)} isOpen={editboxOpen}>
              <div className="modal profile-edit">
              <ModalBody>...
                <form action="#" className="sign">
                  <h1>Edit profile</h1>
                  <div className="fild">
                    <i className="uil uil-user"></i>
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="fild">
                    <i className="uil uil-envelope"></i>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="buttons">
                    <button className="submit">Save changes</button>
                    <button className="submit">Cancel</button>
                  </div>
                </form>
                </ModalBody>
              </div>
              </Modal>
              <div className="user-profile">
                <h2>User details</h2>
                <div className="item">
                  <i className="uil uil-user"></i>
                  <p>Nassim</p>
                </div>
                <div className="item">
                  <i className="uil uil-envelope"></i>
                  <p>nassim@gmail.com</p>
                </div>
                <div className="buttons">
                  <button onClick={()=> SetEditboxOpen(!editboxOpen)}>Edit details</button>
                  <button>Logout</button>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        <footer>
          <div className="container"></div>
        </footer>
      </div>
  );
};

export default ViewUser;
