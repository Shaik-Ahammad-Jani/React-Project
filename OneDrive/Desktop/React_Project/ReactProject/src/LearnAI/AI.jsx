
import {  faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { apikey, apiurl } from '../ServiceLayer/ApiLink';
// import Header from '../Components/Header';
import Nav from '../Components/Nav';
import Sidebar from '../Components/Sidebar';
const AI = () => {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState([]);
  const [trigger, setTrigger] = React.useState(false);

  useEffect(() => {
    if (trigger) {
      const api = async () => {
        try {
          const responce = await fetch(`${apiurl}?key=${apikey}`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              contents:[
                {
                    parts:[
                        {text:input}
                    ]
                }
            ]
              
            })
          });
          const data = await responce.json();
          setOutput([...output, <br key={output.length} />,  `You : ${input}`, <br key={output.length + 1} />, `Me : ${data.candidates?.[0]?.content?.parts[0]?.text}`,<div key={output.legnth} style={{borderBottom:'1px solid gray'}} />, <br key={output.length + 2} />]);
        } catch (e) {
          console.log(e);
        }
      };
      api();
      setTrigger(false);
    }
  }, [trigger, input, output,]);

  const handlePress = (e) => {
    if (e.key === 'Enter' && input !== '') {
      setTrigger(true);
      
    }
    if(e.key === 'Enter' && input === ''){
      alert('Please enter something')
      setInput('')

    }
  };

  return (
    <>
    {/* <Header/> */}
    <Nav />
    <Sidebar />
      <div style={{ padding: '10px', border: '1px solid gray', margin: '10px',overflowY: 'scroll', height: '500px', width: '60%', marginTop: '20px', marginLeft: '150px' }}>
        {output}
      </div>
      <input type="text" placeholder="Search..." height={100} onKeyPress={handlePress} onChange={(e) => setInput(e.target.value)} 
      style={{
        padding: '10px',
        width: '60%',
        border: '1px solid black',
        margin: '10px',
        borderRadius: '5px',
        height: '40px',
        // marginTop: '500px',
        marginLeft: '150px',
        position: 'relative',

      }}/>
      <FontAwesomeIcon icon={ faPaperPlane}  style={{
        position: 'absolute',
        cursor: 'pointer',
        marginTop: '20px',
        marginLeft:'-40px',
        color: 'gray'
      }}  />
    </>
  )
}

export default AI
