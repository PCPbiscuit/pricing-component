import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.scss';
import classNames from 'classnames';

const Home = () => {
  const [range, setRange] = useState(0);
  const [checked, setCheck] = useState(false);

  const options = [
    'Unlimited websites',
    '100% data ownership',
    'Email reports',
  ];

  let price, views;
  if (range < 5) {
    views = '10K PAGEVIEWS';
    price = 8;
  } else if (range >= 5 && range < 10) {
    views = '50K PAGEVIEWS';
    price = 12;
  } else if (range >= 10 && range < 50) {
    views = '100K PAGEVIEWS';
    price = 16;
  } else if (range >= 50 && range < 100) {
    views = '500K PAGEVIEWS';
    price = 24;
  } else {
    views = '1M PAGEVIEWS';
    price = 36;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Pricing component</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title_block}>
          <h1>Simple, traffic-based pricing</h1>
          <h5>Sign-up for our 30-day trial. No credit card required. </h5>
        </div>
        <div className={styles.pricing_block}>
          <div className={styles.pricing_main}>
            <div className={styles.pricing_title}>
              <span>{views}</span>
              <span className={styles.price}>
                ${checked ? price * 0.75 : price}
                <span className={styles.month}>/ month</span>
              </span>
            </div>
            <div className={styles.price_progress}>
              <div className={styles.rectangle_bar}>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={range}
                  onChange={v => {
                    setRange(v.target.value);
                  }}
                  style={{
                    background: `linear-gradient(to right, #10d8c4 0%, #10d8c4 ${range}%, #ecf0fb ${range}%)`,
                  }}
                ></input>
              </div>
            </div>
            <div className={styles.billing_block}>
              <span className={styles.billing_title}>Monthly Billing</span>
              <div
                className={classNames(styles.check_slider, {
                  [styles.active_slider]: checked,
                })}
                onClick={() => {
                  setCheck(!checked);
                }}
              >
                <span />
              </div>
              <span className={styles.billing_title}>Yearly Billing</span>
              <span className={styles.discount_title}>25% discount</span>
            </div>
          </div>
          <div className={styles.pricing_footer}>
            <div className={styles.feat_list}>
              {options.map((k, i) => (
                <div className={styles.feat_option} key={i}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="8"
                    >
                      <path
                        fill="none"
                        stroke="#10D8C4"
                        stroke-width="2"
                        d="M1 4.134l1.907 1.908L7.949 1"
                      />
                    </svg>
                  </span>
                  {k}
                </div>
              ))}
            </div>
            <div className={styles.button}>Start my trial</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
