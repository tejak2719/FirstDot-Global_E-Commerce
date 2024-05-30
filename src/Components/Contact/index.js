import React from 'react';
import './index.css';

export default function Contact() {
  return (
    <div className="main-container">
      <div className="contact-container">
        <h1 className="header-style">Enter your details we will reach you...</h1>
        <div className='name-designation'>
          <select className='designation small-dropdown'>
            <option value="Mr">Mr.</option>
            <option value="Mrs">Mrs.</option>
          </select>
          <input type="text" id="inputName" className='input-box' placeholder='Enter your name'/>
        </div>
        <div className='input-wrapper'>
          <input type="text" id="inputAddress" className='wide-input-box' placeholder='Enter your Village'/>
        </div>
        <div className='input-wrapper'>
          <input type="text" id="inputCity" className='wide-input-box' aria-label="City" placeholder='Enter your city'/>
        </div>
        <div className='input-wrapper'>
          <input type="text" id="inputZip" className='wide-input-box' placeholder='Enter your Postalcode'/>
        </div>
        <div className='input-wrapper'>
          <input type="text" id="inputState" className='wide-input-box' placeholder='Enter your state'/>
        </div>
        <div className='input-wrapper'>
          <select className="wide-input-box" aria-label="Country select">
            <option value="" selected>Select The Country</option>
            <option value="IND">India</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AG">Antigua and Barbuda</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="AZ">Azerbaijan</option>
            <option value="BS">Bahamas</option>
            <option value="BH">Bahrain</option>
            <option value="BD">Bangladesh</option>
            <option value="BB">Barbados</option>
            <option value="BY">Belarus</option>
            <option value="BE">Belgium</option>
            <option value="BZ">Belize</option>
            <option value="BJ">Benin</option>
            <option value="BT">Bhutan</option>
          </select>
        </div>
        <div className='mobileNumber input-wrapper'>
          <select className="inputPhoneCountryCode small-dropdown" aria-label="Phone Country Code">
            <option value="+1">(+1)</option>
            <option value="+44">(+44)</option>
            <option value="+91" selected>(+91)</option>
            <option value="+86">(+86)</option>
            <option value="+81">(+81)</option>
            <option value="+82">(+82)</option>
            <option value="+49">(+49)</option>
            <option value="+7">(+7)</option>
            <option value="+971">(+971)</option>
            <option value="+61">(+61)</option>
          </select>
          <input type="text" id="inputPhone" className='wide-input-box' placeholder='Enter your mobile number'/>
        </div>
        <div className='input-wrapper'>
          <input type="Email" id="inputEmail" className='wide-input-box' placeholder='Enter your email'/>
        </div>
        <div className='input-wrapper submit-wrapper'>
          <button type="submit" className='submit-button'>Submit</button>
        </div>
      </div>
    </div>
  );
}