import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { TransitionContext } from 'App'
import { IntroductionSection } from 'components/introduction_section/IntroductionSection'
import { SkillsUnit } from 'components/introduction_section/skills/components/SkillsUnit'
import { SkillData, SkillCategory } from 'data/type/SkillData'
import { SkillValue } from 'data/value/SkillValue'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 40px;
  justify-content: space-around;
`;

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
          <Container>
            <SkillsUnit category={SkillCategory.language} skills={languagesSkills} />
            <SkillsUnit category={SkillCategory.framework} skills={frameworksSkills} />
            <SkillsUnit category={SkillCategory.tool} skills={toolsSkills} />
          </Container>
        )} />
      )}
    </TransitionContext.Consumer>
  );
};
