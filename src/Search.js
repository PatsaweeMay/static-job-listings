import React, {useContext} from 'react';
import { tagContext } from './App';
import TagSelected from './TagSelected';

function Search(){
     const { tagState, tagDispatch } = useContext(tagContext);

     function clearTag(event) {
          tagDispatch({ type: 'clearTag', payload: '' })
     }

     const tagElements = tagState.map((tag, index) => {
          return <TagSelected key={index} tag={tag} />
     });

     return (
          <div className="box Box__search">
               <div className="columns is-mobile is-gapless mt-2">
                    <div className="column is-9-mobile is-11-tablet field is-grouped is-grouped-multiline">
                         { tagElements }
                    </div>
                    <div className="column is-3-mobile is-1-tablet is-flex is-justify-content-center is-align-items-center">
                         <a className="Tag__clear" onClick={clearTag}>Clear</a>
                    </div>
               </div>
          </div>
     );
}

export default Search;