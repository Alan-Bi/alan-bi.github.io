import React from 'react';
import Projects from '../../data/Projects';
import Item from '../view/Item';
import { HeaderText, NormalText } from '../view/Text';
import { HeaderContainer, CenteredContainer } from '../view/Container';
import { withTheme } from 'styled-components'


function Home(props) {
  return (
    <div className="home-page">

      <HeaderContainer>
        <HeaderText color={props.theme.colors.current}>Hi, I'm Alan.</HeaderText>
        <NormalText>I'm a student at Duke University studying computer science and <u>&lt;undecided&gt;</u>.</NormalText>
      </HeaderContainer>

      <CenteredContainer>
        {Object.keys(Projects).map((project) => <Item key={project} project={project} />)}
      </CenteredContainer>
    </div>
  );
}

export default withTheme(Home);
