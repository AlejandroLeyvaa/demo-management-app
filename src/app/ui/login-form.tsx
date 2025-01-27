'use client'

import { useActionState } from 'react'
import { InputContainer } from './components/inputContainer';
import { authenticate } from '../lib/actions';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/home';
  const [state, action, pending] = useActionState(authenticate, undefined);
  return (

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">

        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Inicia Sesión con tu cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action={action} className="space-y-6">

          <InputContainer>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
            />
          </InputContainer>

          <InputContainer>
            <input
              id="wa_id"
              name="wa_id"
              type="tel"
              placeholder="Celular"
              className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
            />
          </InputContainer>

          <InputContainer>
            <input
              id="password"
              name="password"
              type="password"
              placeholder='password'
              required
              autoComplete="current-password"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </InputContainer>


          <div>
            <input type="hidden" name="redirectTo" value={callbackUrl} />
            <button
              disabled={pending}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {pending ? "Iniciando Sesión..." : "Iniciar Sesión"}
            </button>
          </div>
        </form>

      </div >
    </div >

  )
}