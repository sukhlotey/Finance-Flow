import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import "./auth.css"; 

export const Auth: React.FC = () => {
  return (
    <>
    <div className="auth-container">
      <div className="auth-left">
        <h1>Welcome to FinanceFlow</h1>
      </div>
      <div className="auth-right">

        <SignedOut>
        <img
            src="https://i3.wp.com/prospergate.com/wp-content/uploads/2021/10/finance.gif?ssl=1"
            alt="Finance Illustration"
            className="auth-image"
          />
          <div className="auth-actions">
            <SignUpButton mode="modal" />
            <SignInButton mode="modal" />
          </div>
         
        </SignedOut>
        <SignedIn>
          <Navigate to="/" replace />
        </SignedIn>
      </div>
    </div>
    <div className="footer-section">
  <div className="social-icons">
 
    <a href="https://instagram.com/im.preet.0929" className="social-icon" target="_blank" aria-label="Instagram">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="instagram" />
    </a>
    <a href="https://twitter.com/luvseverussnape" className="social-icon" target="_blank" aria-label="Twitter">
      <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg" alt="Twitter" />
    </a>
    <a href="https://github.com/sukhlotey" className="social-icon" target="_blank" aria-label="Github">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" />
    </a>
    
    <p className="info-app">Manage your finances with ease. Our straightforward platform helps you keep track of your spending, set budgets, and stay on top of your financial goals. Simplify your money management and enjoy a clearer financial picture.</p>
  
  </div>
</div>
    </>

  );
};
