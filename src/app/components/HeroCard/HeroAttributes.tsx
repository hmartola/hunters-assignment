import * as React from 'react';
import { AttributeHeader, AttributeSpan, AttributeSpanHP } from './styling';

// Component for convenience, collects all the attributes to one place

const HeroAttributes = ({ attributes }) => (
    
      <>
        <AttributeHeader>HP <AttributeSpanHP>{attributes.healthpoints}</AttributeSpanHP></AttributeHeader>
        <AttributeHeader>Strength <AttributeSpan>{attributes.strength}</AttributeSpan></AttributeHeader>
        <AttributeHeader>Intelligence <AttributeSpan>{attributes.intelligence}</AttributeSpan></AttributeHeader>
        <AttributeHeader>Stamina <AttributeSpan>{attributes.stamina}</AttributeSpan></AttributeHeader>
        <AttributeHeader>Mana <AttributeSpan>{attributes.mana}</AttributeSpan></AttributeHeader>
        <AttributeHeader>Agility <AttributeSpan>{attributes.agility}</AttributeSpan></AttributeHeader>
        <AttributeHeader>Speed <AttributeSpan>{attributes.speed}</AttributeSpan></AttributeHeader>
    </>
    );

export default HeroAttributes;