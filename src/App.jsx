import { useState } from 'react';
import CoreConcept from './components/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';

function App() {

  const [selectedTopic, setSelectedTopic] = useState('components');

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
            <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton> 
            <TabButton onSelect={() => handleClick('props')}>Props</TabButton> 
            <TabButton onSelect={() => handleClick('state')}>State</TabButton>  
          </menu> 
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
