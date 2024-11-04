'use client'
import { useState, useEffect } from 'react'
import { Filters } from '@/interface/ToursFilter'
import { Tour } from '@/interface/Tour'

interface ITypes {
  _id: string
  name: { ru: string; uz: string; en: string }
}

export const useTourState = () => {
  const [data, setData] = useState<Tour[]>([])
  const [filteredData, setFilteredData] = useState<Tour[]>([])
  const [types, setTypes] = useState<ITypes[]>([])
  const [typeId, setTypeID] = useState('')
  const [filters, setFilters] = useState<Filters>({
    fromAddress: '',
    toAddress: '',
    fromDate: undefined,
    toDate: undefined,
    adultSize: 0,
    childrenSize: 0,
    priceFrom: undefined,
    priceTo: undefined,
    typeId: ''
  })

  return {
    data,
    setData, // Agar setData kerak bo'lsa, uni qaytarish kerak
    filteredData,
    setFilteredData, // Agar setFilteredData kerak bo'lsa, uni qaytarish kerak
    types,
    setTypes, // Agar setTypes kerak bo'lsa, uni qaytarish kerak
    typeId,
    setTypeID,
    filters,
    setFilters
  }
}