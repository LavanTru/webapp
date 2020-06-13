import React, {Component} from 'react';
import { OverlayTrigger, Tooltip , ButtonGroup, ListGroup, Modal, Container} from 'react-bootstrap';

class WashCycle extends Component{

    constructor (props){
        super(props)
        this.state = {
            washCycles: [], 
            smShow: false
        }

    }    

    hideSmShow(status){
        this.setState({smShow: status})
    }

    setProgram(program, temperature){
        this.props.parentCallback(program, temperature);
        this.hideSmShow(false)
    }

    render(){
        const placement = 'right'

        return(
            <>
            <p className="wash-cycle-p" onClick={() => this.hideSmShow(true)}>{this.props.program}</p>
            <Modal
                size="sm"
                show={this.state.smShow}
                onHide={() => this.hideSmShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Wash Cycles
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ButtonGroup vertical>
                    <Container>
                        {
                        this.props.cycles.map(
                            washcycle =>
                            <OverlayTrigger
                                key={`key-`+washcycle.cycle} 
                                placement={placement}
                                delay={{ show: 250, hide: 400 }}
                                overlay={
                                    <Tooltip className="wash-cycle-tooltip" id={`popover-`+washcycle.cycle}>
                                        {washcycle.description}
                                    </Tooltip>
                                }
                            >
                                <ListGroup.Item action variant="light" onClick={() => this.setProgram(washcycle.cycle, washcycle.temperature.celsius)}>{washcycle.cycle}</ListGroup.Item>
                            </OverlayTrigger>
                        )
                        }
                    </Container>
                    </ButtonGroup> 
                </Modal.Body>
            </Modal>
            </>
        );
    }
}

export default WashCycle;