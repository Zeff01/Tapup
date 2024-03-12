
import { create } from 'zustand'

export type CustomFont = "font-roboto-condensed"|"font-racing-sans-one"|"font-league-spartan"

type State = {
    customFont: CustomFont;
    name: string;
    position: string;
    company: string;
}

type Action = {
    changeCustomFont(newFont:CustomFont) : void;
    changeName(newName: string) : void;
    changePosition(newPosition: string) :   void;
    changeCompany(newCompany: string) :   void;
}

const INITIAL_VALUES = {
    font: 'font-roboto-condensed',
    name: 'Tony Stark',
    position: 'CEO',
    company: 'Stark Industries'
} as const

export const useCustomCard = create<State & Action>((set) => ({
    customFont: INITIAL_VALUES.font,
    name: INITIAL_VALUES.name,
    position: INITIAL_VALUES.position,
    company: INITIAL_VALUES.company,
    changeName: (newName: string) => set(() => ({name: newName})),
    changeCustomFont: (newFont:CustomFont) => set(() => ({customFont: newFont})),
    changePosition: (newPosition: string) => set(() => ({position: newPosition})),
    changeCompany: (newCompany: string) => set(() => ({company: newCompany}))
}))
