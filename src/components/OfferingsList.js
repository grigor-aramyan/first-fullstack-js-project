import React, { Component } from 'react';

import mockOfferings from '../../dist/dataMock';
import OfferingsListItem from './OfferingsListItem';

export default class OfferingsList extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row justify-content-center">
                {mockOfferings.MockList.map(item => <OfferingsListItem data={item} key={item.id} />)}
            </div>
        );
    }
}

