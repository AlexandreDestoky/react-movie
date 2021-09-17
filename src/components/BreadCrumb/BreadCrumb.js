import React from 'react'

import { Link } from 'react-router-dom';
// Styles
import { Wrapper, Content } from './BreadCrumb.style';

export default function BreadCrumb({movieTitle}) {
  return (
    <Wrapper>
    <Content>
      <Link to='/'>
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
  )
}
