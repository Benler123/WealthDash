"use client"

import React, { createContext, useContext } from "react"

const DataContext = createContext(null)

export const DataProvider = ({
  data,
  children
}: {
  data: any
  children: React.ReactNode
}) => <DataContext.Provider value={data}>{children}</DataContext.Provider>

export const useData = () => useContext(DataContext)
