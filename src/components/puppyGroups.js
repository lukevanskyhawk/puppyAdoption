import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import OpenClose from './collapse';

class PuppyGroup extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div className="group__husky">
                <img className="group-photo" src="https://www.huskypuppiesinfo.com/wp-content/uploads/2018/03/Choosing-a-Husky-Puppy.jpg" onClick={this.toggle} />
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            Puppy One<img className="individual-photo" id="puppy1" src="https://i.redditmedia.com/ZxaMoxF5R8oDdx4Q9dCMkOFFYF7OHGcADbKzqWPZJa0.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=960&s=0f1a98f884db47347b97dbef669e3079" />
                            Puppy Two<img className="individual-photo" id="puppy2" src="https://i.pinimg.com/564x/6e/7d/2e/6e7d2e6791b741efaf7d6ce346e644c8.jpg" />
                            Puppy Three<img className="individual-photo" id="puppy3" src="https://steemitimages.com/DQmQRdNG9Tagz7dgUarjApuBVSRPDQNJUKpuuhchA4fHHKC/IMG_0637a.jpg" />
                        </CardBody>
                        <OpenClose />
                    </Card>
                </Collapse>
            </div>
        );
    }
}
export default PuppyGroup;