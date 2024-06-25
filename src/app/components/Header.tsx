import React, { Component } from 'react'
import Image from "next/image"
export default class Header extends Component {
  render() {
    return (
    <div className="flex flex-row w-full justify-center items-center">
        <div className="relative mx-auto mt-5 h-24 w-80 justify-center">
          <Image fill={true} src="/1.png" objectFit="cover" alt="logo"></Image>
        </div>
        <div className="relative mx-auto h-12 w-20">
        <Image fill={true} src="/wflogo.png" objectFit="contain" alt="logo"></Image>
        </div>
      </div>
    )
  }
}
