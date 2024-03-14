
import { create } from 'zustand'

export type CustomFont = (
    "font-roboto-condensed"|
    "font-racing-sans-one"|
    "font-league-spartan"|
    "font-montserrat"|
    "font-open-sans"|
    "font-raleway"|
    "font-bebas"|
    "font-lato"|
    "font-kaushan"|
    "font-comic-neue"
)
export type Social = {
    socialType: string;
    socialValue: string;
}

type State = {
    customFont: CustomFont;
    fontColor: string;
    backgroundColor: string;
    name: string;
    position: string;
    company: string;
    socials: Social[];
    coverURL: string;
    profileURL: string; 
    address: string;
    iconColor: string;
    iconBackground: string;
}

type Action = {
    changeCustomFont(newFont:CustomFont) : void;
    changeFontColor(newColor: string) : void;
    changeBackgroundColor(newColor:string) : void;
    changeName(newName: string) : void;
    changePosition(newPosition: string) :   void;
    changeCompany(newCompany: string) :   void;
    addSocial(socialType:string, socialValue:string) : void;
    removeSocial(socialType:string) : void;
    changeCover(newImg:string) : void;
    changeProfile(newImg: string) : void;    
    changeAddress(newAdress: string) : void;
    changeIconColor(newValue: string) : void;
    changeIconBackground(newValue: string) : void;
    
}

const INITIAL_VALUES = {
    font: 'font-roboto-condensed', // TODO: adjust this
    fontColor: '#000000',
    backgroundColor: '#ffffff',
    name: 'Tony Stark',
    position: 'CEO',
    company: 'Stark Industries',
    coverURL: '',
    profileURL: '',
    address: 'Forrest Ray 191-103 Integer Rd. Corona New Mexico',
    iconColor: '#E5E7E1',
    iconBackground: '#7b7b7b',

} as const

export const useCustomCard = create<State & Action>((set) => ({
    customFont: INITIAL_VALUES.font,
    fontColor: INITIAL_VALUES.fontColor,
    backgroundColor: INITIAL_VALUES.backgroundColor,
    name: INITIAL_VALUES.name,
    position: INITIAL_VALUES.position,
    company: INITIAL_VALUES.company,
    socials: [],
    coverURL: INITIAL_VALUES.coverURL,
    profileURL: INITIAL_VALUES.profileURL,
    address: INITIAL_VALUES.address,
    iconColor: INITIAL_VALUES.iconColor,
    iconBackground: INITIAL_VALUES.iconBackground,

    changeName: (newName: string) => set(() => ({name: newName})),
    changeFontColor: (newColor: string) => set(() => ({fontColor:newColor})),
    changeBackgroundColor: (newColor: string) => set(() => ({backgroundColor:newColor})),
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
    changeProfile: (newImg: string) => set(() => ({profileURL: newImg})),
    changeAddress: (newAddress: string) => set(() => ({address: newAddress})),
    changeIconColor: (newValue: string) => set(() => ({iconColor: newValue})),
    changeIconBackground: (newValue: string) => set(() => ({iconBackground: newValue})),
}))
