import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7LwxqaiBsy7ItYufV1R4smnTgw2dmTmsLw&usqp=CAU"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB1mcRsBUNTBduU9YXJ7hgXJmoL9xMIwG1-O8lu3erbB8fNhreA_Ni7ll5U9EYcOIJaF0&usqp=CAU"
                        alt="Second slide"
                    />

                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default BrandCarousel;