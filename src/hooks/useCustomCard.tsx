
import { create } from 'zustand'

export type CustomFont = "font-roboto-condensed"|"font-racing-sans-one"|"font-league-spartan"
export type Social = {
    socialType: string;
    socialValue: string;
}

type State = {
    customFont: CustomFont;
    name: string;
    position: string;
    company: string;
    socials: Social[];
    coverURL: string;
    profileURL: string; 
}

type Action = {
    changeCustomFont(newFont:CustomFont) : void;
    changeName(newName: string) : void;
    changePosition(newPosition: string) :   void;
    changeCompany(newCompany: string) :   void;
    addSocial(socialType:string, socialValue:string) : void;
    removeSocial(socialType:string) : void;
    changeCover(newImg:string) : void;
    changeProfile(newImg: string) : void;
}

const INITIAL_VALUES = {
    font: 'font-roboto-condensed',
    name: 'Tony Stark',
    position: 'CEO',
    company: 'Stark Industries',
    coverURL: '',
    profileURL: ''
} as const

export const useCustomCard = create<State & Action>((set) => ({
    customFont: INITIAL_VALUES.font,
    name: INITIAL_VALUES.name,
    position: INITIAL_VALUES.position,
    company: INITIAL_VALUES.company,
    socials: [],
    coverURL: INITIAL_VALUES.coverURL,
    profileURL: INITIAL_VALUES.profileURL,

    changeName: (newName: string) => set(() => ({name: newName})),
    changeCustomFont: (newFont:CustomFont) => set(() => ({customFont: newFont})),
    changePosition: (newPosition: string) => set(() => ({position: newPosition})),
    changeCompany: (newCompany: string) => set(() => ({company: newCompany})),
    addSocial: (socialType:string, socialValue:string) => set((state) => (
        state.socials.find(s => s.socialType === socialType) ?
        // social already exist, overwrite it
        {socials: state.socials.map(s => s.socialType === socialType ? {...s, socialValue}: s)}:
        // new social add a new one
        {socials: [...state.socials, {socialType, socialValue}]}
    )),
    removeSocial: (socialType: string) => set((state) => ({socials: state.socials.filter(s => s.socialType !== socialType)})),
    changeCover: (newImg: string) => set(() => ({coverURL: newImg})),
    changeProfile: (newImg: string) => set(() => ({profileURL: newImg}))
}))
