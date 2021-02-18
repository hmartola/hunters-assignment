import * as React from "react"
import { AttributeHeader, AttributeSpan } from "./styling";

const HeroAttributes = ({ attributes }) => {
    return (
        <>
        <AttributeHeader>Strength <AttributeSpan>{attributes.strength}</AttributeSpan></AttributeHeader>
        <AttributeHeader>Intelligence <AttributeSpan>{attributes.intelligence}</AttributeSpan></AttributeHeader>
        <AttributeHeader>Stamina <AttributeSpan>{attributes.stamina}</AttributeSpan></AttributeHeader>
        <AttributeHeader>Mana <AttributeSpan>{attributes.mana}</AttributeSpan></AttributeHeader>
        <AttributeHeader>Agility <AttributeSpan>{attributes.agility}</AttributeSpan></AttributeHeader>
        <AttributeHeader>Speed <AttributeSpan>{attributes.speed}</AttributeSpan></AttributeHeader>
        
    </>
    )
}

export default HeroAttributes

/**<HeroStats>
          <HeroTable>
          <table>
              <thead>
                <tr style={{ paddingLeft: 15, paddingRight: 15 }}>
                  <th>Strength</th>
                  <th>Intelligence</th>
                  <th>Stamina</th>
                  <th>HP</th>
                  <th>Mana</th>
                  <th>Agility</th>
                  <th>Speed</th>
                  <th>Resistance</th>
                  <th>Weakness</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ paddingLeft: 15, paddingRight: 15 }}>
                  <td>{attributes.strength}</td>
                  <td>{attributes.intelligence}</td>
                  <td>{attributes.stamina}</td>
                  <td>{attributes.healthpoints}</td>
                  <td>{attributes.mana}</td>
                  <td>{attributes.agility}</td>
                  <td>{attributes.speed}</td>
                  <td>{attributes.resistance}</td>
                  <td>{attributes.weakness}</td>
                </tr>
              </tbody>
            </table>
          </HeroTable>
        </HeroStats> */