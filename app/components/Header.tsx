import Head from 'next/head'
import { HeaderProps } from '../interfaces/props/HeaderProps'
import React from 'react'
import { Util } from '../utils/util'

class Header extends React.PureComponent<HeaderProps> {

    constructor(props: HeaderProps) {
        super(props);
    }

    render() {
        return (
            <Head>
                <title>{this.props.title}</title>
                <meta charSet="UTF-8"/>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <meta name="author" content={this.props.author}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="shortcut icon" href={Util.getAssetUrl("/img/favicon.ico")} />         
            </Head>
        );
    }
}

export default Header