import React from 'react'
import Hero from './Hero'
import Universe from './Universe'
import LeftImage from './LeftImage'
import kite from '../../assets/kite.png'
import play from '../../assets/googlePlayBadge.svg'
import app from '../../assets/appstoreBadge.svg'
import RightImage from './RightImage'
import console from '../../assets/console.png'
import kiteConnect from '../../assets/kiteconnect.png'
import varsity from '../../assets/varsity.png'
import coin from '../../assets/coin.png'

const ProductPage = () => {
  return (
    <div>
      <Hero/>
      <LeftImage heroImage={kite} heading="Kite" description="Our ultra-fast flagship trading platfo
advanced charts, an elegant UI, and
seamlessly on your Android and iOS" link1="Try demo" link2="Learn More" ad1={play} ad2={app}/>
      <RightImage heading="Console" description="The central dashboard for your Zerodha account. Gain
insights into your trades and investments with in-depth
reports and visualisations." link="Learn more" heroImage={console}/>
      <LeftImage heading="Coin" description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." link1="Coin" ad1={play} ad2={app} heroImage={coin}/>
      <RightImage heading="Kite Connect API" link="Kite Connect" description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." heroImage={kiteConnect}/>
      <LeftImage heading="Varsity mobile" description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." ad1={play} ad2={app} heroImage={varsity}/>
      <Universe/>
    </div>
  )
}

export default ProductPage
