import { author, copyright, title } from '../constants'

import Footer from '../components/Footer'
import Header from '../components/Header'
import { LayoutProps } from '../interfaces/props/LayoutProps'
import Nav from '../components/Nav'
import React from 'react'

class Layout extends React.PureComponent<LayoutProps> {
    
  constructor(props: LayoutProps) {
      super(props);
  }

  render() {
    return (
      <div className="container">
        <Header title={title} author={author} />  
        <Nav />
        <div className="children">
          {this.props.children}
        </div> 
        <Footer copyright={copyright}/>
      </div>
    );
  }
}

export default Layout
