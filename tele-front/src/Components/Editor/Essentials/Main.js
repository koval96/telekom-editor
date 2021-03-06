import React, { useContext } from 'react'

import {PageContext} from "../../../Pages/Editor";

import FirstBar from "./FirstBar";
import SecondBar from "./SecondBar";
import Content from "./Content";
import {ThemeProvider} from "@design-system-rt/rtk-ui-kit";

function Main({refetch}) {
    const { currentResolution,themeTrigger } = useContext(PageContext)
    let bg_color = themeTrigger?  "#E5E5E5": "#1D2533"
    return (
        <div className="main" style={{"backgroundColor": bg_color}}>
            {currentResolution !== 'desktop' && (
                <FirstBar />
            )}
            <ThemeProvider themeName={themeTrigger? "light": "dark"}>
            <Content refetch={refetch} />
            </ThemeProvider>

            {currentResolution !== 'desktop' && (
                <SecondBar refetch={refetch} />
            )}
        </div>
    )
}

export default Main