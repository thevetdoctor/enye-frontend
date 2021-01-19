import React from 'react';
import { 
    GithubOutlined, 
    InstagramOutlined, 
    FacebookOutlined, 
    TwitterOutlined, 
    } from '@ant-design/icons';
import './Footer.css';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='links'>
            <span>
              <a href='https://www.facebook.com/huntiololo' target="_blank" rel='noreferrer'>
                <FacebookOutlined className='fb logo' type="facebook" />
              </a>
            </span>
            <span>
              <a href='https://www.twitter.com/animalworldng' target='_blank' rel='noreferrer'>
                <TwitterOutlined className='twitter logo' type="twitter" />
              </a>
            </span>
            <span>
              <a href='https://www.instagram.com/animalworldng' target='_blank' rel='noreferrer'>
                <InstagramOutlined className='insta logo' type="instagram" />
              </a>
            </span>
            <span>
              <a href='https://www.github.com/thevetdoctor' target='_blank' rel='noreferrer'>
                <GithubOutlined className='logo' type="github" />
              </a>
            </span>
          </div>
          <span className='design-tag'>
          Design by Oba @animalworldng
          </span>
        </div>
    )
}
