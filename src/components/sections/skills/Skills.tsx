import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { TransitionContext } from 'App'
import { IntroductionSection } from 'components/sections/IntroductionSection'
import { SkillsUnit } from 'components/sections/skills/components/SkillsUnit'
import { SkillData, SkillCategory } from 'data/type/SkillData'
import { SkillValue } from 'data/value/SkillValue'

const Container = styled.div<{ visible: Boolean }>`
  display: flex;
  flex-direction: row;
  padding: 30px 40px;
  justify-content: space-around;

  transition: 400ms ease-in;
  transition-delay: ${(props) => props.visible ? "400" : "800"}ms;
  opacity: ${(props) => props.visible ? "1" : "0"};
  transform: translateY(${(props) => props.visible ? "0px" : "6px"});
`;
/*display: inline-block;
  box-sizing: border-box;
  width: 100%;*/

export const Skills = () => {
  const languagesSkills: SkillData[] =
    SkillValue.filter((data) => data.skillType === SkillCategory.language);
  const frameworksSkills: SkillData[] =
    SkillValue.filter((data) => data.skillType === SkillCategory.framework);
  const toolsSkills: SkillData[] =
    SkillValue.filter((data) => data.skillType === SkillCategory.tool);

  return (
    <TransitionContext.Consumer>
      {currentViewIndex => (
        <IntroductionSection index={1} title="Skills" subTitle="できること" content={(
          <Container visible={currentViewIndex === 1}>
            <SkillsUnit category={SkillCategory.language} skills={languagesSkills} />
            <SkillsUnit category={SkillCategory.framework} skills={frameworksSkills} />
            <SkillsUnit category={SkillCategory.tool} skills={toolsSkills} />
          </Container>
        )} />
      )}
    </TransitionContext.Consumer>
  );
};
