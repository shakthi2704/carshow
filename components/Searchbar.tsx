"use client"
import React, { useState } from "react"
import Image from "next/image"
import { SearchManufacturer } from "."

const SearchbButton = () => {}

const Searchbar = () => {
  const [manufacturer, setManuFacturer] = useState("")
  const handleSearch = () => {}
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  )
}

export default Searchbar
