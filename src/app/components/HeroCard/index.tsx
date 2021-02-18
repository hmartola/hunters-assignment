// It is your job to implement this. More info in README

import * as React from 'react'
//import styled from 'styled-components';

import { 
  HeroContainer,
  Container, 
  HeroImage, 
  PopupImage, 
  Overlay, 
  Background, 
  Popup, 
  Button,
  Description,
  } 
  from './styling'

  import HeroSkills from "./HeroSkills"
  import HeroAttributes from "./HeroAttributes"
  import { HeadingOne, HeadingTwo, Paragraph } from "../../components/Typography"

interface IHeroCardProps {
  name: string
  imgUrl: string
  description: string
  backStory: string
  skills: {
    id: number
    name: string
    damage: number
    element: string
  }
  attributes: {
    strength: number
    intelligence: number
    stamina: number
    healthpoints: number
    mana: number
    agility: number
    speed: number
    resistance: string
    weakness: string
  }
  // extend this
}

//#001147 background

export const HeroCard: React.FC<IHeroCardProps> = ({ name, imgUrl, backStory, description, skills, attributes }) => {
  const [popup, setPopup] = React.useState(false)

  if (popup) {    
      return (
        <Background onClick={() => setPopup(false)}>
        <Popup>
          <Button>X</Button>
          
          <HeadingTwo style={{ textAlign: 'center' }}><span style={{ borderBottomStyle: 'double' }}>The Tale of {name}</span></HeadingTwo>
          <Paragraph>{backStory}</Paragraph>
          <PopupImage src={imgUrl} alt={name}></PopupImage>
        </Popup>
        </Background>
      )
  }

  return (
    <Container>
      <HeroContainer onClick={() => setPopup(true)}>
        <HeadingTwo style={{ textAlign: 'center' }}>{name}</HeadingTwo>
        
        <Overlay>
          <HeroImage src={imgUrl} alt={name}></HeroImage>
        </Overlay>
       
        <Description>{description}</Description>
        
        
        <HeroSkills skills={skills}></HeroSkills>
        
        <HeadingTwo style={{ textAlign: 'center' }}></HeadingTwo>
        <HeroAttributes attributes={attributes}></HeroAttributes>
      </HeroContainer> 
    </Container> 
  )
}
