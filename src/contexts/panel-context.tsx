'use client'

import { createContext, useContext, useReducer } from 'react'

import type { Dispatch, ReactElement, ReactNode } from 'react'

interface IState {
  panel: boolean
}

interface IPanelAction {
  type: PANEL_ACTIONS
}

export const panelReducerInitialState = {
  panel: false,
}

export enum PANEL_ACTIONS {
  PANEL_CLOSE = 'panelClose',
  PANEL_OPEN = 'panelOpen',
}

export const panelReducer = (state: IState, action: IPanelAction): IState => {
  switch (action.type) {
    case PANEL_ACTIONS.PANEL_OPEN:
      return { ...state, panel: true }
    case PANEL_ACTIONS.PANEL_CLOSE:
      return { ...state, panel: false }

    default:
      return state
  }
}

interface PanelContext {
  dispatch: Dispatch<IPanelAction>
  state: IState
}

const PanelContext = createContext<PanelContext | undefined>(undefined)

const PanelContextProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [state, dispatch] = useReducer(panelReducer, panelReducerInitialState)

  const contextValue: PanelContext = {
    dispatch,
    state,
  }

  return <PanelContext.Provider value={contextValue}>{children}</PanelContext.Provider>
}

const usePanelContext = (): PanelContext => {
  const context = useContext(PanelContext)

  if (context === undefined) {
    throw new Error('usePanelContext must be used within a PanelContextProvider')
  }
  return context
}

export { PanelContextProvider, usePanelContext }
