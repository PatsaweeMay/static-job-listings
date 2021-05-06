import React, { useReducer } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';

import Navbar from './Navbar';
import Box from './Box';
import companies from './companies';
import Search from './Search';

const tagContext = React.createContext();

function reducer(state, action) {
  if (action.type === 'addTag' && (state.findIndex(tag => tag === action.payload) === -1)) {
    return [...state, action.payload];
  }
  if (action.type === 'deleteTag') {
    return state.filter(tag => tag != action.payload);
  }
  if (action.type === 'clearTag') {
    return [];
  }
  return state;
}

function App() {
  const [tagState, tagDispatch] = useReducer(reducer, []);

  const companyElements = companies.filter((company) => {
    const tagSelected = tagState;
    const tagCompany = [company.role, company.level, ...company.languages];

    if (tagSelected.length) {
      if (tagSelected.every(tag => tagCompany.includes(tag))) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }).map((company) => {
    return <Box key={company.id} company={company} />;
  });


  return (
    <tagContext.Provider value={{ tagState, tagDispatch }}>
      <div>
        <Navbar />
        <div className="container is-max-widescreen pb-5 px-5">
          {tagState.length ? <Search /> : ''}
          {companyElements}
        </div>
      </div>
    </tagContext.Provider>
  );
}

export { tagContext };
export default App;
