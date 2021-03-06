import React, { useState } from 'react';
import domToImage from 'dom-to-image';
import { Ballot } from '../Ballot/Ballot';
import { generateRandomPartyBallot, PartyBallot } from '../../ballot';
import { share } from '../../share';
import { isIos } from '../../ios';
import githubIcon from '../../assets/github.png';
import style from './App.module.css';

function App() {
  const [ballot, setBallot] = useState<PartyBallot>(
    generateRandomPartyBallot()
  );
  const [currentScreen, setCurrentScreen] = useState<'editor' | 'message'>(
    'editor'
  );

  const setInitials = (initials: string) => {
    setBallot((prev) => ({ ...prev, initials }));
  };

  const setFooter = (footer: string) => {
    setBallot((prev) => ({ ...prev, footer }));
  };

  const exportPicture = async () => {
    document.body.setAttribute('print-mode', 'true');
    const dataUrl = await domToImage.toJpeg(
      document.getElementById('ballotContainer') as Node
    );
    document.body.setAttribute('print-mode', 'false');

    setCurrentScreen('message');
    share(dataUrl);
  };

  const ballotSearchUrl = 'https://www.gov.il/apps/moin/bocharim/';
  const reportBallotSearch = () => {
    (window as any).ga?.(
      'send',
      'event',
      'outbound',
      'click',
      ballotSearchUrl,
      {
        transport: 'beacon',
        hitCallback: function () {
          (document.location as any) = ballotSearchUrl;
        },
      }
    );
  };

  const renderEditor = () => {
    return (
      <>
        <span id="ballotContainer" className={style.ballotContainer}>
          <Ballot initials={ballot.initials} footer={ballot.footer} />
          <span className={style.watermark}>https://petek.design</span>
        </span>
        <form className={style.ballotForm}>
          <span className={style.inputGroup}>
            <label>אותיות</label>
            <input
              type="text"
              value={ballot.initials}
              onChange={(e) => setInitials(e.target.value)}
            />
          </span>
          <span className={style.inputGroup}>
            <label>שם המפלגה</label>
            <input
              type="text"
              value={ballot.footer}
              onChange={(e) => setFooter(e.target.value)}
            />
          </span>
          <span className={style.inputGroup}>
            <button
              onClick={(e) => {
                e.preventDefault();
                exportPicture();
              }}
            >
              שתף פתק
            </button>
          </span>
        </form>
      </>
    );
  };

  const renderMessage = () => {
    return (
      <span className={style.messageContainer}>
        <h1>בהצלחה בבחירות! ואל תשכחו - צאו להצביע!</h1>
        {isIos && (
          <p>
            אתם משתמשים באייפון. לכן, עליכם ללחוץ על ההורדה שתופיע לכם ולשתפה עם
            חבריכם
          </p>
        )}
        <p>לא יודעים היכן אתם מצביעים?</p>
        <a
          href={ballotSearchUrl}
          target="_blank"
          rel="noreferrer"
          onClickCapture={() => {
            reportBallotSearch();
            return false;
          }}
        >
          <button>לחצו כאן לאיתור הקלפי שלכם</button>
        </a>
        <button onClick={() => setCurrentScreen('editor')}>
          עצבו פתק נוסף
        </button>
      </span>
    );
  };

  return (
    <div className={style.container}>
      <a
        className={style.githubFlare}
        href="https://github.com/illBeRoy/petek"
        target="_blank"
        rel="noreferrer"
      >
        <img src={githubIcon} />
      </a>
      {currentScreen === 'editor' ? renderEditor() : renderMessage()}
    </div>
  );
}

export default App;
