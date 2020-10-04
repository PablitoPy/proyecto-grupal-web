import React from 'react';

import { Carousel, Image } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function About(props) {
  return (
    // <h3>Requested Param: {props.match.params.id}</h3>
    <>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}> 
              <Image
              // width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
         </h3>
        </div>
        <div>
          <h3 style={{background: 'beige'}}>
          <Image
              //width={200}
              
              src="https://www.infobae.com/new-resizer/9jLB2QHS0Fwmq4SdJmf0cIWhI3Q=/768x512/filters:format(jpg):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/TLCXEJKNWFF3TBJZBZX2TZHBCY.jpg"
              />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
          <Image
              //width={200}
              src="https://tanhispano.com/wp-content/uploads/2019/09/forever-21-1-1.jpg"
              />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
          <Image
              //width={200}
              src="http://www.lasfranquiciasenmexico.com/media/k2/items/cache/0692a4e584defe6544ca2abbf7dd2502_XL.jpg"
              />
          </h3>
        </div>
      </Carousel>
    </>
  );
}

export default About;