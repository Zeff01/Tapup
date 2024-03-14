export function elementOutlineHandler(className: string) {
    return {
        onMouseOver: () => {
            const els = document.querySelectorAll(`.${className}`)
            els.forEach((e:any) => {
                if (e.style) {
                    e.style.outline = "2px solid #1e1e1e"
                }
            })
        },

        onMouseOut: () => {
            const els = document.querySelectorAll(`.${className}`)           
            els.forEach((e:any) => {
                if (e.style) {
                    e.style.outline = "none"
                }
            })
        }
    };
}