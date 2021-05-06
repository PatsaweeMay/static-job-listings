import React from 'react';

import Tag from './Tag';

function Box({ company }) {

     const tagList = [company.role, company.level, ...company.languages];

     const tagElements = tagList.map((tag, index) => {
          return <Tag key={index} tag={tag} />;
     });

     return (
          <div className="box Box__company">
               <div className="columns is-multiline is-mobile mb-0">
                    <div className="column is-12-mobile is-1-tablet is-flex is-align-items-center">
                         <img src={company.logo} width={100} align="left" alt="company logo"/>
                    </div>
                    <div className="column is-12-mobile is-5-tablet">
                         <p className="mb-2">
                              <span className="Text__company">{company.company}</span>
                              {company.new ? <span className="tag Badge__new is-rounded">NEW!</span> : ''}
                              {company.featured ? <span className="tag Badge__featured is-rounded">FEATURED</span> : ''}
                         </p>
                         <p className="mb-2"><a className="Text__position">{company.position}</a></p>
                         <p className="Text__detail">{company.postedAt} - {company.contract} - {company.location}</p>
                    </div>
                    <div className="Box__center"></div>
                    <div className="column is-12-mobile is-6-tablet is-flex-tablet is-flex-direction-row is-flex-wrap-wrap is-align-items-center is-justify-content-flex-end">
                         {tagElements}
                    </div>
               </div>
               {company.featured ? <div className="Box__line"></div> : ''}
          </div>
     );
}

export default Box;