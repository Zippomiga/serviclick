"use client"

import {
  checkListClient,
  checkListProfessional,
  checkListEnterprise
} from '@/lib/data-form-checklist'
import clsx from 'clsx'
import { Check, ChevronRight } from 'lucide-react'
import Link from 'next/link'


interface FormContentProps {
  title: "Cliente" | "Profesional" | "Empresa"
  checkListData: Readonly<string[]>
}

const FormContent = ({
  title,
  checkListData
}: FormContentProps) => {
  const isClient = title === "Cliente"
  const isProfessional = title === "Profesional"
  const isEnterprise = title === "Empresa"

  const formsRoutes = {
    "Cliente": "form-register-client",
    "Profesional": "form-register-professional",
    "Empresa": "form-register-enterprise",
  }

  const CheckListData = () => {
    return (
      <ul className="flex flex-col gap-4 h-full text-neutral-500 text-xs">
        {checkListData.map((item, index) => (
          <li
            className="flex items-center gap-2 font-medium"
            key={index}>
            <div>
              <Check className={clsx(
                "w-4 h-4", {
                "text-amber-900": isClient,
                "text-slate-900": isProfessional,
                "text-emerald-900": isEnterprise,
              })} />
            </div>
            {item}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <section className={clsx(
      "flex flex-col shadow-lg gap-4 rounded w-full p-4", {
      "bg-gradient-to-t from-amber-100 to-amber-50": isClient,
      "bg-gradient-to-t from-slate-100 to-slate-50": isProfessional,
      "bg-gradient-to-t from-emerald-100 to-emerald-50": isEnterprise,
    })}>
      <h2 className={clsx(
        "py-1 rounded-md font-semibold text-4xl text-center shadow", {
        "bg-amber-100 text-amber-900": isClient,
        "bg-slate-100 text-slate-900": isProfessional,
        "bg-emerald-100 text-emerald-900": isEnterprise,
      })}>
        {title}
      </h2>
      <CheckListData />
      <Link
        className={clsx(
          "p-2 shadow rounded-md font-medium w-1/3 self-end flex items-center justify-between", {
          "bg-amber-200 hover:bg-amber-400 text-amber-900": isClient,
          "bg-slate-200 hover:bg-slate-400 text-slate-900": isProfessional,
          "bg-emerald-200 hover:bg-emerald-400 text-emerald-900": isEnterprise,
        })}
        href={`forms/${formsRoutes[title]}`}
      >
        Comenzar
        <ChevronRight />
      </Link>
    </section>

  )
}


const FormRegisterClientInfo = () => (
  <FormContent
    title="Cliente"
    checkListData={checkListClient}
  />
)

const FormRegisterProfessionalInfo = () => (
  <FormContent
    title="Profesional"
    checkListData={checkListProfessional}
  />
)

const FormRegisterEnterpriseInfo = () => (
  <FormContent
    title="Empresa"
    checkListData={checkListEnterprise}
  />
)


export default function Forms() {
  return (
    <main className="flex flex-col bg-neutral-50 p-1 max-w-screen-2xl">
      <h1 className="bg-gradient-to-r from-sky-950 to-sky-800 py-4 rounded-md font-bold text-4xl text-center text-white uppercase">
        ¿Cómo deseas registrarte?
      </h1>
      <section className="flex justify-between gap-8">
        <FormRegisterClientInfo />
        <FormRegisterProfessionalInfo />
        <FormRegisterEnterpriseInfo />
      </section>
    </main>
  )
}