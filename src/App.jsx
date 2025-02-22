import { useState } from 'react';
import CoreConcept from './components/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';

function App() {

  const [selectedTopic, setSelectedTopic] = useState('Please click a button');

  function handleClick(selectedButton) {
    // console.log(`Switch to tab: ${selectedButton}`);
    setSelectedTopic(selectedButton);

  }

  return (
    <div>
     <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
          <CoreConcept 
            {...CORE_CONCEPTS[0]}
             />
          <CoreConcept 
            {...CORE_CONCEPTS[1]}
             />
          
          <CoreConcept 
            {...CORE_CONCEPTS[2]}
             />
          
          <CoreConcept 
            {...CORE_CONCEPTS[3]}
             />
             </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton onSelect={() => handleClick('jSX')}>JSX</TabButton> 
            <TabButton onSelect={() => handleClick('props')}>Props</TabButton> 
            <TabButton onSelect={() => handleClick('state')}>State</TabButton>  
          </menu> 
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
