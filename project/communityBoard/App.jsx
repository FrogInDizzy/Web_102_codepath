import React from 'react';
import EventCard from './EventCard';
import './App.css'; // Make sure to create this CSS file for additional styling

const eventData = [
  {
    title: 'BLACK & BLUE STEAK AND CRAB',
    type: 'New American Steakhouse',
    imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/rochester/black-and-blue-steak-and-crab-burlington_BRIAN-SAMUELS-PHOTOGRAPHY_FEBRUARY-2020-0215-copy_566B52C8-5056-A36A-0932CF266A89D385-566b4f4f5056a36_566b5a7f-5056-a36a-09fe9b2c94892644.jpg', // Replace with the path to your image
    link: 'https://blackandbluesteakandcrab.com/', // Replace with the actual link to Birria-Landia
  },
  {
    title: 'DEL LAGO RESORT & CASINO',
    type: 'Cacino',
    imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/rochester/portico-Bar_-083984665056a36_0839863b-5056-a36a-0920bac4370729c7.jpg', // Replace with the path to your image
    link: 'https://dellagoresort.com/', // Replace with the actual link to Birria-Landia
  },
  {
    title: 'ABBOTT\'S FROZEN CUSTARD, INC.',
    type: 'frozen custard',
    imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://Rochester.simpleviewcrm.com/images/listings/original_abbotts0.jpg', // Replace with the path to your image
    link: 'https://www.abbottscustard.com/', // Replace with the actual link to Birria-Landia
  },
  {
    title: 'ALTBAR',
    type: 'non-alcoholic pop-up bar',
    imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/rochester/AltBar_Logo_Tag_Watermark_BlackBG_C164FC02-5056-A36A-099520B7FD997EDC-c164fa9f5056a36_c165045a-5056-a36a-0903a42581133e39.png', // Replace with the path to your image
    link: 'https://www.altbarroc.com/', // Replace with the actual link to Birria-Landia
  },
  {
    title: 'AMORE ITALIAN RESTAURANT & WINE BAR BY WEGMANS',
    type: 'At Amore Restaurant & Wine Bar',
    imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/rochester/Salmon-Amore-Rest-ac1a52305056a36_ac1a53a5-5056-a36a-094d4d56f0399d7e.jpg', // Replace with the path to your image
    link: 'https://wegmansamore.com/', // Replace with the actual link to Birria-Landia
  },
  {
    title: 'ARROWHEAD GOLF COURSE & MARINA',
    type: 'golf course',
    imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/rochester/ArrowheadScene_61656098-A29E-E91C-2D89AA3DCD245093-61655ec1074f28c_61656c35-ef72-23e8-3eca65f29d8d2b76.jpg', // Replace with the path to your image
    link: 'https://www.visitrochester.com/plugins/crm/count/?type=server&key=4_8062&val=5e48a1701650c96b7ad49eb0fd6a875ce0330cb6665c2158b38484e2a5956d8ff38e96800a6ca7d4dbe1b3ac228f8189ff954b2c23e11efe08ed', // Replace with the actual link to Birria-Landia
  },
  {
    title: 'BILL GRAY\'S',
    type: 'Cheeseburger',
    imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://Rochester.simpleviewcrm.com/images/listings/original_Bill-Gray.jpg', // Replace with the path to your image
    link: 'https://www.visitrochester.com/plugins/crm/count/?type=server&key=4_7229&val=5e48a1701650c96b7ad491b2f961875ce0330cb6665c2158b38484e2a5956d8fba9b96d81a74e5d0d3f9beb922818f92b497406f62f3', // Replace with the actual link to Birria-Landia
  },
  {
    title: 'BISTRO 252',
    type: 'American foods',
    imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/rochester/MW041317_-2587_small_2FEC149D-BE5B-4C90-9909C0E88C696F4C_ae314589-1293-4cfe-98132cdfd49d0ad3.jpg', // Replace with the path to your image
    link: 'https://www.visitrochester.com/plugins/crm/count/?type=server&key=4_7469&val=5e48a1701650c96b7ad491b4fd61875ce0330cb6665c2158b38484e2a5956d8fba9b96d81a74e5c0d5f6babb23949393b490407722e216a558f53b02d28abeb967', // Replace with the actual link to Birria-Landia
  },
  {
    title: 'BITTER HONEY',
    type: 'Mexican fare',
    imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/rochester/bitter-honey-logo-9ca5b6175056a36_9ca5b707-5056-a36a-0925fc6f5b4aa5c4.jpg', // Replace with the path to your image
    link: 'https://www.visitrochester.com/plugins/crm/count/?type=server&key=4_6949&val=5e48a1701650c96b7ad490b9ff61875ce0330cb6665c2158b38484e2a5956d8fba9b96d81a74e5d0d3e1a6bb2288998fff8d5d6d23a010be47b223', // Replace with the actual link to Birria-Landia
  },
  {
    title: '20 DEEP WINERY',
    type: 'winery',
    imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/rochester/sun_set_20_deep_winery_FF6437E5-831B-4430-B0BE290F4C085A80_2871d9f8-a1d2-4ea1-812a4495c7b6a157.jpg', // Replace with the path to your image
    link: 'https://www.visitrochester.com/plugins/crm/count/?type=server&key=4_7513&val=5e48a1701650c96b7ad491b5fa6b875ce0330cb6665c2158b38484e2a5956d8ff38e96801a74bc9c88a5b6bb3590d882f59900203d', // Replace with the actual link to Birria-Landia
  },
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src="https://d3qvqlc701gzhm.cloudfront.net/gallery/980410cd637c92b987302995866f4d555b4cd8b8e8947c8ce619b910b959b973.jpg" alt="Decorative Header" className="header-image"/>
        <h1 className="app-title">Discover ROCHESTER</h1>
      </header>
      <div className="event-cards-container">
        {eventData.map(event => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </div>
  );
}

export default App;

