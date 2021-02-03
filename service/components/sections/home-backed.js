import React, { forwardRef } from 'react';
import useTranslation from 'next-translate/useTranslation';

const HomeBacked = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  const data = [
    {
      img: '/assets/backed_by_logo/Binance_labs.svg',
      url: 'https://binancelabs.substack.com/',
      title: 'Binance_labs',
    },
    {
      img: '/assets/backed_by_logo/stakely.png',
      url: 'https://stakely.vc/',
      title: 'Stakely',
    },
    {
      img: '/assets/backed_by_logo/01_Caballeros_Logo.svg',
      url: 'http://caballeroscapital.com/',
      title: 'caballeros-capital',
    },
    {
      img: '/assets/backed_by_logo/02_Spark_Logo.svg',
      url: 'https://www.sparkdigitalcapital.com/',
      title: 'spark-digital-capital',
    },
    {
      img: '/assets/backed_by_logo/03_Focus_Labs_Logo_SW_shadow.png',
      url: 'https://focuslabs.io/',
      title: 'focus-labs',
    },
    {
      img: '/assets/backed_by_logo/04_AU21CAPITAL_Logo.svg',
      url: 'https://au21.capital/',
      title: 'au21',
    },
    {
      img: '/assets/backed_by_logo/vendetta_capital.png',
      url: 'https://www.vendetta.capital/',
      title: 'Vendetta',
    },
  ];

  const dataInfoPartners = [
    { url: 'https://ava.do/', image: 'assets/partners/01_avado.svg' },
    { url: 'https://www.froriep.com/', image: 'assets/partners/02_froriep.svg' },
    { url: 'https://elrond.com/', image: 'assets/partners/03_elrond.svg' },
    { url: 'https://www.sedimentum.com/', image: 'assets/partners/04_sedimentum.svg' },
    { url: 'https://www.swiss-medtech.ch/', image: 'assets/partners/05_swiss_medtech.svg' },
    { url: 'https://www.xdaichain.com/', image: 'assets/partners/06_dai_logo.svg' },
    { url: 'https://healthtech.ch/', image: 'assets/partners/07_health_tech_cluster.svg' },
    { url: 'https://swisshealthcarestartups.com/', image: 'assets/partners/08_swiss_healthcare_startups.svg' },
  ];

  const dataInfoAssSee = [
    { url: 'https://www.coindesk.com/binance-labs-leads-1m-seed-round-in-crypto-tor-alternative-hopr', image: 'assets/as_see/coindesk.svg' },
    { url: 'https://cointelegraph.com/news/hopr-data-privacy-testnet-to-launch-following-investment-by-binance', image: 'assets/as_see/cointelegraph.svg' },
    { url: 'https://www.moneytoday.ch/news/das-schweizer-tech-startup-hopr-sammelt-1-million-dollar-ein-binance-labs-fuehrt-die-investitionsru/', image: 'assets/as_see/moneytoday.svg' },
  ];

  return (
    <>
      <section
        ref={ref}
        id="BACKED-BY"
        className="section-backed invert-color "
      >
        <div className="container">
          <h2 id="support-section">{t('home:back.title')}</h2>
          <div className="item-back-container">
            {data.map((e, index) => {
              const { img, url, title, is_break } = e;
              if (!is_break) {
                return (
                  <a
                    href={url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={img} alt={title} />
                  </a>
                );
              } else {
                return (
                  <div className="break-line" key={index}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <img src={img} alt={title} />
                    </a>
                  </div>
                );
              }
            })}
          </div>
          <h2 id="partners-section">{t('home:back.titleA')}</h2>
          <div className="item-back-container">
            {dataInfoPartners.map((e, index) => {
              return (
                <a
                  href={e.url}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={e.image} alt={e.url} />
                </a>
              );
            })}
          </div>
          <h2>{t('home:back.titleB')}</h2>
          <div className="item-back-container">
            {dataInfoAssSee.map((e, index) => {
              return (
                <a
                  href={e.url}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={e.image} alt={e.url} />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
});

export default HomeBacked;
