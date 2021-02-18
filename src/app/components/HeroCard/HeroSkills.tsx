import * as React from "react"
import { HeroTable, HeroTableHeader, HeroTableData } from "./styling";

const HeroSkills = ({ skills }) => {

    return (
        <div style={{ overflowX: 'auto' }}>
          <HeroTable>
              <thead>
                <tr>
                  <HeroTableHeader>Power</HeroTableHeader>
                  <HeroTableHeader>Type</HeroTableHeader>
                  <HeroTableHeader>Damage</HeroTableHeader>
                </tr>
              </thead>
              {skills.map(skill => 
              <tbody key={skill.id}>
                <tr>
                  <HeroTableData>{skill.name}</HeroTableData>
                  <HeroTableData>{skill.element}</HeroTableData>
                  <HeroTableData>{skill.damage}</HeroTableData>
                </tr>
              </tbody>
              )}
          </HeroTable>
        </div>
    )
}

export default HeroSkills
