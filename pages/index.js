import { Flashcards } from '../components/flashcards'

export default () => (
  <div>
    <Flashcards/>
    <style jsx>{`
      body {
        font-family: 'Titillium Web', sans-serif;
        text-align: center;
      }
      button {
        background-color: #29B6F6;
        border: 0;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        outline-width: 0;
        padding: 1rem;
        transition: 0.5s;
      }
      button:hover {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.2);
      }
    `}</style>
  </div>
)
