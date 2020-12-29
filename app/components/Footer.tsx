import { FooterProps } from '../interfaces/props/FooterProps'
import React from 'react'

class Footer extends React.PureComponent<FooterProps> {
    
    constructor(props: FooterProps) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <footer className="footer">
                        <hr />
                        <span>{this.props.copyright}</span>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Footer