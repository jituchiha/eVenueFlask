import TopNav from './Navbar'
import './Home.css'
import Container from 'react-bootstrap/esm/Container'
import SearchBar from './SearchBar'
import InfoCard from './InfoCard'
import Car from './Carousel'

function Home(props) {
    const loggedin = props.loggedin;
    console.log(loggedin)

    const activity = [
        {'name': 'Zumba',
        'venue':'SRSC Studio 1',
        'date': '02/27/2023 7:00 PM',
        'img': 'activity1.jpg'
        },
        {
            'name': 'Yoga',
            'venue': 'SRSC Studio 3',
            'date': '02/27/2023 9:00 AM',
            'img': 'activity2.jpg'
        },
        {
            'name': 'Strength',
            'venue': 'Gym',
            'date': '03/01/2023 7:00 PM',
            'img': 'activity3.jpg'
        },
        {
            'name': 'Cardio',
            'venue': 'Gym',
            'date': '03/01/2023 5:00 PM',
            'img': 'activity4.jpeg'
        },
        {
            'name': 'Cycle',
            'venue': 'SRSC Hall 2',
            'date': '03/02/2023 4:00 PM',
            'img': 'activity5.jpg'
        }]

    return (
        <div className="bg" >
            <div style={{ alignSelf: 'center', alignContent:'center'}}>
            <TopNav/>
            <Container style={{ height: '50px', marginTop: '45vh', background: 'transparent', alignItems: 'center'}}>
                <SearchBar/>
            </Container>
            <p style={{padding:'120px', marginBottom:'-100px'}}>Most Popular Activities!</p>
            <Container style={{width: '100%'}}>
                <InfoCard activity={activity}/>
            </Container>  
            <Car />      
            </div>   
        </div>

    )

}

export default Home;