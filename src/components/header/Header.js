import React from 'react';
import Navbar from '../navbar/Navbar';
import SearchForm from '../search form/SearchForm';
import "./header.css";

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
          <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius nunc fringilla nunc posuere semper. Vivamus sit amet congue purus. Nam id neque fringilla, egestas arcu eu, placerat lorem. In hac habitasse platea dictumst. Nulla varius cursus facilisis. Cras mattis libero metus, ut viverra sem lobortis a. Phasellus id accumsan nunc, ac fringilla lectus. Nullam a nisl fringilla, dictum velit eu, interdum nisi. Integer suscipit metus nec facilisis tincidunt. Nulla sed dolor quis magna lobortis pulvinar. Aliquam consequat eros arcu, sit amet rhoncus lacus mollis vel. Vivamus eleifend finibus metus vel efficitur. Nunc consectetur lobortis commodo. Donec lobortis rhoncus nulla, id viverra metus tincidunt quis. Donec hendrerit, purus et volutpat ultrices, risus dui mollis nisi, sed accumsan tellus magna id ligula.</p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header