import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Ask.css"

function Ask() {
  const [question, setQuestion] = useState("")
  const [finalAnswer, setFinalAnswer] = useState("")
  const [lists, setLists] = useState([])
  const [loading, setloading] = useState(false)
  const chatbot = useRef(null)
  const [alert, setAlert] = useState(false)


  useEffect(
    () => {
      const wait = setTimeout(() => setAlert(false), 3000)
      return () => clearInterval(wait)
    }, [alert])

    async function handleAsk() {
      setFinalAnswer("");
      if (question && !loading) {
        setloading(true);
        setLists([
          ...lists,
          {
            question,
            answer: "loading...",
            asked: true,
            error: false,
          },
        ]);
        const questionText = question;
        setQuestion("");
        try {
          const response = await fetch(
            `https://chatgpt.apinepdev.workers.dev/?question=${questionText}`,
            {
              method: 'GET',
              mode: 'cors',
            }
          );
          if (!response.ok) {
            throw new Error('Request failed');
          }
          const data = await response.json();
          const answer = data.answer;
          console.log(answer);
          setFinalAnswer(answer);
    
          setLists((prevLists) =>
            prevLists.map((item) => {
              if (item.asked) {
                return { ...item, asked: false, answer };
              }
              return item;
            })
          );
          setloading(false);
        } catch (error) {
          console.log(error);
          setLists((prevLists) =>
            prevLists.map((item) => {
              if (item.asked) {
                return {
                  ...item,
                  asked: false,
                  answer: "Something went wrong!",
                  error: true,
                };
              }
              return item;
            })
          );
          setloading(false);
        }
      }
    }
  useEffect(() => {
    if (chatbot.current) {
      chatbot.current.scrollTop = chatbot.current.scrollHeight;
    }
  }, [lists]);

  const copy = (answer) => {
    setAlert(true)
    navigator.clipboard.writeText(answer)
    console.log(answer)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAsk();
    }
  }

  return (
    <section className="askPage">
        <Navbar />
      <div className='container'>
        {alert && <p className='alert'>copied to clipboard</p>}
        <div className='QA-container' ref={chatbot}>
          <ul className='results'>
            <li className='chat answer'>
              <span>AI</span>
              <p>Hey <br></br>How can I help you?</p>
            </li>

            {lists.length > 0 &&
              lists.map((list, index) => {
                return (
                  <>
                    <li className='chat question' key={index}>
                      <p>{list.question}</p>
                    </li>
                    <li className='chat answer'>
                      <span>AI</span>
                      <p className={list.error ? "error" : ""} >{list.answer}</p>
                      {!loading && !list.error && <button className='copy' id={list.answer} onClick={() => copy(list.answer)}>Copy</button>}
                    </li>
                  </>
                )
              })
            }
          </ul>
        </div>
        <div className='input-container'>
          <textarea onKeyDown={handleKeyDown} spellCheck="false" placeholder='Ask me anything' value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
          <button onClick={handleAsk} >Ask</button>
        </div>
      </div>
    </section>
  )
}
export default Ask