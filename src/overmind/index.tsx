import { IConfig } from 'overmind'
import { createActionsHook, createEffectsHook, createHook, createStateHook } from 'overmind-react'
import { namespaced } from 'overmind/config'
import * as auth from './auth'

export const config = namespaced({
  auth,
})


declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}

export const useOvermind = createHook<typeof config>()
export const useState = createStateHook<typeof config>()
export const useActions = createActionsHook<typeof config>()
export const useEffects = createEffectsHook<typeof config>()
export const useReaction = createActionsHook<typeof config>()