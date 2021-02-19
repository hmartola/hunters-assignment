// It is your job to implement this. More info in README

import * as React from 'react';

import { 
  HeroContainer,
  Container, 
  HeroImage, 
  Overlay, 
  Description,
  } 
from './styling';

import HeroSkills from './HeroSkills';
import HeroAttributes from './HeroAttributes';
import { HeadingTwo, Paragraph } from '../../components/Typography';

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

export const HeroCard: React.FC<IHeroCardProps> = ({ name, imgUrl, backStory, description, skills, attributes }) => {
  
  const [heroStory, setHeroStory] = React.useState(false);   // If true displays backstory

  if (heroStory) {    
      return (
        <Container>
          <HeroContainer>
          
          <HeadingTwo style={{ textAlign: 'center' }}>{name}</HeadingTwo>
        
          <Overlay>
            <HeroImage src={imgUrl} alt={name} onClick={() => setHeroStory(false)}></HeroImage>
          </Overlay>
          
          <HeadingTwo style={{ textAlign: 'center' }}>
            <span style={{ borderBottomStyle: 'double' }}>The Tale of {name}</span>
          </HeadingTwo>
          
          <Paragraph>{backStory}</Paragraph>
          
          </HeroContainer>
        </Container>
      );
  };

  return (
    <Container>
      <HeroContainer>
        
        <HeadingTwo style={{ textAlign: 'center' }}>{name}</HeadingTwo>
        
        <Overlay>
          <HeroImage src={imgUrl} alt={name} onClick={() => setHeroStory(true)}></HeroImage>
        </Overlay>
       
        <Description>{description}</Description>
        <HeroSkills skills={skills}></HeroSkills>
        
        <HeadingTwo style={{ textAlign: 'center' }}></HeadingTwo>
        <HeroAttributes attributes={attributes}></HeroAttributes>
      
      </HeroContainer> 
    </Container> 
  );
};
