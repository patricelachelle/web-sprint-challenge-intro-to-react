import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background: rebeccapurple;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  height: 200px;
  border: 20px solid green;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

function Character(info) {
  const charInfo = info.props;

  return (
    <Wrapper>
      {charInfo.map(data => {
        return (
         <Wrapper>
         <Card>  
         Name: {data.name}<br />D.O.B: {data.birth_year}<br />Films: {data.films.join(', ')}
         </Card>
         </Wrapper>
          );
        })}
    </Wrapper>         
  );
}

export default Character;
