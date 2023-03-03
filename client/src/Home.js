import TopNav from './Navbar'
import './Home.css'
import Container from 'react-bootstrap/esm/Container'
import SearchBar from './SearchBar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home() {
    return (
        <div className="bg" >
            <div>
            <TopNav/>
            <Container className='px-5 mx-7' style={{height:'50px', width:'70%', alignSelf: 'center', marginTop: '50vh'}}>
            <Row style = {{alignSelf:'center'}}>
                    <Col alignSelf='center'>
                        <SearchBar/>
                    </Col>
                    <Col alignSelf='center'>
                        <SearchBar/>
                    </Col>
                </Row>
            </Container>  
            </div>   
        </div>

    )

}

export default Home;