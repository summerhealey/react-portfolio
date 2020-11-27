import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Project from '../Project'
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container>
    {
    <Header as='h2'>
        <p><Image src='./images/landing-image.png'/></p>
    </Header>
    }
    <Header
      as='h2'
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '2em',
      }}
    > 
    </Header>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item href='home' active>
                  Summer Leigh Healey
                </Menu.Item>
                <Menu.Item href='#aboutme'>About Me</Menu.Item>
                <Menu.Item href='#portfolio'>Portfolio</Menu.Item>
                <Menu.Item href='#contact'>Contact</Menu.Item>
                <Menu.Item position='right'>
                  <a href='http://www.linkedin.com/in/summer-leigh-healey' target='_newtab'><Icon link color='light-blue' name='linkedin' /></a>
                  <a href='http://www.https://github.com/summerhealey' target='_newtab'><Icon link color='yellow' style={{ marginLeft: '0.5em' }} name='github' /></a>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading/>
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'

            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item color='yellow' as='a' active>
              Summer Leigh Healey
            </Menu.Item>
            <Menu.Item color='blue' href='#aboutme'>About Me</Menu.Item>
            <Menu.Item color='blue' href='#portfolio'>Portfolio</Menu.Item>
            <Menu.Item color='blue' href='#contact'>Contact</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Homepage = () => (
  <ResponsiveContainer>
      <Segment id='aboutme' style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em', color: 'lightblue' }}>
            (about me)
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Burgeoning web developer and rehabilitated market researcher who is looking to help small businesses gain the competitive edge in their marketing and operations through responsive web design. 
            </p>
            <Grid.Row >
          <Grid.Column textAlign='center'>
            <a href='https://drive.google.com/file/d/1NknTUwlWqS8oHQxpP4hdDZaAic4z18-g/view?usp=sharing' target='_newtab'><Icon link size='large' color='grey' name='file alternate outline' style={{ marginTop: '1em' }} /></a>
            <p style={{ marginTop: '.5em' }}><i>Resume</i></p>
          </Grid.Column>
        </Grid.Row>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image size='medium' important src='./images/portrait.jpg' bordered />
          </Grid.Column>
        </Grid.Row>
        
      </Grid>
    </Segment>
    <Segment id='portfolio' style={{ padding: '2em 0em' }} vertical>
      <Container>
        <Divider as='h4'className='header'horizontal style={{ margin: '3em 0em', color: 'lightblue', fontSize:'2em' }}>
          <h2>(portfolio)</h2>
        </Divider>
        <Grid.Row verticalAlign='middle' columns={4} centered>
          <Grid.Column>
              <Project />
          </Grid.Column>
        </Grid.Row>
      </Container>
    </Segment>

    <Segment id='contact' style={{ padding: '2em 0em' }} vertical>
      <Container>
        <Divider as='h4'className='header'horizontal style={{ margin: '1em 0em', color: 'lightblue', fontSize:'2em' }}>
          <h2>(contact me)</h2>
        </Divider>
        <Grid.Row centered>
          <Grid.Column>
              <p style={{ margin: '2em 0em' }}><i>Interested?</i></p>
          </Grid.Column>
        </Grid.Row>
        </Container>
        <Container>
        <Grid.Row columns={4}>
           <a href='mailto:summerleigh.healey@gmail.com' target='_newtab'><Icon link color='lightblue' size='massive' name='mail' /></a>
           <a href='http://www.linkedin.com/in/summer-leigh-healey' target='_newtab'><Icon link color='yellow' size='massive' name='linkedin' /></a>  
           <a href='http://www.github.com/summerhealey' target='_newtab'><Icon link color='lightblue' size='massive' name='github' /></a>
        </Grid.Row>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '2em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column>
              <Header inverted as='h4' content='Summer Leigh Healey© 2020' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default Homepage