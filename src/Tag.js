import { useContext } from 'react';
import { tagContext } from './App';

function Tag({ tag }) {
     const { tagState, tagDispatch } = useContext(tagContext);

     function addTag(event) {
          tagDispatch({ type: 'addTag', payload: event.target.textContent })
     }

     return (
          <div className="tag Tag__name mx-2 my-2" onClick={addTag}>
               {tag}
          </div>
     );
}

export default Tag;