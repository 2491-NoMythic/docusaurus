import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Robot Docs',
    link: '/docs/category/robot-docs',
    imageurl: require('@site/static/img/Clover_Janusx200.jpg').default,
    description: (
      <>
        Documentaion out team wants to know for next time. What worked, what didn't,
        and info on each years robot is in this section.
      </>
    ),
  },
  {
    title: 'Tutorials',
    link: '/docs/category/robot-tutorials',
    imageurl: require('@site/static/img/circuit_playground.jpg').default,
    description: (
      <>
        Tutorials and How to's to help you learn different topics. From python on 
        Adafruit Circuit boards to an Intro to Java, and more.
      </>
    ),
  },
  {
    title: 'NoMythicApp',
    link: '/docs/no-mythic-app/what-is-it',
    imageurl: require('@site/static/img/NoMythicApp.jpg').default,
    description: (
      <>
       NoMythic is building an app to help organize and administer the team.
       Check here to find out what it is, and how to use it.
      </>
    ),
  },
];

function Feature({imageurl, link, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imageurl} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <Link to={link}><p>{description}</p></Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
