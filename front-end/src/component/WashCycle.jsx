import React, {Component} from 'react';
import WashCycleService from '../service/WashCycleService';
import { OverlayTrigger, Tooltip , ButtonGroup, Row, ListGroup, Modal, Container} from 'react-bootstrap';

class WashCycle extends Component{

    constructor (props){
        super(props)
        this.state = {
            washCycles: [], 
            smShow: false,
            selectedProgram: ''
        }

    }

    componentDidMount() {
        this.getWasherData();
        if(this.state.selectedProgram === ''){
            this.setState({selectedProgram: "Up to my washer"})
        }
    }

    getWasherData(){
        WashCycleService.getWashCycles()
        .then(
            response => {
                this.setState({washCycles: response.data})            }
        )
    }

    hideSmShow(status){
        this.setState({smShow: status})
    }

    setProgram(program){
        this.props.parentCallback(program);
        this.setState({selectedProgram: program})
        this.hideSmShow(false)
    }

    render(){
        const placement = 'right'

        return(
            <>
            <p className="wash-cycle-p" onClick={() => this.hideSmShow(true)}>{this.state.selectedProgram}</p>
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
                        this.state.washCycles.map(
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
                                <ListGroup.Item action variant="light" onClick={() => this.setProgram(washcycle.cycle)}>{washcycle.cycle}</ListGroup.Item>
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