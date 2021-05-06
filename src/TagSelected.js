import React, {useContext} from 'react';
import { tagContext } from './App';

function ItemSelected({ tag }) {
     const { tagState, tagDispatch } = useContext(tagContext);

     function deleteTag(event) {
          tagDispatch({ type: 'deleteTag', payload: event.target.dataset.value })
     }

     return (
          <div className="control">
               <div className="tags has-addons">
                    <span className="tag Tag__name__selected">{ tag }</span>
                    <a className="tag Tag__delete" data-value={ tag } onClick={deleteTag}>X</a>
               </div>
          </div>
     );
}

export default ItemSelected;