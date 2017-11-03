import { QueryRenderer, graphql } from 'react-relay'
import { environment } from '../store/index'
import { Flashcards } from '../components/flashcards'

const allCards = graphql`
  query allCards {
    id
    question
    answer
  }
`

export default () => (
  <div>
    <QueryRenderer
      environment={environment}
      query={allCards}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          return <Flashcards viewer={props.viewer}/>
        }
        return <div>Loading</div>
      }}
    />
    <style jsx global>{`
      body {
        font-family: 'Montserrat', sans-serif;
        text-align: center;
      }
      button {
        font-family: 'Montserrat', sans-serif;
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
      @media screen and (max-width: 992px) {
        button {
          width: 100%;
        }
      }
    `}</style>
  </div>
)
