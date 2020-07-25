import React from 'react';
import styled from 'styled-components';
import { BaseColors } from 'data/Color';

const Root = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: inline-block;

  @media screen and (-webkit-min-device-pixel-ratio:0) {
    display: none;

    @media screen and (max-width: 50em) {
      margin: 2em;
    }
  }
`;

const Title = styled.p`
  font-size: 0.8em;
  text-align: center;
  margin: 0px;
  font-weight: bold;
`;

const NotWelcomeText = styled.p`
  font-size: 0.5em;
  text-align: start;
  padding-bottom: 0.2em;
  margin: 0px;
  white-space: pre-line;
  color: ${BaseColors.purpleblack};
  display: inline-block;
`;

const Link = styled.a`
  font-weight: bold;
  text-decoration: none;
  margin: 0px;
  text-align: start;
`;

export function NotWelcome() {
  return (
    <Root>
      <Title>Chrome以外ブラウザでお越しの方へのお知らせ</Title>
      <NotWelcomeText>
        この度はわたくしのポートフォリオサイトを訪れていただき、本当にありがとうございます！ <br />
        来ていただいて早速申し訳ないのですが、ご使用のブラウザがChrome以外ですとデザインが崩れてしまうことがあるらしく、 <br />
        それを防ぐために一度お引き取り頂き、再度Google Chromeと一緒に訪れていただきたいのです。 <br />
        ご迷惑をお掛けしています…。対応が完了致しましたら、その時はあなたのお気に入りのブラウザをご使用の下、 <br />
        またここを訪れて頂ければと思います！ <br />
        また、もしもChromeを使用して訪れてくださったにも関わらず表示に不具合があった際には、<br />
        <Link href="https://github.com/ko50/ko50.github.io">こちら</Link>
        にGitHubのリポジトリがありますので、フィードバックして頂ければ幸いです！
      </NotWelcomeText>
    </Root>
  );
}