import { ss } from '@/utils/storage'
import { PanelPanelConfigStyleEnum } from '@/enums'
import defaultBackground from '@/assets/defaultBackground.webp'

const LOCAL_NAME = 'panelStorage'

export function defaultStatePanelConfig(): Panel.panelConfig {
  return {
    backgroundImageSrc: defaultBackground,
    backgroundBlur: 0,
    backgroundMaskNumber: 0,
    iconStyle: PanelPanelConfigStyleEnum.icon,
    iconTextColor: '#ffffff',
    logoText: 'Sun-Panel',
    maxWidth: 1200,
    maxWidthUnit: 'px',
    marginX: 5,
  }
}

export function defaultState(): Panel.State {
  return {
    panelConfig: { ...defaultStatePanelConfig() },
  }
}

export function getLocalState(): Panel.State {
  const localState = ss.get(LOCAL_NAME)
  return { ...defaultState(), ...localState }
}

export function setLocalState(state: Panel.State) {
  ss.set(LOCAL_NAME, state)
}

export function removeLocalState() {
  ss.remove(LOCAL_NAME)
}
