// import React from 'react'
// import{google, slack, atlassian, dropbox, shopify} from './import'
// import './brand.css'
// const Brand = () => {
//   return (
//     <div className='gpt3__brand section__padding'>
//       <div>
//         <img src={google} alt="google" />
//       </div>

//       <div>
//         <img src={slack} alt="slack" />
//       </div>

//       <div>
//         <img src={atlassian} alt="atlassian" />
//       </div>

//       <div>
//         <img src={dropbox} alt="dropbox" />
//       </div>

//       <div>
//         <img src={shopify} alt="shopify" />
//       </div>
//     </div>
//   )
// }

// export default Brand






import React from 'react';
import { google, slack, dropbox, shopify } from './import.js';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    {/* <div>
      <img src={atlassian} />
    </div> */}
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;