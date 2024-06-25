import React, { Component } from 'react'
import Image from "next/image"
export default class Header extends Component {
  render() {
    return (
    <div className="flex flex-row w-full justify-center items-center">
        <div className="relative mx-auto mt-5 h-24 w-60 justify-center">
          <Image fill={true} src="/1.png" objectFit="contain" alt="logo"></Image>
        </div>
      </div>
    )
  }
}
