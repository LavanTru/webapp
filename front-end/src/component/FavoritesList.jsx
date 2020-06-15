import React, {Component} from 'react';
import {SessionContext} from "../Session";
import { Container, Col } from "react-bootstrap";
import WasherListItem from './WasherSelection/WasherList/WasherListItem';
import WasheeDataService from '../service/WasheeDataService';
import GeoLibService from "../service/GeoLibService";

// Not used in Current production version. Class to render Washee favourite Washers
class FavoritesList extends Component {

    constructor(props){
        super(props)
        this.state = {
            favorites: []
        }
        this.getWasheeFavorites = this.getWasheeFavorites.bind(this);
    }

    componentDidMount() {
        console.log("context",this.context)
        this.getWasheeFavorites();
    }

    getWasheeFavorites() {
        WasheeDataService.getFavorites(this.context.id).then(
            response => {
                this.setState({favorites: response.data})
            }
        )
    }

    render(){
        return(
            <Container className="mt-4" fluid>
            <Col md={{ span: 6, offset: 3 }}>
            {
                this.state.favorites.map(
                    (favorite, index) =>
                    <WasherListItem
                        key={favorite.washer.id}
                        isFavorite={favorite.favorite}
                        washer={favorite.washer}
                        washeeId={this.context.id}
                        favorite={favorite.washer.id}
                        backgroundColour={"pinkBackground"}
                        index={index}
                        distance={GeoLibService.getDistance(
                            {
                                lat: this.context.addresses[0].lat,
                                lng: this.context.addresses[0].lng
                            },
                            {
                                lat: favorite.washer.addresses[0].lat,
                                lng: favorite.washer.addresses[0].lng
                            }
                        )} 
                        />
                    )
            }
            </Col>
            </Container>
        )
    }

}
FavoritesList.contextType = SessionContext;
export default FavoritesList;