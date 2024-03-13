"use client"

import clsx from 'clsx'
import { useState, ReactNode } from 'react'

interface FieldItemProps {
  title: "Soy Cliente" | "Soy Profesional" | "Soy Empresa"
  children: ReactNode
}


export default function FormPage() {
  return (
    <div className="flex justify-evenly w-full max-w-screen-xl">
      <FormRegisterClient />
      <FormRegisterProfessional />
      <FormRegisterEnterprise />
    </div>
  )
}


const FormRegisterClient = () => {
  return (
    <FieldItem title="Soy Cliente">
      Cliente
    </FieldItem>
  )
}

const FormRegisterProfessional = () => {
  return (
    <FieldItem title="Soy Profesional">
      Profesional
    </FieldItem>
  )
}

const FormRegisterEnterprise = () => {
  return (
    <FieldItem title="Soy Empresa">
      Empresa
    </FieldItem>
  )
}

const FieldItem = ({
  title,
  children
}: FieldItemProps) => {
  const bgColors = {
    "Soy Cliente": "bg-amber-500",
    "Soy Profesional": "bg-slate-500",
    "Soy Empresa": "bg-emerald-500"
  }

  const bgColor = bgColors[title]

  return (
    <section className="flex flex-col items-center gap-8 shadow-md mt-2 w-1/4 h-[500px] overflow-hidden rounded">
      <div className={clsx(
        "h-[5%] w-full",
        bgColor)}
      />
      <h2 className="font-semibold text-2xl text-center">
        {title}
      </h2>
      <hr className="w-3/4" />
      <div className="flex flex-col justify-between pb-6 h-full">
        {children}
        <button className={clsx(
          "w-fit px-8 py-4 rounded text-white font-medium",
          bgColor
        )}>
          Comenzar
        </button>
      </div>
    </section>
  )
}