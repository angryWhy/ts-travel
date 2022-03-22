import * as React from 'react';
import styles from "./carousle.module.css"
import {Image,Carousel} from "antd"
import image1 from "../../assets/images/carousel_1.jpg"
import image2 from "../../assets/images/carousel_2.jpg"
import image3 from "../../assets/images/carousel_3.jpg"
interface ICarousleImageProps {
}

const CarousleImage: React.FunctionComponent<ICarousleImageProps> = (props) => {
  return(
      <Carousel className={styles.slider} autoplay>
          <Image src={image1}/>
          <Image src={image2}/>
          <Image src={image3}/>
      </Carousel>
  )
};

export default CarousleImage;
