import React from 'react';
import Card from 'react-bootstrap/Card';

function DataCard({ CardData}) { 
    return (
        <>
           {CardData &&
                <Card className="mx-auto">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>{CardData.brand}</Card.Title>
                        <Card.Text>{CardData.brand}</Card.Text>
                        <Card.Text>{CardData.description}</Card.Text>
                    </Card.Body>
                </Card>
            }
        </>
    );
}

export default DataCard;
