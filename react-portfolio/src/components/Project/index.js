import React from 'react'
import { Icon, Card, Image } from 'semantic-ui-react'

const Project = () => (
  <Card.Group itemsPerRow={3}>
    
    <Card color='yellow'>
    <Image link src='./images/covid-tracker.jpg' wrapped ui={false} />
    <b color='blue' style={{ marginBottom: '1em' }}>(co-tracker)</b>
    <Card.Content extra>
    <a href='https://github.com/matthanson333/coTracker' target='_newtab'><Icon link name='github' /></a>
    <a href='https://matthanson333.github.io/coTracker/' target='_newtab'><Icon link name='external alternate' /></a>
    </Card.Content>  
    </Card>

    <Card color='yellow'>
    <Image link src='./images/symptom-tracker.png' wrapped ui={false} />
    <b color='blue' style={{ marginBottom: '1em' }}>(myraid)</b>
    <Card.Content extra>
    <a href='https://github.com/thadkingcole/symptom_tracker' target='_newtab'><Icon link name='github' /></a>
    <a href='https://myriad-symptom-tracker.herokuapp.com/' target='_newtab'><Icon link name='external alternate' /></a>
    </Card.Content>  
    </Card>

    <Card color='yellow'>
    <Image link src='./images/santa-registry.png' wrapped ui={false} />
    <b color='blue' style={{ marginBottom: '1em' }}>(eloof)</b>
    <Card.Content extra>
    <a href='https://github.com/JoseBurgos1993/Eloof' target='_newtab'><Icon link name='github' /></a>
    <a href='https://intense-ridge-86974.herokuapp.com/' target='_newtab'><Icon link name='external alternate' /></a>
    </Card.Content>  
    </Card>
    
    
    <Card color='yellow'>
    <Image link src='./images/day-planner.jpg' wrapped ui={false} />
    <b color='blue' style={{ marginBottom: '1em' }}> (day planner) </b>
    <Card.Content extra>
    <a href='https://github.com/summerhealey/day-planner' target='_newtab'><Icon link name='github' /></a>
    <a href='https://summerhealey.github.io/day-planner/' target='_newtab'><Icon link name='external alternate' /></a>
    </Card.Content>  
    </Card>

    <Card color='yellow'>
    <Image link src='./images/burger.png' wrapped ui={false} />
    <b color='blue' style={{ marginBottom: '1em' }}> (burgers) </b>
    <Card.Content extra>
    <a href='https://github.com/summerhealey/burger/' target='_newtab'><Icon link name='github' /></a>
    <a href='https://vast-garden-81025.herokuapp.com/' target='_newtab'><Icon link name='external alternate' /></a>
    </Card.Content>  
    </Card>

    <Card color='yellow'>
    <Image link src='./images/employee-directory.png' wrapped ui={false} />
    <b color='blue' style={{ marginBottom: '1em' }}>(employee directory)</b>
    <Card.Content extra>
    <a href='https://github.com/summerhealey/employeedirectory' target='_newtab'><Icon link name='github' /></a>
    <a href='https://summerhealey.github.io/employeedirectory/' target='_newtab'><Icon link name='external alternate' /></a>
    </Card.Content>  
    </Card>
  </Card.Group>
)

export default Project