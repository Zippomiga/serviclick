"use client"

import {
  checkListClient,
  checkListProfessional,
  checkListEnterprise
} from '@/lib/data-form-checklist'
import clsx from 'clsx'
import { Check, ChevronRight } from 'lucide-react'
import Link from 'next/link'


interface FormInfoLayoutProps {
  title: "Cliente" | "Profesional" | "Empresa"
  checkListData: Readonly<string[]>
}

const FormInfoLayout = ({
  title,
  checkListData
}: FormInfoLayoutProps) => {
  const isClient = title === "Cliente"
  const isProfessional = title === "Profesional"
  const isEnterprise = title === "Empresa"

  const formsRoutes = {
    "Cliente": "client",
    "Profesional": "professional",
    "Empresa": "enterprise",
  }

  const CheckListData = () => {
    return (
      <ul className="flex flex-col gap-4 h-full text-neutral-700 text-xs">
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
      "flex flex-col gap-4 w-full p-4", {
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
        href={`forms/form-register-${formsRoutes[title]}`}
      >
        Comenzar
        <ChevronRight />
      </Link>
    </section>

  )
}


const FormRegisterClientInfo = () => (
  <FormInfoLayout
    title="Cliente"
    checkListData={checkListClient}
  />
)

const FormRegisterProfessionalInfo = () => (
  <FormInfoLayout
    title="Profesional"
    checkListData={checkListProfessional}
  />
)

const FormRegisterEnterpriseInfo = () => (
  <FormInfoLayout
    title="Empresa"
    checkListData={checkListEnterprise}
  />
)


export default function FormsInfo() {
  return (
    <main className="flex flex-col bg-neutral-50 p-1 max-w-screen-2xl">
      <header className="bg-gradient-to-r from-amber-100 via-slate-100 to-emerald-100 pb-5">
        <h1 className="rounded-md w-full font-bold text-4xl text-center uppercase">
          ¿Cómo deseas registrarte?
        </h1>
        <h2 className="font-medium text-center text-rose-700">
          Elige el perfil que se adecúe a lo que necesites
        </h2>
      </header>
      <section className="flex">
        <FormRegisterClientInfo />
        <FormRegisterProfessionalInfo />
        <FormRegisterEnterpriseInfo />
      </section>
    </main>
  )
}