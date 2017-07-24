
import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const TweetCard = (props) => {
    let display = ((props.index / 5) === props.pageNo) ? 'inline-block' : 'none';
    return (
        <Card style={{display}}>
            <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
            />
            <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle"/>}
            >
                <img src="images/nature-600-337.jpg" alt=""/>
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle"/>
            <CardText>

            </CardText>
        </Card>)
};

export default TweetCard;