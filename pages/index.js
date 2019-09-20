import Header from '../components/Header'
import Link from 'next/link'
import '../styles/styles.sass'

import fetch from 'isomorphic-unfetch';

const StoryTeller = props => (
  <div className='tile is-parent' key={props.login.uuid}>
    <div className="is-child box has-text-centered">
      <figure className='image is-inline-block'>
        <img src={props.picture.large} alt="" style={{ borderRadius: '50%' }}/>
      </figure>
      <p className='is-size-6'>Lorem ipsum dolor sit amet, consectetur.</p>
      <p className='is-size-7 has-text-right'>{props.name.first}</p>
    </div>
  </div>
)

const ClassDetail = props => (
  <div className="tile is-parent" key={props.id}>
    <div className="box has-text-centered">
      <figure className="image is-inline-block">
        <img src={props.picture} alt=""/>
      </figure>
      <p className="is-size-6">{props.name}</p>
      <p className="is-size-7">{props.description}</p>
    </div>
  </div>
)

const Index = props => (
  <div>
    <Header />
    <div className="section">
      <div className="columns">
        <div className="column has-text-centered is-one-third">
          <h1 className="title">Entrená donde sea y con quien quieras.</h1>
          <div className='has-text-left'>
            <p className='is-size-5'><img src='/static/bullet_point.png' alt="" width="24px"/> Con tu amigo, profe o compañero.</p>
            <p className='is-size-5'><img src='/static/bullet_point.png' alt="" width="24px"/> Enterate de clases <span className='has-text-weight-bold'>GRATIS</span>!</p>
          </div>
        </div>
        <div className="column">
          <div className="tile is-ancestor">
            {props.storyTellers.map(StoryTeller)}
          </div>
        </div>
      </div>
    </div>

    <div className="section">
      <h1 className="title">Estas son las clases de hoy</h1>
      <p className="is-size-6" style={{ marginBottom: '16px' }}>Todos los dias se suman nuevas clases. ¿Te interesa alguna? <Link href="#"><a>Registrate</a></Link>!</p>

      <div className="tile is-ancestor" style={{ width: '50%' }}>
        {props.classes.map(ClassDetail)}
      </div>
    </div>

    <div className="section">
      <h1 className="title">Nuevos gimnasios en Cumpa</h1>
      <p className="is-size-6" style={{ marginBottom: '16px' }}>¿Sos un gimnasio? <Link href="#"><a>Registrate</a></Link>!</p>
      <div className="tile is-ancestor" style={{ width: '50%' }}>
        {props.classes.map(ClassDetail)}
      </div>
    </div>

    <style jsx global>{`
      html {
        background: rgba(255, 187, 0, 0.3);


      }

      body {
        font: 16px menlo;
        color: #000;
      }
    `}</style>
  </div>
)

Index.getInitialProps = async () => {

  const response = await fetch('https://randomuser.me/api?results=4')
  const data = await response.json()

  const classes = [
    {
      id: 1,
      picture: '/static/aerobics.jpg',
      name: 'Aerobics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      id: 2,
      picture: '/static/aerobics.jpg',
      name: 'Aerobics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      id: 3,
      picture: '/static/aerobics.jpg',
      name: 'Aerobics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
  ]

  return {
    storyTellers: data.results,
    classes
  }
}

export default Index
