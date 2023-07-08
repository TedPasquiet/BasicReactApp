import React from 'react'
import Card from '../components/Card'
import styled from 'styled-components'

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`
 
const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: "test",
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: '"test"',
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: "test",
    },
]

export default function Freelances() {
  return (
    <div>
        <div>
            <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </div>
    </div>
  )
}
