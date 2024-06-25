import React, { Component } from 'react'
import ResturantCard from './components/ResturantCard'
export default class ResturantCards extends Component {
  render() {
    return (
<div className="flex w-full justify-between flex-col">
    <div className="flex flex-row w-full justify-between pb-4">
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
    </div>
    <div className="flex flex-row w-full justify-between">
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
        <ResturantCard/>
    </div>
</div>

    )
  }
}

