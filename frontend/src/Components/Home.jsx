import React from "react";
import {ImageList} from '@mui/material';
import {ImageListItem} from '@mui/material';

function Home() {

    const itemData = [
  {
    img: '/images/526595723_122111505350954917_7640186798562216999_n.jpg',
    title: 'Bed',
  },
  {
    img: '/images/527833987_1296589152067287_8891348194516970945_n.jpg',
    title: 'Kitchen',
  },
  {
    img: '/images/536268090_122118555218954917_340247292914840731_n.jpg',
    title: 'Sink',
  },
  {
    img: '/images/536268881_122118555338954917_6395707654521190516_n.jpg',
    title: 'Books',
  },
  {
    img: '/images/536268881_122118555338954917_6395707654521190516_n.jpg',
    title: 'Chairs',
  },
  {
    img: '/images/527382104_122111567384954917_308510542993001760_n.jpg',
    title: 'Chairs',
  }
    ];
    
    console.log(itemData);
    
    
  return (
    <div className="grid-container">
      <div className="empty-container"></div>
      <div className="homeContainer">
        <h1>About Us</h1>
            <div>
                    <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
                    {itemData.map((item, index) => (
                        <ImageListItem key={index}>
                        <img
                            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=161&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                    </ImageList>
            </div>
        </div>
      <div className="empty-container"></div>
      </div>
    )
}

export default Home;