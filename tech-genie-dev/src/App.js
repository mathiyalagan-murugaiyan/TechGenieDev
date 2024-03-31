import React from 'react';
import Header from './components/Header';
// import Footer from './components/Footer';
import CardDesign from './components/CardDesign';
import SideNavbar from './components/SideNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/app.css'
import img1 from './images/img1.jpeg'
import img2 from './images/img2.jpeg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'

const imageFolder = './images'
const cardData = [
  {
    title: 'Card 1',
    imageName: img1,
    description: 'This is the description for Card 1.',
  },
  {
    title: 'Card 2',
    imageName: img2,  
    description: 'This is the description for Card 2.',
  },
  {
    title: 'Card 3',
    imageName: img3,
    description: ' nfogidnfgpoidf fgoidfngoi',
  },
  {
    title: 'Card 4',
    imageName: img4,
    description: 'This is the description for Card 3.',
  },
  {
    title: 'Card 5',
    imageName: img5,
    description: 'This is the description for Card 4.',
  },
  {
    title: 'Card 6',
    imageName: img1,
    description: 'This is the description for Card 5.',
  },
  {
    title: 'Card 7',
    imageName: 'https://example.com/image2.jpg',
    description: 'This is the description for Card 6.',
  },
  {
    title: 'Card 8',
    imageName: 'https://example.com/image2.jpg',
    description: 'This is the description for Card 6.',
  },
  // Add more card data as needed
];

function App() {
  return (
    <div className="app">
      <div className="container-fluid">
        <Header title="TECH GENIE DEV" />
        <div className="row">
          <div className="col-md-2">
            <SideNavbar />
          </div>
          <div className="col-md-10">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
              {cardData.map((cardData, index) => (
                <div key={index} className="col">
                  <CardDesign
                    title={cardData.title}
                    imageName={cardData.imageName}
                    description={cardData.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer title="Footer component" /> */}
    </div>
  );
}

export default App;
