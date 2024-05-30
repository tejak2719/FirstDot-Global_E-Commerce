import React, { useState } from 'react';
import './Newsign.css';

export default function NewSignUp() {
  const [role, setRole] = useState('buyer');

  return (
    <div className="login-container">
      <div className="container">
        <h1>About your Organization</h1>
        
        <div className="role-selection">
          <button 
            className={`role-button ${role === 'buyer' ? 'active' : ''}`} 
            onClick={() => setRole('buyer')}
          >
            I'm a Buyer
          </button>
          <button 
            className={`role-button ${role === 'seller' ? 'active' : ''}`} 
            onClick={() => setRole('seller')}
          >
            I'm a Seller
          </button>
        </div>

        {role === 'seller' && (
          <>
            <label htmlFor="supplier" className="form-label">I’m a supplier of:</label>
            <input type="text" id="supplier" placeholder='(Tell us what products your company supplies e.g. Wooden Furniture, Heavy Machinery, Cell Phone Cases etc.)' />

            <label htmlFor="companyName" className="form-label">Your Company Name:</label>
            <input type="text" id="companyName" placeholder='Enter your Company Name' />

            <label htmlFor="tradeService" className="form-label">I provide the following trade service:</label>
            <input type="text" id="tradeService" placeholder='(Tell us about the services your company provides to worldwide wholesale businesses. e.g. Clearing Agent, Transportation And Shipping etc.)' />

            <label htmlFor="primaryBusiness" className="form-label">Your Primary Business:</label>
            <select id="primaryBusiness">
              <option value="" disabled selected>(Choose your primary business)</option>
              <option value="buyerAgent">Buyer Agent</option>
              <option value="dealerReseller">Dealer/Reseller</option>
              <option value="distributer">Distributer</option>
              <option value="manufacturer">Manufacturer/OEM</option>
              <option value="notKnown">Not Known</option>
              <option value="retailer">Retailer</option>
              <option value="serviceProvider">Service Provider</option>
            </select>

            <label htmlFor="businessYear" className="form-label">Year your business was established:</label>
            <input type="text" id="businessYear" placeholder='Enter the year' />

            <label htmlFor="annualSales" className="form-label">Your Approximate annual sales in the US (in $):</label>
            <select id="annualSales">
              <option value="" disabled selected>(Choose your annual sales)</option>
              <option value="notKnown">Not Known</option>
              <option value="upto250k">Up to 250,000 USD</option>
              <option value="250kTo1m">250,000 to 1 Million USD</option>
              <option value="1mTo5m">1 Million to 5 Million USD</option>
              <option value="5mTo15m">5 Million to 15 Million USD</option>
              <option value="15mTo25m">15 Million to 25 Million USD</option>
              <option value="25mTo50m">25 Million to 50 Million USD</option>
              <option value="50mTo100m">50 Million to 100 Million USD</option>
              <option value="moreThan100m">More than 100 Million USD</option>
            </select>

            <label htmlFor="certifications" className="form-label">Certifications your company received:</label>
            <input type="text" id="certifications" placeholder='Enter your company certifications' />

            <label htmlFor="countryCode" className="form-label">Country code:</label>
            <input type="text" id="countryCode" placeholder='Enter your country code' />

            <label htmlFor="organizationBranch" className="form-label">Branch of the Organization:</label>
            <input type="text" id="organizationBranch" placeholder='Enter the area of work' />
          </>
        )}

        {role === 'buyer' && (
          <>
            <label htmlFor="buyer" className="form-label">I'm a buyer of:</label>
            <input type="text" id="buyer" placeholder='(Tell us what products your company frequently purchases. e.g. Cotton Fabric, Textile Materials ...)' />

            <label htmlFor="tradeService" className="form-label">I provide the following trade service:</label>
            <input type="text" id="tradeService" placeholder='(Tell us about the services your company provides to worldwide wholesale businesses. e.g. Clearing Agent, Transportation And Shipping etc.)' />

            <label htmlFor="primaryBusiness" className="form-label">Your Primary Business:</label>
            <select id="primaryBusiness">
              <option value="" disabled selected>(Choose your primary business)</option>
              <option value="buyerAgent">Buyer Agent</option>
              <option value="dealerReseller">Dealer/Reseller</option>
              <option value="distributer">Distributer</option>
              <option value="manufacturer">Manufacturer/OEM</option>
              <option value="notKnown">Not Known</option>
              <option value="retailer">Retailer</option>
              <option value="serviceProvider">Service Provider</option>
            </select>

            <label htmlFor="countryCode" className="form-label">Country code:</label>
            <input type="text" id="countryCode" placeholder='Enter your country code' />

            <label htmlFor="organizationBranch" className="form-label">Branch of the Organization:</label>
            <input type="text" id="organizationBranch" placeholder='Enter the area of work' />
          </>
        )}
      </div>
    </div>
  );
}